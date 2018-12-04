import React, { Component } from 'react'
import { View, StyleSheet, Linking, Platform } from 'react-native'

import { screenHit } from '../utils/analytics'
import { Images, Links, Text } from '../constants'
import { BodyText, SubTitle } from '../components/StyledText'
import StyledButton from '../components/StyledButton'

import StyledImage from '../components/StyledImage'
import HyperLink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'
import i18n from '../utils/i18n'

class ComoChegarScreen extends Component {
  static __name__ = 'Como Chegar'

  handleMapPress = async () => {
    if (Platform.OS === 'ios') {
      return Linking.openURL(Links.locationIOS)
    } else if (await Linking.canOpenURL(Links.locationAndroid)) {
      return Linking.openURL(Links.locationAndroid)
    }

    Linking.openURL(Links.locationURL)
  }

  componentDidMount () {
    screenHit(ComoChegarScreen.__name__)
  }

  render () {
    const t = key => i18n.translate(Text.ComoChegar[key])

    return (
      <View>
        <StyledImage
          float='right'
          image={Images.mapa}
          style={[styles.image, styles.first]}
          overlayStyle={styles.overlayStyle}
        >
          <StyledButton
            onPress={this.handleMapPress}
            style={[styles.button]}
          >
            {t('abrirNoMapa')}
          </StyledButton>
        </StyledImage>
        <SubTitle style={[styles.subtitle, styles.first]}>{t('endereco')}</SubTitle>
        <BodyText>
          Praça dos Três Poderes, Zona Cívico-Administrativa
          {'\n'}
          Brasília - DF
          {'\n'}
          CEP - 70165-900
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('localizacao')}</SubTitle>
        <BodyText>
          {t('oPredioDoCongressoNacional')}
        </BodyText>
        <StyledImage
          float='left'
          image={Images.congresso_2}
          style={styles.image}
        />
        <BodyText>
          {t('eDeFacilAcesso')}
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('deOnibus')}</SubTitle>
        <BodyText>
          {t('onibusInfo')}&nbsp;
          <HyperLink href={Links.dfTrans}>
            www.horarios.dftrans.df.gov.br
          </HyperLink>
          .
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('deMicroOnibus')}</SubTitle>
        <BodyText>
          {t('microOnibusInfo')}&nbsp;
          <HyperLink href={Links.dfTrans}>
            www.horarios.dftrans.df.gov.br
          </HyperLink>
          .
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('deTaxi')}</SubTitle>
        <BodyText>
          {t('taxiInfo')}
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('deMetro')}</SubTitle>
        <BodyText>
          {t('metroInfo')}
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('deCarro')}</SubTitle>
        <BodyText>
          {t('carroInfo')}
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('aPartirDoAeroporto')}</SubTitle>
        <BodyText>
          {t('aeroportoInfo')}
        </BodyText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 50
  },

  overlayStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    width: 200,
    height: 57,
    opacity: 0.9
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
  () => i18n.translate(Text.ComoChegar.titulo)
)

export default ScreenWithParallax
