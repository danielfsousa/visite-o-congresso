import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { Colors, Images, Layout } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import { BodyText } from '../components/StyledText'
import Hyperlink from '../components/Hyperlink'

class EventosScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        transparent
        detach
        type='big'
        onBackButtonClick={() => navigation.goBack()}>
        Eventos
      </Header>
    )
  })

  render () {
    return (
      <BackgroundImage
        source={Images.backgroundFade}
        style={styles.container}
        imageStyle={styles.backgroundImage}
        overlayStyle={styles.overlay}>

        <ScrollView
          alwaysBounceVertical={false}
          overScrollMode='never'
          style={styles.scrollContainer}>

          <BodyText>Ao longo do ano diversos eventos são realizados tanto na Câmara dos Deputados como no Senado Federal. Eventos como sessões especiais e solenes; posse presidencial; abertura dos trabalhos legislativos e muitos outros podem ser abertas ao público.</BodyText>
          <BodyText style={styles.paragraph}>As iniciativas objetivam debater assuntos necessários ao aprofundamento dos trabalhos legislativos e de interesse da sociedade, oferecer o espaço democrático da Câmara dos Deputados e do Senado Federal à difusão da cultura brasileira e à reflexão sobre temas concernentes à cidadania e promover o acesso à informação. Para conhecer a agenda de eventos de cada Casa veja aqui:</BodyText>
          <Hyperlink href='http://www2.camara.leg.br/camaranoticias/agenda.html'>Câmara dos Deputados</Hyperlink>
          <Hyperlink href='http://www.senado.gov.br/noticias/RelacoesPublicas/'>Senado Federal</Hyperlink>.
        </ScrollView>

      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  overlay: {
    backgroundColor: Colors.rgba(Colors.background, 96)
  },

  scrollContainer: {
    marginTop: 130,
    paddingHorizontal: Layout.padding
  },

  paragraph: {
    marginTop: 13,
    marginBottom: 13
  }

})

export default EventosScreen
