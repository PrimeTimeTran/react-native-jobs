import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import AuthScreen from '../screens/AuthScreen';
import DeckScreen from '../screens/DeckScreen';
import MapScreen from '../screens/MapScreen';
import ReviewScreen from '../screens/ReviewScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const MainStack = createBottomTabNavigator(
  {
    welcome: WelcomeScreen,
    auth: AuthScreen,
    main: {
      screen: createBottomTabNavigator(
        {
          map: MapScreen,
          deck: DeckScreen,
          review: {
            screen: createStackNavigator({
              review: ReviewScreen,
              settings: SettingsScreen
            })
          }
        }
      )
    }
  },
  {
    lazy: true,
    navigationOptions: { tabBarVisible: false }
  }
);

export default MainStack
