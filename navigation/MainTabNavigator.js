import React from 'react'
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Colors from '../constants/Colors'
import { TabBarIcon } from '../components/Icon'
import HomeScreen from '../screens/HomeScreen'
import GenericFAQScreen from '../screens/GenericFAQScreen'
import GenericDetailsScreen from '../screens/GenericDetailsScreen'
import CuriosidadesScreen from '../screens/CuriosidadesScreen'
import GuiaVirtualScreen from '../screens/GuiaVirtualScreen'
import HistoriaCamaraScreen from '../screens/HistoriaCamaraScreen'
import HistoriaSenadoScreen from '../screens/HistoriaSenadoScreen'
import ArquiteturaScreen from '../screens/ArquiteturaScreen'
import ArteScreen from '../screens/ArteScreen'
import ComoFuncionaCamaraScreen from '../screens/ComoFuncionaCamaraScreen'
import EventosScreen from '../screens/EventosScreen'
import SobreScreen from '../screens/SobreScreen'
import ComoChegarScreen from '../screens/ComoChegarScreen'
import AgendamentosScreen from '../screens/AgendamentosScreen'
import InterativoScreen from '../screens/InterativoScreen'
import QRCodeScreen from '../screens/QRCodeScreen'
import InterativoDetailScreen from '../screens/InterativoDetailScreen'
import ViiBraScreen from '../screens/ViiBraScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  GenericFAQ: GenericFAQScreen,
  GenericDetails: GenericDetailsScreen,
  Eventos: EventosScreen,
  ComoChegar: ComoChegarScreen,
  Agendamentos: AgendamentosScreen,
  ViiBra: ViiBraScreen,
  Sobre: SobreScreen
})

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='home' />
}

const CuriosidadesStack = createStackNavigator({
  Curiosidades: CuriosidadesScreen,
  GenericFAQ: GenericFAQScreen,
  HistoriaCamara: HistoriaCamaraScreen,
  HistoriaSenado: HistoriaSenadoScreen,
  ComoFuncionaCamara: ComoFuncionaCamaraScreen,
  Arquitetura: ArquiteturaScreen,
  Arte: ArteScreen
})

CuriosidadesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='info' />
}

const ConteudoInterativoStack = createStackNavigator({
  ConteudoInterativo: InterativoScreen,
  QRCode: QRCodeScreen,
  InterativoDetail: InterativoDetailScreen
})

ConteudoInterativoStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='camera' />
}

const GuiaVirtualStack = createStackNavigator({
  GuiaVirtual: GuiaVirtualScreen
})

GuiaVirtualStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name='compass' />
    )
  }
}

export default createMaterialTopTabNavigator(
  {
    HomeStack,
    CuriosidadesStack,
    ConteudoInterativoStack,
    GuiaVirtualStack
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        height: 2,
        backgroundColor: Colors.background
      },
      style: {
        backgroundColor: Colors.background
      }
    }
  }
)
