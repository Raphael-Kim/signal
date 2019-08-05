import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import AnswerScreen from '../screens/AnswerScreen';
import ProfileScreen from '../screens/ProfileScreen'
import ProfileButton from '../components/ProfileButton(HomeScreen)'
import { TouchableOpacity } from 'react-native-gesture-handler';

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator  = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Question: {
      screen: QuestionScreen
    },
    Answer: {
      screen: AnswerScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'left',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white',
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
        <ProfileButton/>
      ),
    },
    //headerMode: 'none'
  }
);

const LoggedInNavigation = createAppContainer(AppNavigator);

export default LoggedInNavigation;
