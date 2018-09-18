import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import { Colors, Images, Text } from '../constants'
import Header from '../components/Header'
import Banner from '../components/Banner'

class CuriosidadesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Curiosidades</Header>
  })

  banners = [
    {
      name: 'A História da Câmara dos Deputados',
      image: Images.historia,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Câmara\ndos Deputados',
        text: Text.GuiaVisitante[0].text,
        image: Images.camaraDosDeputados,
        float: 'right'
      })
    },
    {
      name: 'A História do Senado',
      image: Images.historia,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Senado Federal',
        text: Text.GuiaVisitante[0].text,
        image: Images.historia,
        float: 'left'
      })
    },
    {
      name: 'Arquitetura',
      image: Images.arquitetura,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Arquitetura',
        text: Text.Curiosidades.Arquitetura,
        image: Images.arquitetura,
        float: 'right'
      })
    },
    {
      name: 'Arte',
      image: Images.arte,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Arte',
        text: Text.GuiaVisitante[0].text,
        image: Images.arte,
        float: 'left'
      })
    }
  ]

  render () {
    return (
      <View style={styles.conatiner}>
        <ScrollView>
          {this.banners.map(props => <Banner key={props.name} {...props} />)}
        </ScrollView>
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
