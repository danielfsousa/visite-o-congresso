import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { pageHit } from '../utils/analytics'
import { Links } from '../constants'
import { BodyText, SubTitle, BulletText } from '../components/StyledText'

import StyledButton from '../components/StyledButton'
import HyperLink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'

class AgendamentosScreen extends Component {
  static __name__ = 'Agendamentos'

  componentDidMount () {
    pageHit(AgendamentosScreen.__name__)
  }

  render () {
    return (
      <View>
        <BodyText>
          O programa de visitas ao Palácio do Congresso Nacional funciona segundas, quintas, sextas, finais de semana e feriados, com entrada gratuita, das 9h às 17h30, com saídas de grupos a cada 30 minutos, a partir do Salão Negro.
          {'\n\n'}
          A visita institucional percorre os Plenários das duas Casas, os Salões Verde e Azul, além do Túnel do Tempo do Senado e o Salão Nobre da Câmara dos Deputados.
          {'\n\n'}
          A visita poderá ser cancelada por motivos de força maior e/ou questões de segurança. Nesses casos tentaremos avisar o responsável pelo agendamento com a maior antecedência possível. No entanto, devido a ocorrências de última hora, o cancelamento poderá ocorrer sem aviso prévio.
        </BodyText>
        <SubTitle style={styles.subtitle}>Quem deve agendar</SubTitle>
        <BulletText>
          Grupos com mais de 15 pessoas (exceto fins de semana e feriados);
        </BulletText>
        <BulletText>
          Grupos que precisam de tour em inglês, espanhol, francês ou libras;
        </BulletText>
        <BulletText>
          Grupos com necessidades especiais, tais como pessoas com dificuldades de locomoção;
        </BulletText>
        <BulletText>
          Às quintas, o agendamento é obrigatório para todos, independentemente da quantidade de pessoas.
        </BulletText>
        <SubTitle style={styles.subtitle}>
          Visitas Técnicas e Temáticas Especiais
        </SubTitle>
        <BodyText>
          O Senado Federal e a Câmara dos Deputados disponibilizam diferentes modalidades de visitas técnicas integradas e temáticas especiais.
          Para mais informações visite o&nbsp;
          <HyperLink href={Links.visitasTecnicas}>
            site oficial do Congresso Nacional:
          </HyperLink>
        </BodyText>
        <StyledButton
          type='large'
          onPress={() => WebBrowser.openBrowserAsync(Links.agendamento)}
          style={styles.button}
        >
          Agende sua visita
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
  AgendamentosScreen.__name__
)

export default ScreenWithParallax
