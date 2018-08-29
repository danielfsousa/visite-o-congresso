import React, { Component } from 'react'
import { View, Text, StyleSheet, WebView, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Colors, Links } from '../constants'
// import StyledButton from '../components/StyledButton'

class WebBrowserScreen extends Component {
  static navigationOptions = () => ({ header: null })

  state = {
    isLoading: true
  }

  pageRenderTime = 2000

  injectedJavascript = `
    var botoes = $('div').filter(function () {
      return (
        $(this).css('background-image').indexOf('vtourskin.png') > -1
      )
    })

    $(botoes[5]).parent().css('background', 'blue none repeat scroll 0px 0px')
  `

  handleBackButtonPress = () => this.props.navigation.goBack()

  handleWebPageLoadError = () => {
    this.props.navigation.goBack()
    Alert.alert(
      'Não foi possível carregar o Guia Virtual. Verifique sua conexão com a internet.'
    )
  }

  handleWebPageLoadSuccess = () =>
    setTimeout(() => {
      this.webView.injectJavaScript(this.injectedJavascript)
      this.setState(() => ({
        isLoading: false
      }))
    }, this.pageRenderTime)

  render () {
    const { isLoading } = this.state

    return (
      <View style={styles.container}>
        {/* <StyledButton
          onPress={this.handleBackButtonPress}
          style={styles.backButton}>
        </StyledButton> */}

        <Ionicons name='md-arrow-back' size={40}
          color={Colors.white}
          onPress={this.handleBackButtonPress}
          style={styles.backButton} />

        {isLoading &&
          <View style={styles.loadingContainer}>
            <Text style={styles.loading}>Carregando...</Text>
          </View>}

        <WebView
          source={{ uri: Links.guiaVirtual }}
          ref={webview => (this.webView = webview)}
          injectJavascript={this.injectJavascript}
          onLoad={this.handleWebPageLoadSuccess}
          onError={this.handleWebPageLoadError}
          style={styles.webView}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },

  backButton: {
    zIndex: 3,
    paddingTop: 20,
    marginLeft: 20
  },

  loadingContainer: {
    zIndex: 2,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background
  },

  loading: {
    color: 'white'
  },

  webView: {
    marginTop: 20
  }
})

export default WebBrowserScreen
