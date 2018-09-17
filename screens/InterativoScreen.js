import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { Colors, Images, Layout, Links } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import StyledButton from '../components/StyledButton'
import { BodyText } from '../components/StyledText'

class InterativoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header transparent detach onBackButtonClick={() => navigation.goBack()}>
        Material Interativo
      </Header>
    )
  })

  handleButtonPress = async () => WebBrowser.openBrowserAsync(Links.guiaVirtual)

  render () {
    return (
      <BackgroundImage
        source={Images.guiaVirtualBackground}
        style={styles.container}
        overlayStyle={styles.overlay}>
        <Image source={Images.guiaVirtualIcon} style={styles.icon} />
        <BodyText style={styles.text}>
          Interaja com os objetos encontrados no Congresso Nacional através da leitura dos QRCodes posicionados próximos aos objetos.
        </BodyText>
        <StyledButton type='large' onPress={this.handleButtonPress}>
          Ler código
        </StyledButton>
      </BackgroundImage>
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

  text: {
    marginBottom: 40,
    textAlign: 'center'
  },

  icon: {
    width: 76,
    height: 86,
    marginBottom: 20
  }
})

export default InterativoScreen
