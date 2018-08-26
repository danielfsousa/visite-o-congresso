import React from 'react'
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import Colors from '../constants/Colors'
import { TabBarIcon } from '../components/Icon'
import HomeScreen from '../screens/HomeScreen'
import CuriosidadesScreen from '../screens/CuriosidadesScreen'
import GuiaVirtualScreen from '../screens/GuiaVirtualScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='home' />
}

const CuriosidadesStack = createStackNavigator({
  Curiosidades: CuriosidadesScreen
})

CuriosidadesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='info' />
}

const GuiaVirtualStack = createStackNavigator({
  GuiaVirtual: GuiaVirtualScreen
})

GuiaVirtualStack.navigationOptions = {
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name='compass' />
}

export default createMaterialTopTabNavigator(
  {
    HomeStack,
    CuriosidadesStack,
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
