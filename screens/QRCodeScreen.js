import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo'

import { Colors, Layout, ConteudoQRCode } from '../constants'
import Header from '../components/Header'
import withParallax from './ParallaxScreenFactory'

class QRCodeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header transparent detach onBackButtonClick={() => navigation.goBack()}>
        Ler QRCode
      </Header>
    )
  })

  componentDidMount () {
    // this.props.navigation.navigate('InterativoDetail', {
    //   content: ConteudoQRCode['1']
    // })
  }

  handleBarCodeRead = ({ data }) => {
    const content = ConteudoQRCode[`${data}`]
    if (content) {
      this.props.navigation.navigate('InterativoDetail', {
        content
      })
    }
  }

  render () {
    return (
      <React.Fragment>
        <BarCodeScanner
          onBarCodeRead={this.handleBarCodeRead}
          style={styles.scanner} />
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Layout.padding,
    justifyContent: 'center',
    alignItems: 'center'
  },

  overlay: {
    backgroundColor: Colors.rgba(Colors.background, 67)
  },

  scanner: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  }
})

const ScreenWithParallax = withParallax(QRCodeScreen, () => 'Ler QRCode')
export default ScreenWithParallax
