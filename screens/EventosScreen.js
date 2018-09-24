import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { pageHit } from '../utils/analytics'
import { BodyText } from '../components/StyledText'
import Hyperlink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'

class EventosScreen extends Component {
  static __name__ = 'Eventos'

  componentDidMount () {
    pageHit(EventosScreen.__name__)
  }

  render () {
    return (
      <View>
        <BodyText>
          Ao longo do ano diversos eventos são realizados tanto na Câmara dos Deputados como no Senado Federal. Eventos como sessões especiais e solenes; posse presidencial; abertura dos trabalhos legislativos e muitos outros podem ser abertas ao público.
        </BodyText>
        <BodyText style={styles.paragraph}>
          As iniciativas objetivam debater assuntos necessários ao aprofundamento dos trabalhos legislativos e de interesse da sociedade, oferecer o espaço democrático da Câmara dos Deputados e do Senado Federal à difusão da cultura brasileira e à reflexão sobre temas concernentes à cidadania e promover o acesso à informação. Para conhecer a agenda de eventos de cada Casa veja aqui:
        </BodyText>
        <Hyperlink href='http://www2.camara.leg.br/camaranoticias/agenda.html'>
          Câmara dos Deputados
        </Hyperlink>
        <Hyperlink href='http://www.senado.gov.br/noticias/RelacoesPublicas/'>
          Senado Federal
        </Hyperlink>
      </View>
    )
  }
}

const ScreenWithParallax = withParallax(
  EventosScreen,
  props => props.navigation.state.params.title
)

export default ScreenWithParallax

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 13,
    marginBottom: 13
  }
})
