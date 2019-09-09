import React, { Component } from 'react';
import { View } from 'react-native';

class FollowingTabScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'FollowingTabScreen', // signal 로고 덮어쓰기
    headerRight: null,
    headerTitleContainerStyle: {
      alignItems: 'center'
    },
    headerStyle: {
      // backgroundColor: 'white',
      // borderBottomWidth: 0,
    }
  }

  state = {

  }

  render() {
    console.log('여기는 FollowingTabScreen/presenter.js의 render()함수 안입니다.');

    return (
    <View style={{flex: 1}}>

    </View>
    );
  }

}

export default FollowingTabScreen;
