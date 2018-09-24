import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { pageHit } from '../utils/analytics'
import { Images } from '../constants'
import { BodyText, SubTitle } from '../components/StyledText'

import StyledImage from '../components/StyledImage'
import HyperLink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'

class ViiBraScreen extends Component {
  static __name__ = 'ViiBra'

  componentDidMount () {
    pageHit(ViiBraScreen.__name__)
  }

  render () {
    return (
      <View>
        <StyledImage
          float='right'
          image={Images.congresso_1}
          caption={'Visitação Institucional\nIntegrada em Brasilia'}
          style={[styles.image, styles.first]}
          // overlayStyle={{ backgroundColor: Colors.rgba(Colors.primary, 40) }}
        />
        <BodyText>
          Construída em tempo recorde, Brasília é um ícone da modernidade não só para os brasileiros, mas para toda a humanidade. Com um singular e inovador traçado arquitetônico e edifícios monumentais, a cidade é um marco cívico, político e cultural do povo brasileiro, que atrai também a atenção de pessoas de todas as partes do mundo.
        </BodyText>
        <StyledImage
          style={styles.image}
          float='left'
          image={Images.palacioDoPlanalto}
          caption={'Palácio do Planalto'}
        />
        <BodyText>
          Visitar Brasília é experimentar a diversidade cultural do País. Por isso, é bem comum que pessoas vindas de outros estados brasileiros sintam-se em casa aqui. Esse sentimento fica ainda mais evidente quando as memórias trazem à superfície o esforço dos milhares de trabalhadores que materializaram o sonho de construir uma nova capital no interior do País. É como se a obra daqueles homens e mulheres pioneiros liderados pelo então presidente Juscelino Kubitschek tivesse deixado um recado de fé, esperança e capacidade de superação para as futuras gerações de brasileiros.
        </BodyText>
        <SubTitle style={styles.subtitle}>O Projeto</SubTitle>
        <BodyText>
          Para atender ao crescente fluxo de turistas interessados em visitar a capital federal, muitos dos principais órgãos públicos federais e distritais desenvolveram programas de visitação institucional às suas instalações.
        </BodyText>
        <StyledImage
          style={styles.image}
          float='right'
          image={Images.defensoriaPublica}
          caption={'Defensoria Pública\nda União'}
        />
        <BodyText>
          Os roteiros rapidamente tornaram-se importantes atrações turísticas de Brasília. No entanto, por funcionarem isoladamente, perdiam a oportunidade de potencializar a experiência dos turistas e de assim oferecer um passeio mais rico e completo. A partir dessa constatação, representantes das instituições públicas que promovem programas de visitação sentiram necessidade de integrar as ações, a fim de aperfeiçoar os projetos até então isolados.
          {'\n\n'}
          Assim surgiu o grupo de Visitação Institucional Integrada em Brasília (Viibra), inspirado nas palavras do presidente Juscelino Kubitschek, gravadas no mármore do Museu da Cidade na Praça dos Três Poderes e na parede do hall do Palácio da Alvorada: "Deste Planalto Central, desta solidão em que breve se transformará em cérebro das mais altas decisões nacionais, lanço os olhos mais uma vez sobre o amanhã do meu país e antevejo esta alvorada, com uma fé inquebrantável e uma confiança sem limites no seu grande destino".
          {'\n\n'}
        </BodyText>
        <BodyText>
          Para mais informações visite o site oficial do ViiBra:&nbsp;
          <HyperLink href='https://www.viibra.gov.br'>
            www.viibra.gov.br
          </HyperLink>
        </BodyText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 50
  },

  subtitle: {
    marginTop: 50,
    marginBottom: 25
  },

  first: {
    marginTop: 0
  },

  last: {
    marginBottom: 0
  }
})

const ScreenWithParallax = withParallax(ViiBraScreen, ViiBraScreen.__name__)

export default ScreenWithParallax
