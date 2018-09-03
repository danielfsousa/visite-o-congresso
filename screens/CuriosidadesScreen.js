import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Colors, Images } from '../constants'
import Header from '../components/Header'
import Banner from '../components/Banner'

class CuriosidadesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Curiosidades</Header>
  })

  banners = [
    {
      name: 'A História do Congresso Nacional',
      image: Images.historia,
      onBannerPress: () => this.props.navigation.navigate('AHistoria')
    },
    {
      name: 'Arquitetura',
      image: Images.arquitetura,
      onBannerPress: () => this.props.navigation.navigate('AHistoria')
    },
    {
      name: 'Arte',
      image: Images.arte,
      onBannerPress: () => this.props.navigation.navigate('AHistoria')
    }
  ]

  render () {
    return (
      <View style={styles.conatiner}>
        {this.banners.map(props => <Banner key={props.name} {...props} />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  }
})

export default CuriosidadesScreen
