import React from 'react'
import {
   createNativeStackNavigator
} from '@react-navigation/native-stack'
import {
  NavigationContainer
} from '@react-navigation/native'


import SimpleCalc from '../screens/SimpleCalc';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SimpleCalc" component={SimpleCalc} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
