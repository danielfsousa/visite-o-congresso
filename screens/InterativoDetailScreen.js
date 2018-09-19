import React, { Component } from 'react'

import { BodyText } from '../components/StyledText'
import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class InterativoDetailScreen extends Component {
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
