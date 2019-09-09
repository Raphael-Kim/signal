import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HomeTabScreen from '../screens/HomeTabScreen';
import QuestionScreen from '../screens/QuestionScreen';
import AnswerScreen from '../screens/AnswerScreen';
import LadderScreen from '../screens/LadderScreen';
import ProfileButton from '../components/ProfileButton(HomeScreen)'

// API: createStackNavigator(RouteConfigs, StackNavigatorConfig);
const AppNavigator  = createStackNavigator(
  {
    HomeTab: {
      screen: HomeTabScreen
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
    initialRouteName: 'HomeTab',
    headerLayoutPreset: 'left',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#272822',
      },
      headerLeftContainerStyle: {
      },
      headerTitleContainerStyle: {
        alignItems: 'flex-start',
        // marginLeft: 10,
      },
      headerRightContainerStyle: {
        marginRight: 10,
      },
      headerTitle: (
        <View style={{height: '100%', width: 90, marginLeft: 20, justifyContent: 'center'}}>
          <StatusBar barStyle={'light-content'} hidden={false} />
          <Image 
            style={{height: 34, width: 90, marginTop: 14}} 
            resizeMode='stretch' 
            source={require('../assets/images/logo(x4).png')}
          />
        </View>
      ),
      // headerRight: (
      //   <ProfileButton/>
      // ),
    },
    //headerMode: 'none'
  }
);

// const LoggedInNavigation = createAppContainer(AppNavigator);

// export default LoggedInNavigation;
export default AppNavigator;
