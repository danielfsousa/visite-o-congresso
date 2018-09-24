import React, { Component } from 'react'
import { Analytics, PageHit } from 'expo-analytics'

import { BodyText } from '../components/StyledText'
import StyledImage from '../components/StyledImage'
import { Configuration } from '../constants'
import withParallax from './ParallaxScreenFactory'

class InterativoDetailScreen extends Component {
  componentDidMount () {
    const analytics = new Analytics(Configuration.Analytics.id)
    analytics.hit(new PageHit('Detalhe Material Interativo'))
  }

  render () {
    const { titulo, descricao, imagem } = this.props.navigation.state.params.content
    return (
      <React.Fragment>
        <StyledImage
          float='right'
          image={imagem}
          caption={titulo}
        />
        <BodyText>
          {descricao}
        </BodyText>
      </React.Fragment>
    )
  }
}

const ScreenWithParallax = withParallax(InterativoDetailScreen, () => 'Conteúdo Interativo')
export default ScreenWithParallax
