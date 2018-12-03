import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { WebBrowser } from 'expo'

import { screenHit } from '../utils/analytics'
import { Colors, Images, Links, Text } from '../constants'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ConfirmAlert from '../components/ConfirmAlert'
import i18n from '../utils/i18n'

class CuriosidadesScreen extends Component {
  static __name__ = 'Curiosidades'

  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header navigation={navigation}>
        {i18n.translate(Text.Curiosidades.titulo)}
      </Header>
    )
  })

  banners = [
    {
      name: i18n.translate(Text.Curiosidades.historiaCamara.titulo),
      image: Images.historiaCamara,
      onBannerPress: () => this.props.navigation.navigate('HistoriaCamara')
    },
    {
      name: i18n.translate(Text.Curiosidades.historiaSenado.titulo),
      image: Images.historiaSenado,
      onBannerPress: () => this.props.navigation.navigate('HistoriaSenado')
    },
    {
      name: i18n.translate(Text.Curiosidades.comoFuncionaCamara.titulo),
      image: Images.comoFuncionaCamara,
      onBannerPress: () => this.props.navigation.navigate('ComoFuncionaCamara')
    },
    {
      name: i18n.translate(Text.Curiosidades.comoFuncionaSenado.titulo),
      image: Images.comoFuncionaSenado,
      onBannerPress: () => ConfirmAlert(() => WebBrowser.openBrowserAsync(Links.funcionamentoSenado))
    },
    {
      name: i18n.translate(Text.Curiosidades.arquiteturaCongresso.titulo),
      image: Images.arquiteturaCongresso,
      onBannerPress: () => this.props.navigation.navigate('Arquitetura')
    },
    {
      name: i18n.translate(Text.Curiosidades.arteCongresso.titulo),
      image: Images.arteCongresso,
      onBannerPress: () => this.props.navigation.navigate('Arte')
    }
  ]

  componentDidMount () {
    screenHit(CuriosidadesScreen.__name__)
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
