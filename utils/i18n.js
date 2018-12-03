import { AsyncStorage } from 'react-native'
import { DangerZone, Updates } from 'expo'

const { Localization } = DangerZone

class I18n {
  constructor (localization = 'pt_BR') {
    this.defaultLanguage = 'pt'
    this._langkey = 'LANGUAGE'
    this._applyLocale(localization)
  }

  _applyLocale (localization = '') {
    if (localization.length === 5) {
      this.language = localization.substring(0, 2)
    } else {
      this.language = localization
    }
  }

  init = async (changeLanguage) => {
    const locale = (
      await AsyncStorage.getItem(this._langkey) ||
      await Localization.getCurrentLocaleAsync()
    )

    this._applyLocale(locale)
  }

  switchLanguage = async () => {
    if (this.language === 'en') {
      await AsyncStorage.setItem(this._langkey, 'pt')
    } else if (this.language === 'pt') {
      await AsyncStorage.setItem(this._langkey, 'en')
    }

    Updates.reloadFromCache()
  }

  translate = (textObj) => {
    return textObj[this.language] || textObj[this.defaultLanguage] || textObj
  }
}

export default new I18n()
