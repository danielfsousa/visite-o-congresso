import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')
const padding = 20
const headerHeight = 90
const tabBarHeight = 135

const getBoxHeight = ({ rows = 3 } = {}) =>
  (height - headerHeight - tabBarHeight) / rows

const getBoxWidth = ({ margins = 2, columns = 1 } = {}) =>
  (width - padding * margins) / columns

export default {
  width,
  height,
  padding,
  borderRadius: 3,
  isSmallDevice: width < 375,
  headerHeight,
  bigHeaderHeight: (40 / 100) * height,
  tabBarHeight,
  getBoxHeight,
  getBoxWidth
}
