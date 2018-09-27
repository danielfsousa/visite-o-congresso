import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { Colors, Layout } from '../constants'
import { HeaderIcon } from './Icon'

const BackButton = (props) => (
  <TouchableOpacity style={styles.container} {...props} >
    <HeaderIcon />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    zIndex: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.55,
    shadowRadius: 10,
    elevation: 10,
    width: 44,
    height: 44,
    borderRadius: 44,
    position: 'absolute',
    left: Layout.padding,
    top: Layout.padding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tilesBackground
  }
})

export default BackButton
