import React from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { AppRegistry } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Zoom from './src/pages/Zoom';
import About from './src/pages/About';
import Home from './src/pages/Home';
import Hilal from './src/pages/Hilal';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Zoom' component={Zoom} />
        <Tab.Screen name='News' component={Hilal} />
        <Tab.Screen name='Hilal' component={Hilal} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('hararianorg', () => App);
