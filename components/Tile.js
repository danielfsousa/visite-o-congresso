import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'

import { Colors, Layout } from '../constants'
import { Label } from './StyledText'
import { TileIcon } from './Icon'

const Tile = ({ icon, name, onTilePress }) => (
  <TouchableOpacity onPress={onTilePress} style={styles.container}>
    <View style={styles.iconContainer}>
      <TileIcon name={icon} />
    </View>
    <Label>{name}</Label>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    height: Layout.getBoxHeight({ rows: 3 }),
    width: Layout.getBoxWidth({ margins: 3, columns: 2 }),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Layout.padding,
    borderRadius: Layout.borderRadius,
    marginBottom: Layout.padding,
    backgroundColor: Colors.tilesBackground,
    borderWidth: 1,
    borderColor: Colors.tilesBorder
  },

  iconContainer: {
    marginBottom: 10
  }
})

export default Tile
