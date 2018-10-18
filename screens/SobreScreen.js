import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { pageHit } from '../utils/analytics'
import { SubTitle, BodyText, BulletText } from '../components/StyledText'
import Hyperlink from '../components/Hyperlink'

import withParallax from './ParallaxScreenFactory'

class SobreScreen extends Component {
  static __name__ = 'Sobre'

  componentDidMount () {
    pageHit(SobreScreen.__name__)
  }

  render () {
    return (
      <View>
        <BodyText>
          O aplicativo Visite o Congresso foi desenvolvido por&nbsp;
          <Hyperlink href='https://github.com/danielfsousa'>Daniel Sousa</Hyperlink>
          &nbsp;e&nbsp;
          <Hyperlink href='https://github.com/daniloleemes'>Danilo Lemes</Hyperlink>
          &nbsp;durante o&nbsp;
          <Hyperlink href='http://www1.congressonacional.leg.br/desafio/'>
            Desafio VisitApp
          </Hyperlink>
          &nbsp;do Senado Federal, tendo como objetivo guiar e oferecer a mesma experiência aos visitantes presenciais e virtuais do Congresso Nacional.
        </BodyText>
        <SubTitle style={styles.subtitle}>
          Conteúdo e Direitos Autorais
        </SubTitle>
        <BodyText>
          Todo o conteúdo mostrado no presente aplicativo é de autoria do Congresso Nacional, Senado Federal, Câmara dos Deputados e Projeto ViiBra. Sendo assim, far-se-á a explícita menção às respectivas Entidades, Órgãos e Projetos.
        </BodyText>
        <SubTitle style={styles.subtitle}>Apoio</SubTitle>
        <BodyText>
          O aplicativo foi desenvolvido com o apoio de:
          {'\n\n'}
        </BodyText>
        <BulletText><Hyperlink href='http://www1.congressonacional.leg.br'>Congresso Nacional</Hyperlink></BulletText>
        <BulletText><Hyperlink href='https://www12.senado.leg.br/hpsenado'>Senado Federal</Hyperlink></BulletText>
        <BulletText><Hyperlink href='http://www2.camara.leg.br'>Câmara dos Deputados</Hyperlink></BulletText>
        <BulletText><Hyperlink href='http://sindilegis.org.br'>Sindilegis</Hyperlink></BulletText>
        <BulletText><Hyperlink href='http://www.alesfe.com.br'>ALESFE</Hyperlink></BulletText>
        <BulletText><Hyperlink href='http://ascip.org.br'>ASCIP</Hyperlink></BulletText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subtitle: {
    marginTop: 50,
    marginBottom: 25
  }
})

const ScreenWithParallax = withParallax(SobreScreen, SobreScreen.__name__)

export default ScreenWithParallax
