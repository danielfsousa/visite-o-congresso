const colors = {
  transparent: 'transparent',
  purple: '#6F4EE8',
  brightPurple: '#7752FE',
  darkPurple: '#36334A',
  white: '#fff',
  gray: '#797D80'
}

const styles = {
  transparent: colors.transparent,
  background: '#2A2B40',
  tilesBackground: colors.darkPurple,
  primaryColor: colors.brightPurple,
  text: colors.white,
  tabIconDefault: colors.gray,
  tabIconSelected: colors.white
}

export default { ...colors, ...styles }
