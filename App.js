import React, { Component } from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'

import AppNavigator from './navigation/AppNavigator'
import Colors from './constants/Colors'

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
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          <AppNavigator />
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/curiosidades/historia.png'),
        require('./assets/images/curiosidades/arquitetura.png'),
        require('./assets/images/curiosidades/arte.png')
      ]),
      Font.loadAsync({
        'futura': require('./assets/fonts/FuturaLT.ttf'),
        'futura-light': require('./assets/fonts/FuturaLT-Book.ttf'),
        'futura-book': require('./assets/fonts/FuturaLT-Book.ttf'),
        'futura-bold': require('./assets/fonts/FuturaLT-Bold.ttf'),
        ...Icon.Ionicons.font,
        ...Icon.Feather.font
      })
    ])
  }

  _handleLoadingError = error => {
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
    backgroundColor: Colors.background
  }
})
