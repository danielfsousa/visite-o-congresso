import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Analytics, PageHit } from 'expo-analytics'

import { Colors, Images, Text, Configuration } from '../constants'
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
        text: Text.Curiosidades.HistoriaCamara,
        image: Images.camaraDosDeputados,
        float: 'right'
      })
    },
    {
      name: 'A História do Senado',
      image: Images.historia,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Senado Federal',
        text: Text.Curiosidades.HistoriaSenado,
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
        caption: 'Arte\nno Congresso',
        text: Text.Curiosidades.Arte,
        image: Images.arte,
        float: 'left'
      })
    }
  ]

  componentWillMount () {
    const analytics = new Analytics(Configuration.Analytics.id)
    analytics.hit(new PageHit('Curiosidades'))
  }

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
