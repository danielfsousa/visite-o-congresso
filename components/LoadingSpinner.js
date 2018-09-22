import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import { Colors } from '../constants'
import { Title } from './StyledText'

const LoadingSpinner = props => (
  <View style={[styles.container, props.containerStyle]}>
    {props.text && <Title stle={styles.text}>{props.text}</Title>}
    <ActivityIndicator
      size='large'
      color={Colors.primary}
      style={styles.indicator}
      {...props}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  indicator: {
    marginTop: 20
  }
})

export default LoadingSpinner
