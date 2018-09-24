import React, { Component } from 'react'

import { pageHit } from '../utils/analytics'
import { BodyText } from '../components/StyledText'
import ImageWithAudio from '../components/ImageWithAudio'
import withParallax from './ParallaxScreenFactory'

class InterativoDetailScreen extends Component {
  componentDidMount () {
    const { titulo } = this.props.navigation.state.params
    pageHit(titulo)
  }

  render () {
    const {
      descricao,
      imagem,
      audio
    } = this.props.navigation.state.params.content
    return (
      <React.Fragment>
        <ImageWithAudio
          float='right'
          image={imagem}
          audio={audio}
          style={{ marginBottom: 50 }}
          // overlayStyle={{ backgroundColor: Colors.rgba(Colors.primary, 40) }}
        />
        <BodyText>
          {descricao}
        </BodyText>
      </React.Fragment>
    )
  }
}

const ScreenWithParallax = withParallax(
  InterativoDetailScreen,
  props => props.navigation.state.params.content.titulo
)

export default ScreenWithParallax
