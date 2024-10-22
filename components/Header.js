import React from 'react'
import { StyleSheet, Animated } from 'react-native'

import { Fonts, Colors, Layout } from '../constants'
import { Title } from './StyledText'

const animateOnScroll = animatedScroll => {
  if (!animatedScroll) return {}

  const scale = animatedScroll.interpolate({
    inputRange: [0, 350],
    outputRange: [1, 0.8]
  })

  const translateY = animatedScroll.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 68]
  })

  const opacity = animatedScroll.interpolate({
    inputRange: [0, 128],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  })

  return {
    transform: [{ translateY }, { scale }],
    opacity
  }
}

const Header = ({
  type = 'normal',
  detach = false,
  transparent = false,
  renderBackButton = false,
  onBackButtonPress,
  animatedScroll,
  textStyle,
  children,
  style
}) => (
  <Animated.View
    style={[
      type === 'big' ? styles.bigContainer : styles.container,
      transparent && styles.transparent,
      detach && styles.absolutePosition,
      style
    ]}
  >
    <Title
      style={[
        type === 'big' ? styles.bigTitle : styles.title,
        children && children.length < 60
          ? { fontSize: Fonts.huge, lineHeight: 40 }
          : { fontSize: Fonts.big, lineHeight: 30 },
        textStyle,
        animateOnScroll(animatedScroll)
      ]}
    >
      {children}
    </Title>
  </Animated.View>
)

const styles = StyleSheet.create({
  absolutePosition: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0
  },

  container: {
    zIndex: 10,
    height: Layout.headerHeight,
    backgroundColor: Colors.background
  },

  bigContainer: {
    zIndex: 10,
    flex: 1,
    height: Layout.bigHeaderHeight,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },

  transparent: {
    backgroundColor: Colors.transparent
  },

  title: {
    zIndex: 11,
    position: 'relative',
    top: 25,
    paddingLeft: Layout.padding
  },

  bigTitle: {
    zIndex: 11,
    position: 'relative',
    top: 24, // back button height
    textAlign: 'center',
    paddingHorizontal: Layout.padding
  }
})

export default Header
