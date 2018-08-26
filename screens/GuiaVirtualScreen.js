import React, { Component } from 'react'
import { ExpoConfigView } from '@expo/samples'

import Header from '../components/Header'

export default class GuiaVirtualScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <Header navigation={navigation}>Guia Virtual</Header>
  })

  render () {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />
  }
}
