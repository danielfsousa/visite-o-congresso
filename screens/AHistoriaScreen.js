import React, { Component } from 'react'

import { BodyText } from '../components/StyledText'
import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class AHistoriaScreen extends Component {
  render () {
    const { caption, image, text } = this.props.navigation.state.params
    return (
      <React.Fragment>
        <StyledImage
          float='right'
          image={image}
          caption={caption}
        />
        <BodyText>
          {text}
        </BodyText>
      </React.Fragment>
    )
  }
}

const ScreenWithParallax = withParallax(AHistoriaScreen, () => 'A História')
export default ScreenWithParallax
