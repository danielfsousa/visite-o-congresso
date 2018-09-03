import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

import { Fonts, Colors, Layout } from '../constants'
import { HeaderIcon } from './Icon'
import { Title } from './StyledText'

// renderBackButton={props.navigation.state.routes.length > 1}

const Header = ({
  type = 'normal',
  detach = false,
  transparent = false,
  onBackButtonClick,
  children,
  style
}) => (
  <View
    style={[
      type === 'big' ? styles.bigContainer : styles.container,
      transparent && styles.transparent,
      detach && styles.absolutePosition,
      style
    ]}
  >
    {type === 'big' &&
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={onBackButtonClick}
      >
        <HeaderIcon />
      </TouchableOpacity>}

    <Title style={type === 'big' ? styles.bigTitle : styles.title}>
      {children}
    </Title>
  </View>
)

const styles = StyleSheet.create({
  absolutePosition: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0
  },

  container: {
    zIndex: 100,
    height: Layout.headerHeight,
    backgroundColor: Colors.background
  },

  bigContainer: {
    zIndex: 100,
    flex: 1,
    height: Layout.bigHeaderHeight,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },

  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 44,
    position: 'absolute',
    left: Layout.padding,
    top: Layout.padding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.tilesBackground
  },

  transparent: {
    backgroundColor: Colors.transparent
  },

  title: {
    position: 'relative',
    top: 25,
    paddingLeft: Layout.padding,
    fontSize: Fonts.bigger
  },

  bigTitle: {
    fontSize: Fonts.bigger
  },

  backButton: {}
})

export default Header
