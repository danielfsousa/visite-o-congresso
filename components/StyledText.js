import React from 'react'
import { Text, StyleSheet } from 'react-native'

import { Fonts, Colors } from '../constants'

const Title = props => <Text {...props} style={[styles.title, props.style]} />

const TitleLight = props => <Text {...props} style={[styles.titleLight, props.style]} />

const Label = props => <Text {...props} style={[styles.label, props.style]} />

const BodyText = props => (
  <Text {...props} style={[styles.bodyText, props.style]} />
)

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.big,
    color: Colors.text,
    letterSpacing: 1.1
  },

  titleLight: {
    fontFamily: Fonts.book,
    fontSize: Fonts.big,
    color: Colors.text,
    letterSpacing: 1.1,
    textAlign: 'left'
  },

  label: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.medium,
    color: Colors.text,
    textAlign: 'center'
  },

  bodyText: {
    fontFamily: Fonts.regular,
    fontSize: Fonts.medium,
    color: Colors.bodyText
  }
})

export { Title, Label, BodyText, TitleLight }
