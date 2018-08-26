import React from 'react'
import { Icon } from 'expo'

import { Colors } from '../constants'

const TabBarIcon = ({ name, focused }) => (
  <Icon.Feather
    name={name}
    size={24}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
)

const TileIcon = ({ name, focused }) => (
  <Icon.Ionicons name={name} size={58} color={Colors.primaryColor} />
)

export { TabBarIcon, TileIcon }
