import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { WebBrowser } from 'expo'
import { Analytics, PageHit } from 'expo-analytics'

import { Colors, Images, Text, Configuration, Links } from '../constants'
import Header from '../components/Header'
import Banner from '../components/Banner'

class CuriosidadesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Curiosidades</Header>
  })

  banners = [
    {
      name: 'A História da Câmara',
      image: Images.historiaCamara,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Câmara\ndos Deputados',
        text: Text.Curiosidades.HistoriaCamara,
        image: Images.historiaCamara,
        float: 'right'
      })
    },
    {
      name: 'A História do Senado',
      image: Images.historiaSenado,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Senado Federal',
        text: Text.Curiosidades.HistoriaSenado,
        image: Images.historiaSenado,
        float: 'left'
      })
    },
    {
      name: 'Como funciona a Câmara',
      image: Images.comoFuncionaCamara,
      onBannerPress: () => WebBrowser.openBrowserAsync(Links.funcionamentoCamara)
    },
    {
      name: 'Como funciona o Senado',
      image: Images.comoFuncionaSenado,
      onBannerPress: () => WebBrowser.openBrowserAsync(Links.funcionamentoSenado)
    },
    {
      name: 'Arquitetura no Congresso',
      image: Images.arquiteturaCongresso,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Arquitetura\nno Congresso',
        text: Text.Curiosidades.Arquitetura,
        image: Images.arquiteturaCongresso,
        float: 'right'
      })
    },
    {
      name: 'Arte no Congresso',
      image: Images.arteCongresso,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Arte\nno Congresso',
        text: Text.Curiosidades.Arte,
        image: Images.arteCongresso,
        float: 'left'
      })
    },
    {
      name: 'Visitação Institucional Integrada',
      image: Images.viibra,
      onBannerPress: () => WebBrowser.openBrowserAsync(Links.viibra)
    }
  ]

  componentDidMount () {
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
