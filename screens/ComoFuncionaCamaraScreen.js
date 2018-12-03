import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { screenHit } from '../utils/analytics'
import { Images, Colors, Fonts, Text, Layout } from '../constants'
import { BodyText, SubTitle } from '../components/StyledText'
import FAQList from '../components/FAQList'

import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'
import ConfirmAlert from '../components/ConfirmAlert'

class ComoFuncionaCamaraScreen extends Component {
  static __name__ = 'Como Funciona a Câmara dos Deputados'

  handleFAQItemPress = faqItem =>
    (faqItem.link
      ? ConfirmAlert(() => WebBrowser.openBrowserAsync(faqItem.link))
      : this.props.navigation.navigate('GenericDetails', faqItem))

  componentDidMount () {
    screenHit(ComoFuncionaCamaraScreen.__name__)
  }

  render () {
    return (
      <View>
        <StyledImage
          float='right'
          image={Images.camara_1}
          caption={'Câmara\ndos Deputados'}
          style={[styles.image, styles.first]}
          overlayStyle={{ backgroundColor: Colors.rgba(Colors.black, 10) }}
        />
        <BodyText>
          O Poder Legislativo cumpre papel imprescindível perante a sociedade do País, visto que desempenha três funções primordiais para a consolidação da democracia: representar o povo brasileiro, legislar sobre os assuntos de interesse nacional e fiscalizar a aplicação dos recursos públicos.
          {'\n\n'}
          Nesse contexto, a Câmara dos Deputados, autêntica representante do povo brasileiro, exerce atividades que viabilizam a realização dos anseios da população, mediante discussão e aprovação de propostas referentes às áreas econômicas e sociais, como educação, saúde, transporte, habitação, entre outras, sem descuidar do correto emprego, pelos Poderes da União, dos recursos arrecadados da população com o pagamento de tributos.
          {'\n\n'}
          Assim, a Câmara dos Deputados compõe-se de representantes de todos os Estados e do Distrito Federal, o que resulta em um Congresso com diversidade de idéias, revelando-se uma Casa legislativa plural, a serviço da sociedade brasileira.
        </BodyText>
        <StyledImage
          float='left'
          image={Images.camara_2}
          style={styles.image}
          overlayStyle={{ backgroundColor: Colors.rgba(Colors.black, 25) }}
        />
        <SubTitle style={styles.subtitle}>Mais Informações</SubTitle>
        {
          <View style={styles.faq}>
            <FAQList
              data={Text.ComoFuncionaCamara}
              onFAQPress={this.handleFAQItemPress}
              style={styles.faq}
            />
          </View>
        }
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
    marginBottom: 25
  },

  faq: {
    position: 'relative',
    right: 20,
    width: Layout.width
  },

  first: {
    marginTop: 0
  },

  last: {
    marginBottom: 0
  }
})

const ScreenWithParallax = withParallax(
  ComoFuncionaCamaraScreen,
  ComoFuncionaCamaraScreen.__name__
)

export default ScreenWithParallax
