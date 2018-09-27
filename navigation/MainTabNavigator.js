import React from 'react'
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Colors from '../constants/Colors'
import { TabBarIcon } from '../components/Icon'
import HomeAltScreen from '../screens/HomeAltScreen'
import GenericFAQScreen from '../screens/GenericFAQScreen'
import GenericDetailsScreen from '../screens/GenericDetailsScreen'
import CuriosidadesScreen from '../screens/CuriosidadesScreen'
import GuiaVirtualScreen from '../screens/GuiaVirtualScreen'
import AHistoriaScreen from '../screens/AHistoriaScreen'
import EventosScreen from '../screens/EventosScreen'
import ComoChegarScreen from '../screens/ComoChegarScreen'
import AgendamentosScreen from '../screens/AgendamentosScreen'
import InterativoScreen from '../screens/InterativoScreen'
import QRCodeScreen from '../screens/QRCodeScreen'
import InterativoDetailScreen from '../screens/InterativoDetailScreen'
import ViiBraScreen from '../screens/ViiBraScreen'

const HomeAltStack = createStackNavigator({
  HomeAlt: HomeAltScreen,
  GenericFAQ: GenericFAQScreen,
  GenericDetails: GenericDetailsScreen,
  Eventos: EventosScreen,
  ComoChegar: ComoChegarScreen,
  Agendamentos: AgendamentosScreen,
  ViiBra: ViiBraScreen
})

HomeAltStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='home' />
}

const CuriosidadesStack = createStackNavigator({
  Curiosidades: CuriosidadesScreen,
  AHistoria: AHistoriaScreen,
  GenericFAQ: GenericFAQScreen
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
    HomeAltStack,
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
