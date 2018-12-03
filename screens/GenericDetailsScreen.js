import React, { Component } from 'react'

import { screenHit } from '../utils/analytics'
import { BodyText } from '../components/StyledText'
import HyperLink from '../components/Hyperlink'
import withParallax from './ParallaxScreenFactory'

class GenericDetailsScreen extends Component {
  componentDidMount () {
    const { title } = this.props.navigation.state.params
    screenHit(title)
  }

  render () {
    const { text } = this.props.navigation.state.params
    const textoComLinks = HyperLink.findAndReplace(text)
    return (
      <BodyText>
        {textoComLinks}
      </BodyText>
    )
  }
}

const ScreenWithParallax = withParallax(
  GenericDetailsScreen,
  props => props.navigation.state.params.title
)

export default ScreenWithParallax
