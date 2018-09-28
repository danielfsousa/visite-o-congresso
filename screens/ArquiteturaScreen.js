import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { pageHit } from '../utils/analytics'
import { Images, Colors, Fonts } from '../constants'
import { BodyText, Quote } from '../components/StyledText'

import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class ArquiteturaScreen extends Component {
  static __name__ = 'Arquitetura do Congresso'

  componentDidMount () {
    pageHit(ArquiteturaScreen.__name__)
  }

  render () {
    return (
      <View>
        <StyledImage
          float='right'
          image={Images.congresso_3}
          // caption={'Visitação Institucional\nIntegrada em Brasilia'}
          style={[styles.image, styles.first]}
          overlayStyle={{ backgroundColor: Colors.rgba(Colors.black, 10) }}
        />
        <BodyText>
          O Palácio do Congresso Nacional é um dos cartões postais de Brasília e está situado no extremo leste do Eixo Monumental. Ocupa um dos vértices do triângulo que delimita a Praça dos Três Poderes. Nos vértices da base do triângulo estão o Palácio do Planalto e o Supremo Tribunal Federal.
          {'\n\n'}
          Projetado pelo arquiteto Oscar Niemeyer, o Palácio consiste em um edifício principal, na horizontal, que serve de plataforma para as cúpulas do Senado Federal e da Câmara dos Deputados.
          {'\n\n'}
          A cúpula menor, voltada para baixo, abriga o Plenário do Senado Federal. A cúpula maior, voltada para cima, abriga o Plenário da Câmara dos Deputados. Atrás do edifício principal e entre as duas cúpulas se encontram duas torres de 28 andares: uma delas pertence à Câmara e a outra ao Senado.
          {'\n\n'}
          Em 2007, coincidindo com o centésimo aniversário de Oscar Niemeyer, o Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN) decidiu pelo tombamento do edifício do Congresso Nacional;
        </BodyText>
        <StyledImage
          float='left'
          image={Images.congressoDesenho}
          style={styles.image}
          overlayStyle={{ backgroundColor: Colors.rgba(Colors.black, 25) }}
        />
        <Quote>
          Arquitetura não constitui uma simples questão de engenharia, mas uma manifestação do espírito, da imaginação e da poesia
        </Quote>
        <BodyText>
          No Palácio do Congresso, por exemplo, a composição se formulou em função desse critério, das conveniências da arquitetura e do urbanismo, dos volumes, dos espaços livres, da oportunidade visual e das perspectivas e, especialmente, da intenção de lhe dar o caráter de monumentalidade, com a simplificação de seus elementos e a adoção de formas puras e geométricas. Daí decorreu todo o projeto do Palácio e o aproveitamento da conformação local, de maneira a criar no nível das avenidas que o ladeiam uma monumental esplanada e sobre ela fixar as cúpulas que deviam hierarquicamente caracterizá-lo.
        </BodyText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 50
  },

  quote: {
    fontFamily: Fonts.oblique,
    fontWeight: 'bold',
    color: 'white'
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

const ScreenWithParallax = withParallax(ArquiteturaScreen, ArquiteturaScreen.__name__)

export default ScreenWithParallax
