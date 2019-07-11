import React, { Component } from 'react';
import LogInScreen from './presenter';

class Container extends React.Component {
  render() {
    console.log("LogInScreen/container.js의 render() 속 this.prop: ", this.prop);
    return (
      <LogInScreen 
        {...this.props} 
        kakaoLogin={this.props.kakaoLogin}/>
    );
  }
}

export default Container;