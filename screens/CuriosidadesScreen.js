import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Colors } from '../constants'
import Header from '../components/Header'
import Banner from '../components/Banner'

class CuriosidadesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Curiosidades</Header>
  })

  banners = [
    {
      name: 'A História do Congresso Nacional',
      image: require('../assets/images/curiosidades/historia.png'),
      onBannerPress: () => this.props.navigation.navigate('GuiaVirtual')
    },
    {
      name: 'Arquitetura',
      image: require('../assets/images/curiosidades/arquitetura.png'),
      onBannerPress: () => this.props.navigation.navigate('GuiaVirtual')
    },
    {
      name: 'Arte',
      image: require('../assets/images/curiosidades/arte.png'),
      onBannerPress: () => this.props.navigation.navigate('GuiaVirtual')
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
