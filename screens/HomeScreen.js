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
import { screenHit } from '../utils/analytics'
import { Colors, Layout, Links, Text, Fonts } from '../constants'
import Header from '../components/Header'
import Tile from '../components/Tile'
import ConfirmAlert from '../components/ConfirmAlert'
import i18n from '../utils/i18n'

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
          {i18n.translate(Text.Home.titulo)}
        </Header>
        <Menu style={styles.menu}>
          <MenuTrigger children={triggerIcon()} customStyles={triggerStyles} />
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption
              onSelect={() => navigation.navigate('Sobre')}
              text={i18n.translate(Text.Menu.sobre)}
            />
            <MenuOption
              onSelect={() => Linking.openURL(`mailto:contato@visiteocongresso.app`)}
              text={i18n.translate(Text.Menu.enviarSugestao)}
            />
            <MenuOption
              onSelect={() => ConfirmAlert(() => WebBrowser.openBrowserAsync(Links.paginaOficial))}
              text={i18n.translate(Text.Menu.paginaOficial)}
            />
            <MenuOption
              onSelect={() => ConfirmAlert(() => WebBrowser.openBrowserAsync(Links.facebook))}
              text={i18n.translate(Text.Menu.facebook)}
            />
            <MenuOption
              onSelect={() => Linking.openURL(Links.telefone)}
              text={i18n.translate(Text.Menu.ligar)}
            />
            <MenuOption
              onSelect={i18n.switchLanguage}
              text={i18n.translate(Text.Menu.alterarIdioma)}
            />
          </MenuOptions>
        </Menu>
      </React.Fragment>
    )
  })

  tiles = () => [
    {
      name: i18n.translate(Text.Tiles.guiaDoVisitante),
      icon: 'md-map',
      onTilePress: () =>
        this.props.navigation.navigate('GenericFAQ', {
          title: i18n.translate(Text.Tiles.guiaDoVisitante),
          data: i18n.translate(Text.GuiaVisitante)
        })
    },
    {
      name: i18n.translate(Text.Tiles.guiaDoProfessor),
      icon: 'md-school',
      onTilePress: () =>
        this.props.navigation.navigate('GenericFAQ', {
          title: i18n.translate(Text.Tiles.guiaDoProfessor),
          data: Text.GuiaProfessor
        })
    },
    {
      name: i18n.translate(Text.Tiles.comoChegar),
      icon: 'md-pin',
      onTilePress: () => this.props.navigation.navigate('ComoChegar')
    },
    {
      name: i18n.translate(Text.Tiles.entreEmContato),
      icon: 'md-call',
      onTilePress: () => Linking.openURL(`mailto:contato@visiteocongresso.app`)
    },
    {
      name: i18n.translate(Text.Tiles.agendamentos),
      icon: 'md-time',
      onTilePress: () => this.props.navigation.navigate('Agendamentos')
    },
    {
      name: i18n.translate(Text.Tiles.duvidas),
      icon: 'md-help',
      onTilePress: () =>
        this.props.navigation.navigate('GenericFAQ', {
          title: 'Perguntas Frequentes',
          data: Text.FAQ
        })
    },
    {
      name: i18n.translate(Text.Tiles.viibra),
      icon: 'md-trending-up',
      onTilePress: () => this.props.navigation.navigate('ViiBra')
    },
    {
      name: i18n.translate(Text.Tiles.eventos),
      icon: 'md-calendar',
      onTilePress: () => ConfirmAlert(() => WebBrowser.openBrowserAsync(Links.eventosCamara))
    }
  ]

  componentDidMount () {
    screenHit(HomeScreen.__name__)
  }

  render () {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {this.tiles().map(props => <Tile key={props.name} {...props} />)}
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
