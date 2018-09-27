import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'
// import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'

import { pageHit } from '../utils/analytics'
import { Colors, Layout, Links, Text } from '../constants'
import Header from '../components/Header'
import Tile from '../components/Tile'

// const triggerIcon = () => <Icon.Feather name='more-vertical' size={24} color={Colors.tabIconSelected} />

class HomeAltScreen extends Component {
  static __name__ = 'Visite o Parlamento'

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={styles.header} navigation={navigation}>
        {HomeAltScreen.__name__}
        {/* <Menu>
        <MenuTrigger children={triggerIcon()} customStyles={triggerStyles} />
        <MenuOptions customStyles={optionsStyles} >
          <MenuOption onSelect={() => {}} text='Save' />
          <MenuOption onSelect={() => {}} text='Save' />
          <MenuOption onSelect={() => {}} text='Save' />
        </MenuOptions>
      </Menu> */}
      </Header>
    )
  })

  tiles = [
    {
      name: 'Guia do visitante',
      icon: 'md-map',
      onTilePress: () =>
        this.props.navigation.navigate('GenericFAQ', {
          title: 'Guia do Visitante',
          data: Text.GuiaVisitante
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
    pageHit(HomeAltScreen.__name__)
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

// const triggerStyles = {
//   triggerOuterWrapper: {
//     marginLeft: 80
//   }
// }

// const optionsStyles = {
//   optionText: {
//     fontFamily: Fonts.book,
//     fontSize: Fonts.big,
//     letterSpacing: 0.9,
//     lineHeight: 26,
//     textAlign: 'left'
//   }
// }

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
  }
})

export default HomeAltScreen
