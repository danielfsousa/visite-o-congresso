import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { screenHit } from '../utils/analytics'
import { Images, Colors, Fonts, Links } from '../constants'
import { BodyText } from '../components/StyledText'
import StyledButton from '../components/StyledButton'
import ConfirmAlert from '../components/ConfirmAlert'

import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class ArteScreen extends Component {
  static __name__ = 'Arte no Congresso Nacional'

  componentDidMount () {
    screenHit(ArteScreen.__name__)
  }

  render () {
    return (
      <View>
        <StyledImage
          float='right'
          image={Images.arteCongresso}
          caption={'Alegoria de Brasília'}
          style={[styles.image, styles.first]}
          overlayStyle={{ backgroundColor: Colors.rgba(Colors.black, 10) }}
        />
        <BodyText>
          A Câmara dos Deputados e o Senado Federal possuem obras de arte, mobiliário, peças decorativas trazidas de suas antigas sedes, presentes doados por autoridades em visita oficial, condecorações e moedas comemorativas, entre outros. Fazem parte desse acervo, obras de artistas ilustres como Athos Bulcão, Marianne Peretti, Alfredo Ceschiatti, Di Cavalcanti e Burle Marx.
        </BodyText>
        <StyledButton
          type='large'
          onPress={() => ConfirmAlert(() => WebBrowser.openBrowserAsync(Links.arte))}
          style={styles.button}
        >
          VEJA TODAS AS FOTOS
        </StyledButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 50
  },

  button: {
    marginTop: 50
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

const ScreenWithParallax = withParallax(ArteScreen, ArteScreen.__name__)

export default ScreenWithParallax
