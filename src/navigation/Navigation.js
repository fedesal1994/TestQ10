import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Character from '../screens/Character';
import Details from '../screens/Details';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Character"
        component={Character}
        options={{
          headerStyle: {
            backgroundColor: '#8D0059',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: '#8D0059',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
}
