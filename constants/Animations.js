import { Animated } from 'react-native'

const nativeScroll = animatedScrollY =>
  Animated.event(
    [
      {
        nativeEvent: { contentOffset: { y: animatedScrollY } }
      }
    ],
    { useNativeDriver: true }
  )

export default {
  nativeScroll
}
