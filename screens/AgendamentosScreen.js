import React, { Component } from 'react'
import { View, StyleSheet, Linking } from 'react-native'

import { screenHit } from '../utils/analytics'
import { Links, Text } from '../constants'
import { BodyText, SubTitle, BulletText } from '../components/StyledText'

import StyledButton from '../components/StyledButton'
import HyperLink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'
import i18n from '../utils/i18n'

class AgendamentosScreen extends Component {
  static __name__ = 'Agendamentos'

  componentDidMount () {
    screenHit(AgendamentosScreen.__name__)
  }

  render () {
    const t = key => i18n.translate(Text.Agendamentos[key])

    return (
      <View>
        <BodyText>
          {t('comoFunciona')}
        </BodyText>
        <SubTitle style={styles.subtitle}>{t('quemDeveAgendar')}</SubTitle>
        <BulletText>
          {t('grupos15Pessoas')}
        </BulletText>
        <BulletText>
          {t('gruposIdiomas')}
        </BulletText>
        <BulletText>
          {t('gruposNecessidadesEspeciais')}
        </BulletText>
        <BulletText>
          {t('asQuintas')}
        </BulletText>
        <SubTitle style={styles.subtitle}>
          {t('visitasTecnicasETematicas')}
        </SubTitle>
        <BodyText>
          {t('modalidades')}&nbsp;
          <HyperLink href={Links.visitasTecnicas}>
            {t('siteOficial')}
          </HyperLink>
          .
        </BodyText>
        <StyledButton
          type='large'
          onPress={() => Linking.openURL(Links.agendamento)}
          style={styles.button}
        >
          {t('agendeSuaVisita')}
        </StyledButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 50
  },

  subtitle: {
    marginTop: 50,
    marginBottom: 25
  }
})

const ScreenWithParallax = withParallax(
  AgendamentosScreen,
  () => i18n.translate(Text.Agendamentos.titulo)
)

export default ScreenWithParallax
