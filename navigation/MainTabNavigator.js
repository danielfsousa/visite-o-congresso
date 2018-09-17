import React from 'react'
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Colors from '../constants/Colors'
import { TabBarIcon } from '../components/Icon'
import HomeScreen from '../screens/HomeScreen'
import HomeAltScreen from '../screens/HomeAltScreen'
import GenericFAQScreen from '../screens/GenericFAQScreen'
import GenericDetailsScreen from '../screens/GenericDetailsScreen'
import CuriosidadesScreen from '../screens/CuriosidadesScreen'
import GuiaVirtualScreen from '../screens/GuiaVirtualScreen'
import WebBrowserScreen from '../screens/WebBrowserScreen'
import EmConstrucaoScreen from '../screens/EmConstrucaoScreen'
import AHistoriaScreen from '../screens/AHistoriaScreen'
import EventosScreen from '../screens/EventosScreen'
import ComoChegarScreen from '../screens/ComoChegarScreen'
import InterativoScreen from '../screens/InterativoScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  EmBreve: EmConstrucaoScreen
})

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='home' />
}

const HomeAltStack = createStackNavigator({
  HomeAlt: HomeAltScreen,
  EmBreve: EmConstrucaoScreen,
  GenericFAQ: GenericFAQScreen,
  GenericDetails: GenericDetailsScreen,
  Eventos: EventosScreen,
  ComoChegar: ComoChegarScreen
})

HomeAltStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='home' />
}

const CuriosidadesStack = createStackNavigator({
  Curiosidades: CuriosidadesScreen,
  AHistoria: AHistoriaScreen
})

CuriosidadesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='info' />
}

const MaterialInterativoStack = createStackNavigator({
  MaterialInterativo: InterativoScreen
})

MaterialInterativoStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='camera' />
}

const GuiaVirtualStack = createStackNavigator({
  GuiaVirtual: GuiaVirtualScreen
})

const GuiaVirtualWebBrowserStack = createStackNavigator({
  Main: GuiaVirtualStack,
  WebBrowser: WebBrowserScreen
},
{
  mode: 'modal', headerMode: 'none'
})

GuiaVirtualWebBrowserStack.navigationOptions = ({ navigation }) => {
  return {
    tabBarVisible: navigation.state.index === 0,
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name='compass' />
    )
  }
}

export default createMaterialTopTabNavigator(
  {
    HomeAltStack,
    CuriosidadesStack,
    MaterialInterativoStack,
    GuiaVirtualWebBrowserStack
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
