import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Fonts, Colors, Layout } from '../constants'
import { Title } from './StyledText'

// renderBackButton={props.navigation.state.routes.length > 1}

const Header = ({ children }) => (
  <View style={styles.container}>
    <Title style={styles.title}>{children}</Title>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: Layout.headerHeight,
    backgroundColor: Colors.background
  },

  title: {
    position: 'relative',
    top: 25,
    paddingLeft: Layout.padding,
    fontSize: Fonts.bigger
  }
})

export default Header
