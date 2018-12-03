import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { screenHit } from '../utils/analytics'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'
import { BodyText } from '../components/StyledText'
import { Colors, Images, Icons, Layout, Links, Text } from '../constants'
import ConfirmAlert from '../components/ConfirmAlert'
import i18n from '../utils/i18n'

class GuiaVirtualScreen extends Component {
  static __name__ = 'Guia Virtual'

  static navigationOptions = () => ({ header: null })

  handleButtonPress = () => ConfirmAlert(() => WebBrowser.openBrowserAsync(Links.guiaVirtual))

  componentDidMount () {
    screenHit(GuiaVirtualScreen.__name__)
  }

  render () {
    return (
      <BackgroundImage
        source={Images.background}
        style={{ flex: 1 }}
        overlayStyle={styles.overlay}
      >
        <Header transparent style={styles.header}>
          {i18n.translate(Text.GuiaVirtual.titulo)}
        </Header>
        <View style={styles.container}>
          <Image source={Icons.guiaVirtual} style={styles.icon} />
          <BodyText style={styles.text}>
            {i18n.translate(Text.GuiaVirtual.descricao)}
          </BodyText>
          <StyledButton type='large' onPress={this.handleButtonPress}>
            {i18n.translate(Text.GuiaVirtual.acao)}
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
