import { Alert } from 'react-native'

const ConfirmAlert = onPress => {
  Alert.alert(
    'Atenção',
    'Você está prestes a deixar o aplicativo Visite o Congresso, portanto os Termos e Condições de Uso, assim como os direitos ficam a critério do site a seguir. Deseja prosseguir?',
    [
      { text: 'Voltar', onPress: () => { }, style: 'cancel' },
      { text: 'Prosseguir', onPress }
    ],
    { cancelable: false }
  )
}

export default ConfirmAlert
