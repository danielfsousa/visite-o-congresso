import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const { height } = Dimensions.get('window')
const proportion = height / width
const padding = 20
const headerHeight = 90
const tabBarHeight = 135

const getBoxHeight = ({ rows = 3 } = {}) => {
  const calculate = percent =>
    (height - headerHeight - tabBarHeight) / rows * percent

  if (proportion >= 2) return calculate(0.7)
  if (proportion >= 1.9) return calculate(0.88)
  return calculate(1)
}

const getBoxWidth = ({ margins = 2, columns = 1 } = {}) =>
  (width - padding * margins) / columns

// mostra 3px do proximo banner para indicar que há mais banners
const bannerHeight = getBoxHeight({ rows: 3 }) - 3
const bannerWidth = getBoxWidth({ margins: 2, columns: 1 })

// mostra 3px do proximo banner para indicar que há mais tiles
const tileHeight = getBoxHeight({ rows: 3 }) - 3
const tileWidth = getBoxWidth({ margins: 3, columns: 2 })
const tileIconSize = 47 / 100 * tileHeight
const tileIconMargin = tileHeight > 112 ? 10 : 0

const styledImageHeight = 190
const styledImageWidth = width - padding * 2.2

export default {
  width,
  height,
  padding,
  borderRadius: 4,
  isSmallDevice: width < 375,
  headerHeight,
  bigHeaderHeight: 40 / 100 * height,
  tabBarHeight,
  bannerHeight,
  bannerWidth,
  tileHeight,
  tileWidth,
  tileIconSize,
  tileIconMargin,
  styledImageHeight,
  styledImageWidth,
  getBoxHeight,
  getBoxWidth
}
