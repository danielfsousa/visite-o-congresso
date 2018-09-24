import React from 'react'
import { StyleSheet, View, ImageBackground } from 'react-native'

import { Layout } from '../constants'
import { SubTitle } from './StyledText'

const hasLineBreak = text => text && text.includes('\n')

const floatStyleFactory = float => styleName => [
  styles[styleName],
  float === 'left' ? stylesFloatLeft[styleName] : stylesFloatRight[styleName]
]

const StyledImage = ({
  float = 'right',
  image,
  caption,
  style,
  overlayStyle
}) => {
  const getStyle = floatStyleFactory(float)
  return (
    <View style={[{ flex: 1, alignItems: 'flex-end' }, style]}>
      <ImageBackground
        source={image}
        style={[getStyle('imageContainer')]}
        imageStyle={getStyle('image')}
      >
        <View style={[styles.overlay, overlayStyle]} />
      </ImageBackground>
      <SubTitle
        style={[
          getStyle('caption'),
          {
            top: hasLineBreak(caption)
              ? Layout.styledImageHeight - 50
              : Layout.styledImageHeight - 17
          }
        ]}
      >
        {caption}
      </SubTitle>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: Layout.styledImageHeight,
    width: Layout.width - Layout.padding * 2.2,
    position: 'relative'
  },

  caption: {
    width: '100%',
    height: '100%',
    zIndex: 2,
    position: 'absolute',
    top: Layout.styledImageHeight - 50
  },

  overlay: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10
  }
})

const stylesFloatLeft = StyleSheet.create({
  imageContainer: {
    alignSelf: 'flex-start',
    left: -Layout.padding,
    borderTopRightRadius: Layout.borderRadius,
    borderBottomRightRadius: Layout.borderRadius
  },

  image: {
    borderTopRightRadius: Layout.borderRadius,
    borderBottomRightRadius: Layout.borderRadius
  },

  caption: {
    textAlign: 'right'
  }
})

const stylesFloatRight = StyleSheet.create({
  imageContainer: {
    alignSelf: 'flex-end',
    right: -Layout.padding,
    borderTopLeftRadius: Layout.borderRadius,
    borderBottomLeftRadius: Layout.borderRadius
  },

  image: {
    borderTopLeftRadius: Layout.borderRadius,
    borderBottomLeftRadius: Layout.borderRadius
  },

  caption: {
    textAlign: 'left'
  }
})

export default StyledImage
