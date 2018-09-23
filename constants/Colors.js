const heToRgba = require('hex-rgba')

const colors = {
  transparent: 'transparent',
  white: '#fff',
  gray: '#797D80'
}

const genericStyles = {
  text: colors.white,
  tabIconDefault: colors.gray,
  tabIconSelected: colors.white
}

const themes = {
  purple: {
    ...genericStyles,
    primary: '#7752FE',
    background: '#2A2B40',
    tilesBackground: '#36334A',
    tilesBorder: '#36334A',
    bodyText: '#DDD9EE'
  },
  blue: {
    ...genericStyles,
    primary: '#4A9AD1',
    background: '#0A142B',
    tilesBackground: '#16233D',
    tilesBorder: '#192743',
    bodyText: '#D2DCE7'
  }
}

export default {
  rgba: heToRgba,
  ...colors,
  ...themes.blue
}
