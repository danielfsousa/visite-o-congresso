import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { Fonts, Colors } from '../constants'

const openHyperlink = async (href) => WebBrowser.openBrowserAsync(href)

const Hyperlink = ({ href, children, style }) => (
  <Text onPress={() => openHyperlink(href)} style={[styles.hyperlink, style]}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  hyperlink: {
    fontFamily: Fonts.bold,
    fontSize: Fonts.medium,
    color: Colors.bodyText
  }
})

export default Hyperlink
