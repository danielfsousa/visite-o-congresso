import React, { Component } from 'react'

import { screenHit } from '../utils/analytics'
import FAQList from '../components/FAQList'
import withParallax from './ParallaxScreenFactory'

class GenericFaqScreen extends Component {
  handleFAQItemPress = faqItem =>
    this.props.navigation.navigate('GenericDetails', faqItem)

  componentDidMount () {
    const { title } = this.props.navigation.state.params
    screenHit(title)
  }

  render () {
    const { data } = this.props.navigation.state.params
    return <FAQList data={data} onFAQPress={this.handleFAQItemPress} />
  }
}

const parallaxFactoryProps = {
  scrollContainerStyle: { padding: 0 }
}

const ScreenWithParallax = withParallax(
  GenericFaqScreen,
  props => props.navigation.state.params.title,
  parallaxFactoryProps
)

export default ScreenWithParallax
