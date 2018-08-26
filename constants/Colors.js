const colors = {
  purple: '#6F4EE8',
  brightPurple: '#7752FE',
  darkPurple: '#36334A',
  white: '#fff',
  gray: '#797D80'
}

const styles = {
  background: '#2A2B40',
  tilesBackground: colors.darkPurple,
  primaryColor: colors.brightPurple,
  text: colors.white,
  tabIconDefault: colors.gray,
  tabIconSelected: colors.white,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: colors.purple,
  noticeText: '#fff'
}

export default { ...colors, ...styles }
