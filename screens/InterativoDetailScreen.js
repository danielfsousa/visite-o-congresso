import React, { Component } from 'react'
import { Analytics, Event } from 'expo-analytics'

import { BodyText } from '../components/StyledText'
import StyledImage from '../components/StyledImage'
import { Configuration } from '../constants'
import withParallax from './ParallaxScreenFactory'

class InterativoDetailScreen extends Component {
  componentWillMount () {
    const { category, action } = Configuration.Analytics.events.openScreen
    const analytics = new Analytics('UA-126108597-1')
    analytics.event(new Event(category, action, 'Detalhe Material Interativo'))
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
