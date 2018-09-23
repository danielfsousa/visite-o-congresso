import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'
import { Analytics, PageHit } from 'expo-analytics'

import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'
import { BodyText } from '../components/StyledText'
import {
  Colors,
  Images,
  Icons,
  Layout,
  Links,
  Configuration
} from '../constants'

class GuiaVirtualScreen extends Component {
  static navigationOptions = () => ({ header: null })

  handleButtonPress = () => WebBrowser.openBrowserAsync(Links.guiaVirtual)

  componentWillMount () {
    const analytics = new Analytics(Configuration.Analytics.id)
    analytics.hit(new PageHit('Guia Virtual'))
  }

  render () {
    return (
      <BackgroundImage
        source={Images.background}
        style={{ flex: 1 }}
        overlayStyle={styles.overlay}
      >
        <Header transparent style={styles.header}>Guia Virtual</Header>
        <View style={styles.container}>
          <Image source={Icons.guiaVirtual} style={styles.icon} />
          <BodyText style={styles.text}>
            Explore o Congresso Nacional através de um tour virtual com informações sobre as principais salas, áudios e fotos em 360º
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
    alignItems: 'center',
    paddingHorizontal: Layout.padding
  },

  header: {
    height: Layout.headerHeight - 30
  },

  overlay: {
    backgroundColor: Colors.rgba(Colors.background, 94)
  },

  text: {
    marginBottom: 40,
    textAlign: 'center'
  },

  icon: {
    width: 78.91,
    height: 90,
    marginBottom: 20
  }
})

export default GuiaVirtualScreen
