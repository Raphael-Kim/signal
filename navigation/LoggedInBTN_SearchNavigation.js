import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SearchTabScreen from '../screens/SearchTabScreen'

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator  = createStackNavigator(
  {
    SearchTab: {
      screen: SearchTabScreen
    }
  },
  {
    initialRouteName: 'SearchTab',
    defaultNavigationOptions: {
      headerTitle: 'USER NAME'
    },
    //headerMode: 'none'
  }
);

// const LoggedInNavigation = createAppContainer(AppNavigator);

// export default LoggedInNavigation;
export default AppNavigator;
