import React, { Component } from 'react';
import QuestionScreen from './presenter';

class Container extends React.Component {
  static navigationOptions = {
    headerTitle: 'Hmm',
    headerRight: null,
    headerTitleContainerStyle: {
      alignItems: 'center'
    }
  }

  render() {
    console.log('여기는 QuestionScreen/container.js의 render()함수 안입니다.'); 
    return (
      <QuestionScreen 
        {...this.props} 
        {...this.state}
      />
    );
  }
}

export default Container;