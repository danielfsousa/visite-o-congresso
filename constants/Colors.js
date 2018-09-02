const heToRgba = require('hex-rgba')

const colors = {
  transparent: 'transparent',
  purple: '#6F4EE8',
  brightPurple: '#7752FE',
  darkPurple: '#36334A',
  darkerPurple: '#2A2B40',
  lightPurple: '#DDD9EE',
  white: '#fff',
  gray: '#797D80'
}

const styles = {
  transparent: colors.transparent,
  background: colors.darkerPurple,
  tilesBackground: colors.darkPurple,
  primaryColor: colors.brightPurple,
  text: colors.white,
  bodyText: colors.lightPurple,
  tabIconDefault: colors.gray,
  tabIconSelected: colors.white
}

export default { ...colors, ...styles, rgba: heToRgba }
