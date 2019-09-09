import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FollowingTabScreen from '../screens/FollowingTabScreen';
import QuestionScreen from '../screens/QuestionScreen';
import AnswerScreen from '../screens/AnswerScreen';
import LadderScreen from '../screens/LadderScreen';


// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator  = createStackNavigator(
  {
    FollowingTab: {
      screen: FollowingTabScreen
    },
    Question: {
      screen: QuestionScreen
    },
    Answer: {
      screen: AnswerScreen
    },
    Ladder: {
      screen: LadderScreen
    }
  },
  {
    initialRouteName: 'FollowingTab',
    defaultNavigationOptions: {
      headerTitle: 'USER NAME'
    },
    //headerMode: 'none'
  }
);

// const LoggedInNavigation = createAppContainer(AppNavigator);

// export default LoggedInNavigation;
export default AppNavigator;
