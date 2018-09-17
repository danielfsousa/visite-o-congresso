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

  // propriedade 'color' não é suportada pelo animador nativo :(
  // workaround TODO:: https://stackoverflow.com/questions/44134121/does-react-native-animated-native-driver-support-color-backgroundcolor

  // const color = animatedScroll.interpolate({
  //   inputRange: [0, 150],
  //   outputRange: [
  //     Colors.rgba(Colors.white, 100),
  //     Colors.rgba(Colors.white, '00')
  //   ]
  // })

  const opacity = animatedScroll.interpolate({
    inputRange: [0, 100],
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
    paddingLeft: Layout.padding,
    fontSize: Fonts.huge
  },

  bigTitle: {
    zIndex: 11,
    fontSize: Fonts.huge,
    position: 'relative',
    top: 24, // back button height
    textAlign: 'center',
    paddingHorizontal: Layout.padding
  }
})

export default Header
