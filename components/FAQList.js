import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import { Colors, Layout } from '../constants'
import { TitleLight } from './StyledText'

const background = index =>
  (index % 2 === 0 ? styles.backgroundEven : styles.backgroundOdd)

const FAQList = ({ data, onFAQPress }) =>
  data.map((faqObj, index) => (
    <TouchableOpacity
      key={faqObj.title}
      style={[styles.item, background(index)]}
      onPress={() => onFAQPress && onFAQPress(faqObj)}
    >
      <TitleLight>{faqObj.title}</TitleLight>
    </TouchableOpacity>
  ))

const styles = StyleSheet.create({
  item: {
    zIndex: 10,
    paddingHorizontal: Layout.padding,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: Layout.padding
  },

  backgroundEven: {
    backgroundColor: Colors.rgba(Colors.tilesBackground, 60)
  },

  backgroundOdd: {
    backgroundColor: Colors.rgba(Colors.background, 35)
  }
})

export default FAQList
