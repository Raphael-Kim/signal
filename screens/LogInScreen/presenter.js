import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import KakaoLogin from '../../assets/images/kakao_login.svg';
import GithubLogin from '../../assets/images/github_login.svg';
import styles from './styles.js';

class LogInScreen extends React.Component {
  state = {
    isPressed_kakao: false,
    isPressed_github: false
  }

  render() {
    console.log("LogInScreen/presenter.js의 render() 속 this.prop: ", this.prop);

    return (
      <View style={styles.container}>
        <StatusBar hidden={false} />
        <View>
          <Text style={styles.title1}>
            공유할수록 커지는 IT,
          </Text>
          <Text style={styles.title2}>
            시그널입니다!
          </Text>
        </View>
        {
          this.state.isPressed_kakao === true ?
          <KakaoLogin
            width={wp('75%')}
            height={wp('12.605%')}
            marginBottom= {wp('6%')} // 트위터 클론
            fillOpacity={0.5}
            disabled={false}
            onPress={this.unchange_kakao}
          /> :
          <KakaoLogin
            width={wp('75%')}
            height={wp('12.605%')}
            marginBottom= {wp('6%')} // 트위터 클론
            disabled={false}
            onPressIn={this.change_kakao}
          />
        }
        {
          this.state.isPressed_github === true ?
          <GithubLogin
            width={wp('75%')}
            height={wp('12.605%')}
            marginBottom= {wp('6%')} // 트위터 클론
            fillOpacity={0.5}
            disabled={false}
            onPress={this.unchange_github}
          /> :
          <GithubLogin
            width={wp('75%')}
            height={wp('12.605%')}
            marginBottom= {wp('6%')} // 트위터 클론
            disabled={false}
            onPressIn={this.change_github}
          />
        }
      </View>
    );
  }

  change_kakao = () => {
    this.setState({isPressed_kakao: true});
  }

  unchange_kakao = () => {
    this.setState({isPressed_kakao: false});
    this.props.kakaoLogin();
  }

  change_github = () => {
    this.setState({isPressed_github: true});
  }

  unchange_github = () => {
    this.setState({isPressed_github: false});
    this.props.githubLogin();
  }
}

export default LogInScreen;
