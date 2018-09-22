import React from 'react'
import { StyleSheet } from 'react-native'
import { WebBrowser } from 'expo'

import { BodyText } from './StyledText'
import { Fonts, Colors } from '../constants'

const URL_REGEX = /([-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b[-a-zA-Z0-9@:%_+.~#?&//=]*)/g
const eUmaURL = texto => URL_REGEX.exec(texto) !== null
const normalizaProtocolo = link => link.startsWith('http') ? link : `http://${link}`

const Hyperlink = ({ href, children, style }) => (
  <BodyText
    style={styles.hyperlink}
    onPress={() => WebBrowser.openBrowserAsync(normalizaProtocolo(href))}
  >
    {children}
  </BodyText>
)

Hyperlink.findAndReplace = texto =>
  texto
    .split(URL_REGEX)
    .map((t, i) => eUmaURL(t) ? <Hyperlink key={i} href={t}>{t}</Hyperlink> : t)
    .filter(Boolean)

const styles = StyleSheet.create({
  hyperlink: {
    textDecorationLine: 'underline',
    fontFamily: Fonts.oblique,
    color: Colors.primaryColor
  }
})

export default Hyperlink
