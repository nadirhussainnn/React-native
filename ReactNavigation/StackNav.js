import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Details from './Screens/Notifications';

const Stack=createNativeStackNavigator()

const StackNav = () => (
  <Stack.Navigator>
    <Stack.Screen name="Feed" component={Home} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);

export default StackNav;