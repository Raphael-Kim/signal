import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ProfileTabScreen from '../screens/ProfileTabScreen'

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator  = createStackNavigator(
  {
    ProfileTab: {
      screen: ProfileTabScreen
    }
  },
  {
    initialRouteName: 'ProfileTab',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#272822',
      },
      // headerTitle: 'USER NAME'
    },
    //headerMode: 'none'
  }
);

// const LoggedInNavigation = createAppContainer(AppNavigator);

// export default LoggedInNavigation;
export default AppNavigator;
