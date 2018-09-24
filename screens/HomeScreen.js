import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import { pageHit } from '../utils/analytics'
import { Colors, Layout, Images } from '../constants'
import Header from '../components/Header'
import Tile from '../components/Tile'
import Banner from '../components/Banner'

class HomeScreen extends Component {
  static __name__ = 'Visite o Congresso'

  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Visite o Congresso</Header>
  })

  tiles = [
    {
      name: 'A História do Congresso Nacional',
      image: Images.historia,
      type: 'banner',
      onBannerPress: () => this.props.navigation.navigate('AHistoria')
    },
    {
      name: 'Guia do visitante',
      icon: 'md-map',
      type: 'tile',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    },
    {
      name: 'Guia do professor',
      icon: 'md-school',
      type: 'tile',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    },
    {
      name: 'Arquitetura',
      image: Images.arquitetura,
      type: 'banner',
      onBannerPress: () => this.props.navigation.navigate('AHistoria')
    },
    {
      name: 'Agendamentos',
      icon: 'md-time',
      type: 'tile',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    },
    {
      name: 'Como chegar',
      icon: 'md-pin',
      type: 'tile',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    },
    {
      name: 'Arte',
      image: Images.arte,
      type: 'banner',
      onBannerPress: () => this.props.navigation.navigate('AHistoria')
    },
    {
      name: 'Entre em contato',
      icon: 'md-call',
      type: 'tile',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    },
    {
      name: 'Eventos',
      icon: 'md-calendar',
      type: 'tile',
      onTilePress: () => this.props.navigation.navigate('EmBreve')
    }
  ]

  componentDidMount () {
    pageHit(HomeScreen.__name__)
  }

  render () {
    return (
      <ScrollView
        alwaysBounceVertical={false}
        overScrollMode='never'
        style={styles.scrollContainer}
      >
        <View style={styles.container}>
          {this.tiles.map(
            props =>
              (props.type === 'tile'
                ? <Tile key={props.name} {...props} />
                : <Banner key={props.name} {...props} />)
          )}
        </View>
      </ScrollView>
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
  },
  scrollContainer: {
    backgroundColor: Colors.background
  }
})

export default HomeScreen
