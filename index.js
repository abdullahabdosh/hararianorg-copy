import React from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LessonDetailPage from './src/pages/LessonDetailPage';
import Lessons from './src/pages/Lessons';
import About from './src/pages/About';
import Home from './src/pages/Home';
import Hilal from './src/pages/Hilal';
import HilalArticle from './src/pages/HilalArticle';
import News from './src/pages/News';

const Tab = createBottomTabNavigator();

const LessonsStack = createNativeStackNavigator();
const HilalStack = createNativeStackNavigator();

function LessonsNavigator() {
  return (
    <LessonsStack.Navigator>
      <LessonsStack.Screen name="LessonsList" component={Lessons} options={{ headerShown: false }} />
      <LessonsStack.Screen name="LessonDetail" component={LessonDetailPage} options={{ title: 'Lesson Details' }} />
    </LessonsStack.Navigator>

    
  );
}

function HilalNavigator() {
  return (
    <HilalStack.Navigator>
      <HilalStack.Screen name="HilalList" component={Hilal} options={{ headerShown: false }} />
      <HilalStack.Screen name="HilalArticle" component={HilalArticle} options={{ title: 'Hilal Articles' }} />
    </HilalStack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false }} // Default to showing the header
      >
        <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{ headerShown: false }} // Override for the Home page to hide the header
        />
        <Tab.Screen name='Lessons' component={LessonsNavigator} />
        <Tab.Screen name='News' component={News} />
        <Tab.Screen name='Hilal' component={HilalNavigator} />
        <Tab.Screen name='About' component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('hararianorg', () => App);

