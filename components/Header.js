import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Fonts, Colors, Layout } from '../constants'
import { Title } from './StyledText'

// renderBackButton={props.navigation.state.routes.length > 1}

const Header = ({ transparent, children, style }) => (
  <View style={[styles.container, transparent && styles.transparent, style]}>
    <Title style={styles.title}>{children}</Title>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: Layout.headerHeight,
    backgroundColor: Colors.background
  },

  transparent: {
    backgroundColor: Colors.transparent
  },

  title: {
    position: 'relative',
    top: 25,
    paddingLeft: Layout.padding,
    fontSize: Fonts.bigger
  }
})

export default Header
