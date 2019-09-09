import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SearchTabScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'SearchTabScreen', // signal 로고 덮어쓰기
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
    console.log('여기는 SearchTabScreen/presenter.js의 render()함수 안입니다.');

    return (
    <View style={{flex: 1}}>
      <Text>
        실시간 인기순위 떠야함
      </Text>
    </View>
    );
  }

}

export default SearchTabScreen;
