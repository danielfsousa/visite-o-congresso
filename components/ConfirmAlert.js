import { Alert } from 'react-native'

import { Text } from '../constants'
import i18n from '../utils/i18n'

const ConfirmAlert = onPress => {
  const t = key => i18n.translate(Text.ConfirmAlert[key])

  Alert.alert(
    t('titulo'),
    t('descricao'),
    [
      { text: t('voltar'), onPress: () => { }, style: 'cancel' },
      { text: t('prosseguir'), onPress }
    ],
    { cancelable: false }
  )
}

export default ConfirmAlert
