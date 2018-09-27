import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { Audio, LinearGradient } from 'expo'

import { Colors } from '../constants'
import { AudioIcon } from './Icon'

class AudioFactory extends Component {
  state = {
    isLoadingAudio: true,
    isPlayingAudio: false
  }

  toogleAudio = async () => {
    const { isPlayingAudio } = this.state
    if (isPlayingAudio) {
      await this.sound.playAsync()
    } else {
      await this.sound.stopAsync()
    }
  }

  handleButtonPress = () => {
    if (this.state.isLoadingAudio) return
    this.setState(
      ({ isPlayingAudio }) => ({ isPlayingAudio: !isPlayingAudio }),
      this.toogleAudio
    )
  }

  handlePlaybackStatusUpdate = playbackStatus => {
    if (!playbackStatus.isLoaded) {
      if (playbackStatus.error) {
        const mensagem = 'Houve um erro ao tentar reproduzir o audio'
        console.error(mensagem)
        Alert.alert('Erro', mensagem)
      }
    } else {
      if (playbackStatus.isPlaying) {
        this.setState(() => ({ isPlayingAudio: true }))
      } else {
        this.setState(() => ({ isPlayingAudio: false }))
      }

      if (!playbackStatus.isBuffering) {
        this.setState(() => ({ isLoadingAudio: false }))
      }
    }
  }

  async componentDidMount () {
    this.sound = (await Audio.Sound.create(
      this.props.audio,
      { shouldPlay: true },
      this.handlePlaybackStatusUpdate
    )).sound
  }

  componentWillUnmount = () => this.sound && this.sound.unloadAsync()

  render () {
    const { isLoadingAudio, isPlayingAudio } = this.state
    const { children } = this.props

    const getAudioIcon = () => {
      if (isLoadingAudio) {
        return <ActivityIndicator color={Colors.white} />
      } else if (isPlayingAudio) {
        return <AudioIcon name='md-square' />
      } else {
        return <AudioIcon name='md-play' style={styles.playIcon} />
      }
    }

    return (
      <View style={styles.container}>
        {children}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handleButtonPress}>
            <LinearGradient
              style={styles.button}
              colors={[
                Colors.rgba('#7bb6e0', 93),
                Colors.rgba(Colors.primary, 93)
              ]}
            >
              {getAudioIcon()}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const withAudio = (Component, audioFactoryProps = {}) => props => (
  <AudioFactory {...audioFactoryProps} {...props}>
    <Component {...props} />
  </AudioFactory>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    left: 40,
    bottom: 40
  },

  button: {
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

  playIcon: {
    position: 'relative',
    left: 4
  }
})

export default withAudio
