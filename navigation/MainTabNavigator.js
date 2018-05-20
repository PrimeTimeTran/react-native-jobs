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

const ReviewStack = createStackNavigator({
  review: ReviewScreen,
  Settings: SettingsScreen
})

const MainTabNavigator = createBottomTabNavigator(
  {
    Map: MapScreen,
    Deck: DeckScreen,
    Review: ReviewStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Map') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Deck') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if ( routeName === 'Review') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 12 },
        tabBarPosition: 'bottom'
      }
    })
  }
)

const AppStack = createBottomTabNavigator(
  {
    Welcome: WelcomeScreen,
    Auth: AuthScreen,
    Main: MainTabNavigator
  },
  {
    lazy: true,
    navigationOptions: { tabBarVisible: false }
  }
);

export default AppStack
