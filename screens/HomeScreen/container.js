import React, { Component } from 'react';
import { setExpoStatusBarHeight, withCollapsible, setSafeBounceHeight } from 'react-navigation-collapsible';
import { Platform } from 'react-native';
import HomeScreen from './presenter';

import Constants from 'expo-constants'
setExpoStatusBarHeight(Constants.statusBarHeight);
setSafeBounceHeight(Platform.select({ios: 100, android: 100, web: 200}));

class Container extends React.Component {
  state = {
    isFetching: false
  };

  componentDidMount() {
    this.props.init().then(() => {
      this.setState({isFetching: false}); // render 2
    });;
  }

  render() {
    console.log('여기는 HomeScreen/container.js의 render()함수 안입니다.'); 
    return (
      <HomeScreen 
        {...this.props} 
        {...this.state}
        refresh={this._refresh} 
        keyExtractor={this._keyExtractor}
      />
    );
  }

  _refresh = () => {
    this.setState({isFetching: true});
    this.props.init().then(() => {
      this.setState({isFetching: false}); // render 2
    })
  };
  
  _keyExtractor = (item, index) => {
    return item.askCode.toString()
  };
}

export default withCollapsible(Container, {iOSCollapsedColor: 'white'});