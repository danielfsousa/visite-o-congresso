import React, { Component } from 'react'
import { BodyText } from '../components/StyledText'
import withParallax from './ParallaxScreenFactory'

class GenericDetailsScreen extends Component {
  render () {
    const { text } = this.props.navigation.state.params
    return <BodyText>{text}</BodyText>
  }
}

const ScreenWithParallax = withParallax(
  GenericDetailsScreen,
  props => props.navigation.state.params.title
)

export default ScreenWithParallax
