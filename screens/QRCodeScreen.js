import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo'

import { ConteudoQRCode, Colors } from '../constants'
import BackButton from '../components/BackButton'
import LoadingSpinner from '../components/LoadingSpinner'

class QRCodeScreen extends Component {
  static navigationOptions = () => ({ header: null })

  state = {
    screenOpened: false
  }

  handleBarCodeRead = ({ data }) => {
    const content = ConteudoQRCode[data]
    if (content) {
      this.props.navigation.navigate('InterativoDetail', { content })
    }
  }

  componentDidMount () {
    this.focusListener = this.props.navigation.addListener(
      'didFocus',
      () => this.setState(() => ({ screenOpened: true }))
    )
  }

  componentWillUnmount () {
    this.focusListener.remove()
  }

  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
        {this.state.screenOpened
          ? <BarCodeScanner
            onBarCodeRead={this.handleBarCodeRead}
            style={StyleSheet.absoluteFill}
          />
          : <LoadingSpinner text='Abrindo câmera...' />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default QRCodeScreen
