import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import KakaoLogin from '../../assets/images/kakao_login.svg'

class LogInScreen extends React.Component {
  state = {
    isPressed: false
  }

  change = () => {
    this.setState({isPressed: true});
  }

  unchange = () => {
    this.setState({isPressed: false});
    this.props.kakaoLogin();
  }

  render() {
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
        {this.state.isPressed === true ?
          <KakaoLogin
            width={wp('75%')} 
            height={wp('12.605%')}
            marginBottom= {wp('6%')} // 트위터 클론
            fillOpacity={0.5}
            disabled={false}
            onPress={this.unchange}/> :
          <KakaoLogin 
            width={wp('75%')} 
            height={wp('12.605%')} 
            marginBottom= {wp('6%')} // 트위터 클론
            disabled={false} 
            onPressIn={this.change}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title1: {
    width: wp('70%'),
    backgroundColor: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  title2: {
    width: wp('70%'),
    marginBottom: wp('6%'), // 트위터 클론
    backgroundColor: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify'
  }
});

export default LogInScreen;