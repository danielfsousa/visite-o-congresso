import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { Colors, Images, Links } from '../constants'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'

class GuiaVirtualScreen extends Component {
  static navigationOptions = () => ({
    header: null
  })

  handleButtonPress = async () =>
    WebBrowser.openBrowserAsync(Links.guiaVirtual)

  // handleButtonPress = () => this.props.navigation.navigate('WebBrowser')

  render () {
    return (
      <View style={styles.container}>
        <Header transparent style={styles.header}>Guia Virtual</Header>
        <Image source={Images.guiaVirtualBackground} style={styles.image} />
        <StyledButton type='large' onPress={this.handleButtonPress}>
          Explorar
        </StyledButton>
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
  },

  header: {
    zIndex: 2,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GuiaVirtualScreen
