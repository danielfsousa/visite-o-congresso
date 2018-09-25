import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { isIphoneX } from 'react-native-iphone-x-helper'
import { MenuProvider } from 'react-native-popup-menu'
import Sentry from 'sentry-expo'

import AppNavigator from './navigation/AppNavigator'
import { Colors, Images, Icons, Fonts, Audios } from './constants'
import config from './config'

if (!__DEV__) {
  Sentry.enableInExpoDevelopment = true
  Sentry.config(config.sentry.sentryDNS).install()
}

export default class App extends Component {
  state = {
    isLoadingComplete: false
  }

  render () {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <MenuProvider>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle='light-content' />}
            <AppNavigator />
          </View>
        </MenuProvider>
      )
    }
  }

  _loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([...Images.sources, ...Icons.sources, ...Audios.sources]),
      Font.loadAsync({
        ...Fonts.sources,
        ...Icon.Ionicons.font,
        ...Icon.Feather.font
      })
    ])

  _handleLoadingError = error => {
    // TODO: adicionar sentry aqui
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    paddingBottom: Platform.OS === 'ios' && isIphoneX() ? 20 : 0
  }
})
