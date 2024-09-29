import React from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { AppRegistry } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Zoom from './src/pages/Zoom';
import ContactUs from './src/pages/ContactUs';
import Help from './src/pages/Help';
import Home from './src/pages/Home';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Zoom' component={Zoom} />
        <Tab.Screen name='ContactUs' component={ContactUs} />
        <Tab.Screen name='Help' component={Help} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('hararianorg', () => App);
