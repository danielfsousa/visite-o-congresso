import React from 'react'
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Colors from '../constants/Colors'
import { TabBarIcon } from '../components/Icon'
import HomeScreen from '../screens/HomeScreen'
import HomeAltScreen from '../screens/HomeAltScreen'
import CuriosidadesScreen from '../screens/CuriosidadesScreen'
import GuiaVirtualScreen from '../screens/GuiaVirtualScreen'
import WebBrowserScreen from '../screens/WebBrowserScreen'
import EmConstrucaoScreen from '../screens/EmConstrucaoScreen'
import GuiaProfessorScreen from '../screens/GuiaProfessorScreen'
import GuiaVisitanteScreen from '../screens/GuiaVisitanteScreen'
import HistoriaScreen from '../screens/HistoriaScreen'

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
  GuiaProfessor: GuiaProfessorScreen,
  GuiaVisitante: GuiaVisitanteScreen
})

HomeAltStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='home' />
}

const CuriosidadesStack = createStackNavigator({
  Curiosidades: CuriosidadesScreen,
  Historia: HistoriaScreen
})

CuriosidadesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='info' />
}

const GuiaVirtualStack = createStackNavigator({
  GuiaVirtual: GuiaVirtualScreen
})

const GuiaVirtualWebBrowserStack = createStackNavigator(
  {
    Main: GuiaVirtualStack,
    WebBrowser: WebBrowserScreen
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

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
