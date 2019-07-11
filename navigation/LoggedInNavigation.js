import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import AskScreen from '../screens/AskScreen';
import AnswerScreen from '../screens/AnswerScreen';

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator  = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Question: {
      screen: QuestionScreen
    },
    Ask: {
      screen: AskScreen
    },
    Answer: {
      screen: AnswerScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'left',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white'
      },
      headerLeftContainerStyle: {
      },
      headerTitleContainerStyle: {
        alignItems: 'flex-start',
        marginLeft: 10,
      },
      headerRightContainerStyle: {
        marginRight: 10,
      },
      headerTitle: (
        <View style={{height: '100%', width: 69, justifyContent: 'center'}}>
          <Image 
            style={{height: 37, width: 69}} 
            resizeMode='stretch' 
            source={require('../assets/images/logo(x1).png')}
          />
        </View>
      ),
      headerRight: (
        <View style={{height: '100%', width: 32, justifyContent: 'center'}}>
          <Image 
            style={{height: 32, width: 32}} 
            resizeMode='stretch' 
            source={require('../assets/images/search(x1).png')}
          />
        </View>
      ),
    },
    // headerMode: 'none'
  }
);

const LoggedInNavigation = createAppContainer(AppNavigator);

export default LoggedInNavigation;