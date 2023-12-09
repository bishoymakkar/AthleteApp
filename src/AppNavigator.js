import React from 'react';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import colors from '../dls/ui/styleguide/colors';
import HomeScreen from './app/Home/components/HomeScreen';
import TechologyScreen from './app/Home/components/TechologyScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  TechologySelection: TechologyScreen,
},
{
  defaultNavigationOptions:{
    headerShown: false,
  }
}
);

const AppContainer =  createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Category: HomeStack,
      Account: HomeStack,
      Notification: HomeStack,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'Home') {
            iconName = 'home';
          } else if (routeName === 'Account') {
            iconName = 'user';
          } else if (routeName === 'Notification') {
            iconName = 'bells';
          } else if (routeName === 'Category') {
            iconName = 'appstore-o';
          }
  
          // You can return any component that you like here!
          return <Icon name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        style:{
          borderTopWidth: 1,
          borderRightWidth: 0.1,
          borderLeftWidth: 0.1,
          borderRadius: 50,
          borderTopColor: colors.greyish,
          borderRightColor: 'white',
          borderLeftColor: 'white',
        },
        activeTintColor: colors.violet,
        inactiveTintColor: colors.greyish,
        showLabel: false
      },
    }
  )
);

// holds all screens of the app + registeration to handle login/sign up outside GetStarted stack
export default createAppContainer(
  createDrawerNavigator(
    {
      App: AppContainer,
    },
    {
      initialRouteName: 'App',
      drawerPosition: "right"
    },
  ),
);