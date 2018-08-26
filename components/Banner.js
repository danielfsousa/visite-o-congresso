import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

import { Colors, Layout } from '../constants'
import { Label } from './StyledText'

const Banner = ({ name, image, onBannerPress }) => (
  <TouchableOpacity onPress={onBannerPress} style={styles.container}>
    <Image source={image} />
    <View style={styles.labelContainer}>
      <Label style={styles.label}>{name}</Label>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: Layout.getBoxHeight({ rows: 3 }),
    width: Layout.getBoxWidth({ margins: 2, columns: 1 }),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Layout.padding,
    marginBottom: Layout.padding,
    borderRadius: Layout.borderRadius,
    backgroundColor: Colors.tilesBackground
  },

  image: {
    height: Layout.getBoxHeight({ rows: 3 }),
    width: Layout.getBoxWidth({ margins: 2, columns: 1 }),
    borderRadius: Layout.borderRadius
  },

  labelContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  label: {
    textShadowColor: 'rgba(0, 0, 0, 0.50)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 40
  }
})

export default Banner
