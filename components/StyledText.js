import React from 'react'
import { View, Text, StyleSheet, Animated, Platform } from 'react-native'

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

const BulletText = props => (
  <View style={{ flexDirection: 'row' }}>
    <BodyText>{'\u2022'}</BodyText>
    <BodyText {...props} style={[styles.bulletText, props.style]} />
  </View>
)

const Quote = props => (
  <View>
    <Text style={[styles.quoteMark, styles.quoteLeft]}>“</Text>
    <BodyText style={styles.quoteText}>
      {props.children}
    </BodyText>
    <Text style={[styles.quoteMark, styles.quoteRight]}>”</Text>
  </View>
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
  },

  bulletText: {
    flex: 1,
    paddingLeft: 5
  },

  quoteMark: {
    // textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'American Typewriter' : 'serif',
    fontSize: 150,
    color: '#1E273C',
    position: 'relative',
    top: 120,
    right: 10
  },

  quoteLeft: {

  },

  quoteRight: {

  },

  quoteText: {
    textAlign: 'center',
    fontFamily: Fonts.bold,
    color: 'white'
  }
})

export {
  Title,
  Label,
  BodyText,
  TitleLight,
  SubTitle,
  BulletText,
  Quote
}
