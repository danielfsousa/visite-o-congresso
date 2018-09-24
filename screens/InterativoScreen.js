import React, { Component } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import { Permissions } from 'expo'

import { pageHit } from '../utils/analytics'
import { Colors, Images, Icons, Layout } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'
import { BodyText } from '../components/StyledText'

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
    pageHit(InterativoScreen.__name__)
  }

  render () {
    return (
      <BackgroundImage
        source={Images.background}
        style={{ flex: 1 }}
        overlayStyle={styles.overlay}
      >
        <Header transparent style={styles.header}>
          {InterativoScreen.__name__}
        </Header>
        <View style={styles.container}>
          <Image source={Icons.qrCode} style={styles.icon} />
          <BodyText style={styles.text}>
            Interaja com os objetos encontrados no Congresso Nacional através da leitura dos QRCodes posicionados próximos a eles
          </BodyText>
          <StyledButton type='large' onPress={this.handleButtonPress}>
            Escanear código
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
