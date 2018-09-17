import React, { Component } from 'react'
import { StyleSheet, View, Animated } from 'react-native'

import { Colors, Images, Layout, Animations } from '../constants'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import BackButton from '../components/BackButton'

class ParallaxScreenFactory extends Component {
  static navigationOptions = () => ({ header: null })

  state = {
    scrollY: new Animated.Value(0)
  }

  render () {
    const { scrollY } = this.state
    const { navigation, title, children, scrollContainerStyle } = this.props

    return (
      <BackgroundImage
        source={Images.backgroundFade}
        style={styles.container}
        imageStyle={styles.backgroundImage}
        overlayStyle={styles.overlay}
      >
        <BackButton onPress={() => navigation.goBack()} />

        <Animated.ScrollView
          style={styles.scrollView}
          scrollEventThrottle={1}
          onScroll={Animations.nativeScroll(scrollY)}
        >
          <Header
            transparent
            type='big'
            animatedScroll={scrollY}
            style={[styles.header]}
          >
            {typeof title === 'function' ? title(this.props) : title}
          </Header>
          <View style={[styles.scrollContainer, scrollContainerStyle]}>
            {children}
          </View>
        </Animated.ScrollView>
      </BackgroundImage>
    )
  }
}

const withParallax = (Component, title, parallaxFactoryProps = {}) => {
  const Screen = props => (
    <ParallaxScreenFactory {...parallaxFactoryProps} {...props} title={title}>
      <Component {...props} />
    </ParallaxScreenFactory>
  )

  Screen.navigationOptions = () => ({ header: null })
  return Screen
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    flex: 3
  },

  scrollContainer: {
    flex: 5,
    padding: Layout.padding,
    paddingBottom: Layout.padding * 3
  },

  overlay: {
    backgroundColor: Colors.rgba(Colors.background, 94)
  }
})

export default withParallax
