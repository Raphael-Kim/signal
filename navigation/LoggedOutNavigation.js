import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LogInScreen from '../screens/LogInScreen';
import U300Screen from '../screens/U300Screen';

const U300Navigator  = createStackNavigator(
  {
    U300: {
      screen: U300Screen
    }
  },
  {
    initialRouteName: 'U300',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#272822'
        // borderBottomWidth: 0,
      },
      headerLeft: (
        <View style={{height: '100%', width: 90, marginLeft: 20, justifyContent: 'center'}}>
          <Image 
            style={{height: 34, width: 90, marginTop: 14}} 
            resizeMode='stretch' 
            source={require('../assets/images/logo(x4).png')}
          />
        </View>
      ),
      headerRight: (
        <View style={{height: '100%', width: 27, marginRight: 20, justifyContent: 'center'}}>
          <Image 
            style={{height: 27, width: 27, marginBottom: 0}}
            resizeMode='stretch' 
            source={require('../assets/images/search(x2).png')}
          />
        </View>
      ),
    },
    // headerMode: 'none'
  }
);

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator = createStackNavigator(
  {
    LogIn: {
      screen: LogInScreen
    },
    U300: {
      screen: U300Navigator
    }
  },
  {
    initialRouteName: 'LogIn',
    /*
    defaultNavigationOptions: {
      headerStyle: {
        borderBottomWidth: 0,
      },
      headerTitle: (
        <View style={{height: '100%', width: 32, justifyContent: 'center'}}>
          <Image 
            style={{height: 32, width: 32}} 
            resizeMode='stretch' 
            source={require('../assets/images/logoSmall(x1).png')}
          />
        </View>
      ),
    },
    */
    headerMode: 'none'
  }
);

const LoggedOutNavigation = createAppContainer(AppNavigator);

export default LoggedOutNavigation;