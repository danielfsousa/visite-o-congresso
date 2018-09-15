import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import { Colors, Layout } from '../constants'
import { Label, TitleLight } from './StyledText'
import Accordion from 'react-native-collapsible/Accordion'

const background = index => index % 2 === 0 ? styles.backgroundEven : styles.backgroundOdd

export default class AccordionView extends Component {
  _renderHeader (section) {
    return (
      <View style={[styles.header, background(section.index)]}>
        <TitleLight>{section.title}</TitleLight>
      </View>
    )
  }

  _renderContent (section) {
    return (
      <View style={[styles.content, background(section.index)]}>
        <Label style={styles.label}>{section.text}</Label>
      </View>
    )
  }

  render () {
    return (
      <Accordion
        sections={[this.props]}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: Layout.padding,
    paddingBottom: 13,
    justifyContent: 'space-between'
  },

  header: {
    paddingHorizontal: Layout.padding,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 60
  },

  backgroundEven: {
    backgroundColor: Colors.rgba(Colors.darkPurple, 60)
  },

  backgroundOdd: {
    backgroundColor: Colors.rgba(Colors.darkerPurple, 35)
  },

  label: {
    textAlign: 'justify'
  }
})
