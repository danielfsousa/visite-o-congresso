import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Permissions } from 'expo'

import { screenHit } from '../utils/analytics'
import { Colors, Images, Icons, Layout, Text } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'
import { BodyText } from '../components/StyledText'
import i18n from '../utils/i18n'

class InterativoScreen extends Component {
  static __name__ = 'Conteúdo Interativo'

  static navigationOptions = () => ({ header: null })

  requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    if (status === 'granted') {
      this.props.navigation.navigate('QRCode')
    }
  }

  handleButtonPress = () => this.requestCameraPermission()

  componentDidMount () {
    screenHit(InterativoScreen.__name__)
  }

  render () {
    return (
      <BackgroundImage
        source={Images.background}
        style={{ flex: 1 }}
        overlayStyle={styles.overlay}
      >
        <Header transparent style={styles.header}>
          {i18n.translate(Text.ConteudoInterativo.titulo)}
        </Header>
        <View style={styles.container}>
          <Image source={Icons.qrCode} style={styles.icon} />
          <BodyText style={styles.text}>
            {i18n.translate(Text.ConteudoInterativo.descricao)}
          </BodyText>
          <StyledButton type='large' onPress={this.handleButtonPress}>
            {i18n.translate(Text.ConteudoInterativo.acao)}
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
    width: 90,
    height: 90,
    marginBottom: 20
  }
})

export default InterativoScreen
