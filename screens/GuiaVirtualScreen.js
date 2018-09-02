import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { Colors, Images, Layout, Links } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'
import { BodyText } from '../components/StyledText'

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
        <View style={styles.innerContainer}>
          <Image source={Images.guiaVirtualIcon} style={styles.icon} />
          <BodyText style={styles.text}>
            Explore o Congresso Nacional através de um tour virtual com áudios e fotos em 360º
          </BodyText>
          <StyledButton type='large' onPress={this.handleButtonPress}>
            Explorar
          </StyledButton>
        </View>
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

  innerContainer: {
    paddingHorizontal: Layout.padding,
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

  text: {
    marginBottom: 40
  },

  icon: {
    width: 76,
    height: 86,
    marginBottom: 20
  }
})

export default GuiaVirtualScreen
