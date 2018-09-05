import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Colors, Layout } from '../constants'
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
      onTilePress: () => this.props.navigation.navigate('GuiaVisitante')
    },
    {
      name: 'Guia do professor',
      icon: 'md-school',
      onTilePress: () => this.props.navigation.navigate('GuiaProfessor')
    },
    {
      name: 'Agendamentos',
      icon: 'md-time',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    },
    {
      name: 'Como chegar',
      icon: 'md-pin',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    },
    {
      name: 'Entre em contato',
      icon: 'md-call',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    },
    {
      name: 'Eventos',
      icon: 'md-calendar',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    }
  ]

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
