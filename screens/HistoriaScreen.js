import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { screenHit } from '../utils/analytics'

import { BodyText } from '../components/StyledText'
import StyledImage from '../components/StyledImage'
import withParallax from './ParallaxScreenFactory'

class AHistoriaScreen extends Component {
  static __name__ = 'A História'

  componentDidMount () {
    screenHit(AHistoriaScreen.__name__)
  }

  render () {
    const { caption, image, text } = this.props.navigation.state.params
    return (
      <React.Fragment>
        <StyledImage
          style={styles.image}
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

const styles = StyleSheet.create({
  image: {
    marginBottom: 50
  }
})

const ScreenWithParallax = withParallax(
  AHistoriaScreen,
  props => props.navigation.state.params.title || AHistoriaScreen.__name__
)

export default ScreenWithParallax
