import React from 'react'
import { Text, StyleSheet, Animated } from 'react-native'

import { Fonts, Colors } from '../constants'

const Label = props => <Text {...props} style={[styles.label, props.style]} />

const Title = props => (
  <Animated.Text {...props} style={[styles.title, props.style]} />
)

const TitleLight = props => (
  <Text {...props} style={[styles.titleLight, props.style]} />
)

const SubTitle = props => (
  <Text {...props} style={[styles.subTitle, props.style]} />
)

const BodyText = props => (
  <Text {...props} style={[styles.bodyText, props.style]} />
)

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.bigger,
    color: Colors.text,
    letterSpacing: 1.1,
    lineHeight: 40
  },

  titleLight: {
    fontFamily: Fonts.book,
    fontSize: Fonts.big,
    color: Colors.text,
    letterSpacing: 0.9,
    lineHeight: 26,
    textAlign: 'left'
  },

  subTitle: {
    fontFamily: Fonts.oblique,
    fontSize: Fonts.huge,
    color: Colors.text,
    height: '150%',
    // letterSpacing: 1.1,
    lineHeight: 34,
    textAlign: 'left'
  },

  label: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.small,
    color: Colors.text,
    letterSpacing: 0.9,
    textAlign: 'center'
  },

  bodyText: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.medium,
    color: Colors.bodyText,
    letterSpacing: 0.5,
    lineHeight: 30
  }
})

export { Title, Label, BodyText, TitleLight, SubTitle }
