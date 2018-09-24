import React, { Component } from 'react'
import { Analytics, PageHit } from 'expo-analytics'

import { Configuration } from '../constants'
import { BodyText } from '../components/StyledText'
import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class AHistoriaScreen extends Component {
  componentDidMount () {
    const analytics = new Analytics(Configuration.Analytics.id)
    analytics.hit(new PageHit('A História'))
  }

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
