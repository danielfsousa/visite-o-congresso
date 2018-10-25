import React from 'react'
import { StyleSheet, Linking } from 'react-native'
import { WebBrowser } from 'expo'

import { BodyText } from './StyledText'
import { Fonts, Colors } from '../constants'
import ConfirmAlert from './ConfirmAlert'

const URL_REGEX = /([-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_+.~#?&//=]*)/g
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g

const isURL = str => URL_REGEX.exec(str) !== null
const isEmail = str => EMAIL_REGEX.exec(str) !== null

const handlePress = href => () => {
  if (isEmail(href)) {
    return Linking.openURL(`mailto:${href}`)
  } else {
    const normalizado = href.startsWith('http') ? href : `http://${href}`
    return ConfirmAlert(() => WebBrowser.openBrowserAsync(normalizado))
  }
}

const Hyperlink = ({ href, children, style }) => (
  <BodyText style={styles.hyperlink} onPress={handlePress(href)}>
    {children}
  </BodyText>
)

Hyperlink.findAndReplace = texto =>
  texto
    .split(URL_REGEX)
    .map((t, i) => isURL(t) ? <Hyperlink key={i} href={t}>{t}</Hyperlink> : t)
    .filter(Boolean)

const styles = StyleSheet.create({
  hyperlink: {
    textDecorationLine: 'underline',
    fontFamily: Fonts.oblique,
    color: Colors.primary
  }
})

export default Hyperlink
