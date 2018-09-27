import React, { Component } from 'react'
import { View, StyleSheet, Linking } from 'react-native'

import { pageHit } from '../utils/analytics'
import { Images, Links } from '../constants'
import { BodyText, SubTitle } from '../components/StyledText'

import StyledImage from '../components/StyledImage'
import HyperLink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'

class ComoChegarScreen extends Component {
  static __name__ = 'Como Chegar'

  openMap = () => {
    console.warn('ueue')
    const congressoCoordenadasAndroid = 'geo:-15.7997119,-47.8663516'
    const congressoCoordenadasiOS =
      'http://maps.apple.com/?ll=-15.7997119,-47.8663516'
    const congressoCoordenadasURL = 'https://goo.gl/maps/tapDFGBN14H2'

    if (Linking.canOpenURL(congressoCoordenadasAndroid)) {
      Linking.openURL(congressoCoordenadasAndroid)
    } else if (Linking.canOpenURL(congressoCoordenadasiOS)) {
      Linking.openURL(congressoCoordenadasiOS)
    } else {
      Linking.openURL(congressoCoordenadasURL)
    }
  }

  componentDidMount () {
    pageHit(ComoChegarScreen.__name__)
  }

  render () {
    return (
      <View>
        <StyledImage
          float='right'
          image={Images.mapa}
          // onPress={this.openMap}
          onImagePress={() => console.warn('ueueu')}
          style={[styles.image, styles.first]}
        />
        <BodyText>
          O prédio do Congresso Nacional, projeto do arquiteto Oscar Niemeyer, é um dos principais monumentos de Brasília. Ele paira sobre os demais - não há outro mais alto que ele - para simbolizar a supremacia da vontade popular. É de fácil acesso a partir de qualquer ponto da cidade e não há quem não o conheça e possa informar o melhor caminho para chegar. Está localizado na Praça dos Três Poderes, junto com o Palácio do Planalto, sede do Executivo, e do Supremo Tribunal Federal, órgão máximo do Judiciário.
        </BodyText>
        <SubTitle style={styles.subtitle}>De ônibus</SubTitle>
        <BodyText>
          As linhas 152, 152.2, 152.3, 162, 161, 108, 108.3 e 108.5  passam pela Esplanada dos Ministérios e pela Praça dos Três Poderes.  As linhas podem ser pesquisadas no site do DFtrans do Distrito Federal:&nbsp;
          <HyperLink href={Links.dfTrans}>
            www.horarios.dftrans.df.gov.br
          </HyperLink>
          .
        </BodyText>
        <SubTitle style={styles.subtitle}>De micro-ônibus (zebrinha)</SubTitle>
        <BodyText>
          As linhas 07, 08, 11, 16, 24, 25, 31, 32 e 113 passam pela Esplanada dos Ministérios e pela Praça dos Três Poderes. As linhas podem ser pesquisadas no site do Dftrans do Distrito Federal:&nbsp;
          <HyperLink href={Links.dfTrans}>
            www.horarios.dftrans.df.gov.br
          </HyperLink>
          .
        </BodyText>
        <SubTitle style={styles.subtitle}>De táxi</SubTitle>
        <BodyText>
          Peça ao taxista para deixá-lo na Chapelaria do Congresso Nacional. Nesse local também há um ponto de táxi caso precise de um após a visita. Na Chapelaria informe que deseja ir ao Salão Negro.
          {'\n'}
          Atenção: o ponto de táxi não funciona nos finais de semana e nos feriados.
        </BodyText>
        <SubTitle style={styles.subtitle}>De metrô</SubTitle>
        <BodyText>
          Desça na estação da rodoviária do Plano Piloto (ponto final) e pegue um dos ônibus que passam pela Praça dos Três Poderes: 108, 108.3 e 108.5.
        </BodyText>
        <SubTitle style={styles.subtitle}>De carro</SubTitle>
        <BodyText>
          Como são vários os caminhos possíveis para chegar à Esplanada dos Ministérios, o jeito mais fácil é avaliar as possibilidades por mapas da internet. Quem vier de carro poderá estacionar em vagas ao longo das vias de acesso ao Congresso.
        </BodyText>
        <SubTitle style={styles.subtitle}>A partir do aeroporto</SubTitle>
        <BodyText>
          A linha executiva de ônibus 113, parte do aeroporto de Brasília e passa pela Praça dos Três Poderes.
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

const ScreenWithParallax = withParallax(
  ComoChegarScreen,
  ComoChegarScreen.__name__
)

export default ScreenWithParallax
