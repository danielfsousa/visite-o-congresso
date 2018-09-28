import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { WebBrowser } from 'expo'

import { pageHit } from '../utils/analytics'
import { Colors, Images, Links } from '../constants'
import Header from '../components/Header'
import Banner from '../components/Banner'

class CuriosidadesScreen extends Component {
  static __name__ = 'Curiosidades'

  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>{CuriosidadesScreen.__name__}</Header>
  })

  banners = [
    {
      name: 'A História da Câmara',
      image: Images.historiaCamara,
      onBannerPress: () => this.props.navigation.navigate('HistoriaCamara')
    },
    {
      name: 'A História do Senado',
      image: Images.historiaSenado,
      onBannerPress: () => this.props.navigation.navigate('HistoriaSenado')
    },
    {
      name: 'Como funciona a Câmara',
      image: Images.comoFuncionaCamara,
      onBannerPress: () => this.props.navigation.navigate('ComoFuncionaCamara')
    },
    {
      name: 'Como funciona o Senado',
      image: Images.comoFuncionaSenado,
      onBannerPress: () => WebBrowser.openBrowserAsync(Links.funcionamentoSenado)
    },
    {
      name: 'Arquitetura do Congresso',
      image: Images.arquiteturaCongresso,
      onBannerPress: () => this.props.navigation.navigate('Arquitetura')
    },
    {
      name: 'Arte no Congresso',
      image: Images.arteCongresso,
      onBannerPress: () => this.props.navigation.navigate('Arte')
    }
  ]

  componentDidMount () {
    pageHit(CuriosidadesScreen.__name__)
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
