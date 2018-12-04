import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { screenHit } from '../utils/analytics'
import { Images, Colors, Links, Text } from '../constants'
import { BodyText, SubTitle } from '../components/StyledText'

import StyledImage from '../components/StyledImage'
import HyperLink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'
import i18n from '../utils/i18n'

class ViiBraScreen extends Component {
  static __name__ = 'ViiBra'

  componentDidMount () {
    screenHit(ViiBraScreen.__name__)
  }

  render () {
    const t = key => i18n.translate(Text.ViiBra[key])

    return (
      <View>
        <StyledImage
          float='right'
          image={Images.viibra}
          caption={t('legenda')}
          style={[styles.image, styles.first]}
          overlayStyle={{ backgroundColor: Colors.rgba(Colors.black, 50) }}
        />
        <BodyText>
          {t('brasilia')}
        </BodyText>
        <StyledImage
          float='left'
          image={Images.congressoBrasilia}
          caption={t('congressoNacional')}
          style={styles.image}
        />
        <BodyText>
          {t('visitarBrasiliaE')}
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('oProjeto')}</SubTitle>
        <BodyText>
          {t('paraAtenderOFluxo')}
        </BodyText>
        <StyledImage
          style={styles.image}
          float='right'
          image={Images.palacioDoPlanalto}
          caption={t('palacioDoPlanalto')}
        />
        <BodyText>
          {t('osRoteiros')}
        </BodyText>
        <BodyText>
          {t('paraMaisInformacoes')}&nbsp;
          <HyperLink href={Links.viibra}>
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
