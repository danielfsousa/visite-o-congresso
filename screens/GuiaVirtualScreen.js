import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { Colors, Images, Links } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'
import { Label } from '../components/StyledText'

class GuiaVirtualScreen extends Component {
  static navigationOptions = () => ({
    header: null
  })

  handleButtonPress = async () => WebBrowser.openBrowserAsync(Links.guiaVirtual)

  // handleButtonPress = () => this.props.navigation.navigate('WebBrowser')

  render () {
    return (
      <BackgroundImage
        source={Images.guiaVirtualBackground}
        style={styles.container}
        overlayStyle={styles.overlay}
      >
        <Header transparent style={styles.header}>Guia Virtual</Header>
        <Image source={Images.guiaVirtualIcon} style={styles.icon} />
        <Label style={styles.label}>
          Explore o Congresso Nacional através de um tour virtual com áudios e fotos em 360º
        </Label>
        <StyledButton type='large' onPress={this.handleButtonPress}>
          Explorar
        </StyledButton>
      </BackgroundImage>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  overlay: {
    backgroundColor: Colors.rgba(Colors.background, 65)
  },

  header: {
    zIndex: 2,
    ...StyleSheet.absoluteFillObject
  },

  label: {
    marginBottom: 14
  },

  icon: {
    marginBottom: 20
  }
})

export default GuiaVirtualScreen
