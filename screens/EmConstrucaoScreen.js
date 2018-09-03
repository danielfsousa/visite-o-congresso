import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Colors, Images, Layout } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'

class EmConstrucaoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header
        transparent
        detach
        type='big'
        onBackButtonClick={() => navigation.goBack()}
      >
        Em Construção
      </Header>
    )
  })

  render () {
    return (
      <BackgroundImage
        source={Images.backgroundFade}
        style={styles.container}
        imageStyle={styles.backgroundImage}
        overlayStyle={styles.overlay}
      />
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
    backgroundColor: Colors.rgba(Colors.background, 96)
  }
})

export default EmConstrucaoScreen
