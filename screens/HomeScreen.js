import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { WebBrowser } from 'expo'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu'

import { HeaderIcon } from '../components/Icon'
import { pageHit } from '../utils/analytics'
import { Colors, Layout, Links, Text, Fonts } from '../constants'
import Header from '../components/Header'
import Tile from '../components/Tile'

const triggerIcon = () => (
  <View style={styles.menuButton}>
    <HeaderIcon name='md-more' />
  </View>
)

class HomeScreen extends Component {
  static __name__ = 'Visite o Congresso'

  static navigationOptions = ({ navigation }) => ({
    header: (
      <React.Fragment>
        <Header style={styles.header} navigation={navigation}>
          {HomeScreen.__name__}
        </Header>
        <Menu style={styles.menu}>
          <MenuTrigger children={triggerIcon()} customStyles={triggerStyles} />
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption
              onSelect={() => navigation.navigate('Sobre')}
              text='Sobre'
            />
            <MenuOption
              onSelect={() => Linking.openURL(`mailto:contato@visiteocongresso.app`)}
              text='Enviar sugestão'
            />
            <MenuOption
              onSelect={() => WebBrowser.openBrowserAsync(Links.paginaOficial)}
              text='Página oficial'
            />
            <MenuOption
              onSelect={() => Linking.openURL(Links.facebook)}
              text='Facebook'
            />
            <MenuOption
              onSelect={() => Linking.openURL(Links.telefone)}
              text='Ligar'
            />
          </MenuOptions>
        </Menu>
      </React.Fragment>
    )
  })

  tiles = [
    {
      name: 'Guia do visitante',
      icon: 'md-map',
      onTilePress: () =>
        this.props.navigation.navigate('GenericFAQ', {
          title: 'Guia do Visitante',
          data: Text.GuiaVisitante.pt_BR
        })
    },
    {
      name: 'Guia do professor',
      icon: 'md-school',
      onTilePress: () =>
        this.props.navigation.navigate('GenericFAQ', {
          title: 'Guia do Professor',
          data: Text.GuiaProfessor
        })
    },
    {
      name: 'Como chegar',
      icon: 'md-pin',
      onTilePress: () => this.props.navigation.navigate('ComoChegar')
    },
    {
      name: 'Entre em contato',
      icon: 'md-call',
      onTilePress: () => WebBrowser.openBrowserAsync(Links.contato)
    },
    {
      name: 'Agendamentos',
      icon: 'md-time',
      onTilePress: () => this.props.navigation.navigate('Agendamentos')
    },
    {
      name: 'Dúvidas',
      icon: 'md-help',
      onTilePress: () =>
        this.props.navigation.navigate('GenericFAQ', {
          title: 'Perguntas Frequentes',
          data: Text.FAQ
        })
    },
    {
      name: 'ViiBra',
      icon: 'md-trending-up',
      onTilePress: () => this.props.navigation.navigate('ViiBra')
    },
    {
      name: 'Eventos',
      icon: 'md-calendar',
      onTilePress: () => WebBrowser.openBrowserAsync(Links.eventosCamara)
    }
  ]

  componentDidMount () {
    pageHit(HomeScreen.__name__)
  }

  render () {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {this.tiles.map(props => <Tile key={props.name} {...props} />)}
        </View>
      </ScrollView>
    )
  }
}

const triggerStyles = {
  TriggerTouchableComponent: TouchableOpacity,
  triggerWrapper: {
    padding: 5
  }
}

const optionsStyles = {
  optionWrapper: {
    padding: 10
  },
  optionText: {
    fontFamily: Fonts.book,
    fontSize: Fonts.medium,
    letterSpacing: 0.9,
    lineHeight: 26,
    textAlign: 'left',
    color: Colors.background
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: Layout.padding,
    backgroundColor: Colors.background
  },

  scrollContainer: {
    backgroundColor: Colors.background
  },

  menuButton: {
    zIndex: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 10,
    width: 44,
    height: 44,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tilesBackground
  },

  menu: {
    zIndex: 10,
    backgroundColor: Colors.background,
    position: 'absolute',
    right: Layout.padding,
    top: Layout.padding
  }
})

export default HomeScreen
