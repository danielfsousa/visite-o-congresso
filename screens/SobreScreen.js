import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Text } from '../constants'
import { screenHit } from '../utils/analytics'
import { SubTitle, BodyText, BulletText } from '../components/StyledText'
import Hyperlink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'
import i18n from '../utils/i18n'

class SobreScreen extends Component {
  static __name__ = 'Sobre'

  componentDidMount () {
    screenHit(SobreScreen.__name__)
  }

  render () {
    const t = key => i18n.translate(Text.Menu.sobre.conteudo)[key]

    return (
      <View>
        <BodyText>
          {t('oAppFoiDesenvolvidoPor')}&nbsp;
          <Hyperlink href='https://github.com/danielfsousa'>Daniel Sousa</Hyperlink>
          &nbsp;{t('e')}&nbsp;
          <Hyperlink href='https://github.com/daniloleemes'>Danilo Lemes</Hyperlink>
          &nbsp;{t('duranteO')}&nbsp;
          <Hyperlink href='http://www1.congressonacional.leg.br/desafio/'>
            {t('desafioVisitApp')}
          </Hyperlink>
          &nbsp;{t('doSenadoFederal')}
        </BodyText>
        <SubTitle style={styles.subtitle}>
          {t('conteudoEDireitosAutorais')}
        </SubTitle>
        <BodyText>
          {t('conteudoEDoCongresso')}
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('apoio')}</SubTitle>
        <BodyText>
          {t('desenvolvidoComApoioDe')}
          {'\n\n'}
        </BodyText>
        <BulletText><Hyperlink href='http://www1.congressonacional.leg.br'>{t('congressoNacional')}</Hyperlink></BulletText>
        <BulletText><Hyperlink href='https://www12.senado.leg.br/hpsenado'>{t('senadoFederal')}</Hyperlink></BulletText>
        <BulletText><Hyperlink href='http://www2.camara.leg.br'>{t('camaraDosDeputados')}</Hyperlink></BulletText>
        <BulletText><Hyperlink href='http://sindilegis.org.br'>{t('sindilegis')}</Hyperlink></BulletText>
        <BulletText><Hyperlink href='http://www.alesfe.com.br'>{t('alesfe')}</Hyperlink></BulletText>
        <BulletText><Hyperlink href='http://ascip.org.br'>{t('ascip')}</Hyperlink></BulletText>
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

export default withParallax(SobreScreen, i18n.translate(Text.Menu.sobre))
