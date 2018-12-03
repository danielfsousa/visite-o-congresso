import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo'

import { pageHit } from '../utils/analytics'
import { ConteudoQRCode, Colors, Text } from '../constants'
import BackButton from '../components/BackButton'
import LoadingSpinner from '../components/LoadingSpinner'
import i18n from '../utils/i18n'

class QRCodeScreen extends Component {
  static __name__ = 'Escaneador de QRCode'

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
    this.focusListener = this.props.navigation.addListener('didFocus', () =>
      this.setState(() => ({ screenOpened: true }))
    )

    pageHit(QRCodeScreen.__name__)
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
          : <LoadingSpinner text={i18n.translate(Text.ConteudoInterativo.carregando)} />}
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
