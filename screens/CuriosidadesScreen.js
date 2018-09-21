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
        image: Images.senadoFederal,
        float: 'left'
      })
    },
    {
      name: 'Arquitetura',
      image: Images.arquitetura,
      onBannerPress: () => this.props.navigation.navigate('AHistoria', {
        caption: 'Arquitetura\nno Congresso',
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
    },
    {
      name: 'Como funciona a Câmara dos Deputados',
      image: Images.camaraDosDeputados,
      onBannerPress: () => WebBrowser.openBrowserAsync(Links.funcionamentoCamara)
    },
    {
      name: 'Como funciona o Senado Federal',
      image: Images.senadoFederal,
      onBannerPress: () => WebBrowser.openBrowserAsync(Links.funcionamentoSenado)
    },
    {
      name: 'Visitação Institucional Integrada em Brasília',
      image: Images.viibra,
      onBannerPress: () => WebBrowser.openBrowserAsync(Links.viibra)
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
