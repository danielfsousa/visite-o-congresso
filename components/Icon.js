import React from 'react'
import { Icon } from 'expo'

import { Colors, Layout } from '../constants'

const TabBarIcon = ({ name, focused }) => (
  <Icon.Feather
    name={name}
    size={24}
    color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
  />
)

const TileIcon = ({ name, focused }) => (
  <Icon.Ionicons
    name={name}
    size={Layout.tileIconSize}
    color={Colors.primary}
  />
)

const HeaderIcon = () => (
  <Icon.Ionicons name='md-arrow-back' size={24} color={Colors.white} />
)

const AudioIcon = props => (
  <Icon.Ionicons
    name={props.name}
    size={36}
    color={Colors.rgba(Colors.white, 77)}
    {...props}
  />
)

export { TabBarIcon, TileIcon, HeaderIcon, AudioIcon }
