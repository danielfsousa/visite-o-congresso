import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'
import { Analytics, PageHit } from 'expo-analytics'

import { Colors, Layout, Links, Text, Configuration } from '../constants'
import Header from '../components/Header'
import Tile from '../components/Tile'

class HomeAltScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Visite o Congresso</Header>
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
      onTilePress: () => this.props.navigation.navigate('GenericFAQ', {
        title: 'Guia do Professor',
        data: Text.GuiaProfessor
      })
    },
    {
      name: 'Como chegar',
      icon: 'md-pin',
      onTilePress: () => this.props.navigation.navigate('GenericFAQ', {
        title: 'Como Chegar',
        data: Text.ComoChegar
      })
    },
    {
      name: 'Eventos',
      icon: 'md-calendar',
      onTilePress: () => this.props.navigation.navigate('Eventos', {
        title: 'Eventos'
      })
    },
    {
      name: 'Entre em contato',
      icon: 'md-call',
      onTilePress: () => WebBrowser.openBrowserAsync(Links.contato)
    },
    {
      name: 'Agendamentos',
      icon: 'md-time',
      onTilePress: () => WebBrowser.openBrowserAsync(Links.agendamento)
    }
  ]

  componentDidMount () {
    const analytics = new Analytics(Configuration.Analytics.id)
    analytics.hit(new PageHit('Home'))
  }

  render () {
    return (
      <View style={styles.container}>
        {this.tiles.map(props => <Tile key={props.name} {...props} />)}
      </View>
    )
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
  }
})

export default HomeAltScreen
