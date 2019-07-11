import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import LoggedInNavigation from '../../navigation/LoggedInNavigation';

const KAKAO_APP_KEY = 'fc03e1abe3af0aa5fcba490d726bb5b3'; 

class RootContainer extends React.Component {
  state = {
    isReady: false
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log('여기는 RootContainer/presenter.js의 render()함수 안입니다.\nisLoggedIn: ', isLoggedIn);
    console.log('여기는 RootContainer/presenter.js의 render()함수 안입니다.\nisReady: ', this.state.isReady);

    if(this.state.isReady === false) {
      return(
        <AppLoading 
          //autoHideSplash={false} → 제거한 이후 <AppLoading> 화면에 갇히는 문제 제거(2019.02.04 14:12)
          startAsync={() => {
            return Promise.all([this.checkTokenForKakao(), this.loadFontsAsync(), this.loadImagesAsync()]);
          }} // → 세 함수가 모두 Promise.resolve()되면 onFinish()가 실행됩니다.
          onFinish={() => {
            console.log('지금부터 AppLoading 컴포넌트의 onFinish()함수가 실행됩니다.');
            this.setState({ isReady: true });
          }}
          onError={() => console.log('error_<AppLoading>')}
        />
      );
    }

    return( 
      <View style={styles.container}>
        <StatusBar hidden={false} />
        {isLoggedIn ? (
          // Home 화면으로 이동
          <LoggedInNavigation/>
        ) : (
          // Login 화면으로 이동
          <LoggedOutNavigation/>
        )}
      </View>
    );
  }

  /* ↓ for font */
  loadFontsAsync = async () => {
    console.log('loadFontsAsync start');
    await Font.loadAsync({
      NanumSquareR: require('../../assets/fonts/NanumSquareR.ttf'),
      godoRoundedR: require('../../assets/fonts/godoRoundedR.ttf')
    });
    console.log('loadFontsAsync end');
  };

  /* ↓ for image */
  loadImagesAsync = async () => {
    console.log('loadImagesAsync start');
    await Asset.loadAsync([
      require('../../assets/images/logo(x1).png'),
      require('../../assets/images/logoSmall(x1).png'),
      require('../../assets/images/search(x1).png')
    ]);
    console.log('loadImagesAsync end');
  };

  /* ↓ to check token for Kakao Session */
  checkTokenForKakao = async () => {
    if(!this.props.token) { // → 최초 로딩시 token이 無
      return null
    }

    /* ↓ [1단계] access_token_info
    ※ V_2(async&await 만으로 fetch를 구현) */ 
    try{
      // console.log(this.props.token, 'from RootContainer/presenter.js'); (for test)
      let response = await fetch('https://kapi.kakao.com/v1/user/access_token_info', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.props.token.access_token}`,
        }
      });
      let json = await response.json();
      // json = {code: -401}; (for test)
      // json = {code: 10}; (for test)
      console.log(json, 'checkTokenForKakao(1단계)');

      if(json.code === -1) {
        /* [2.1단계] 카카오톡 서비스 장애 처리
        ※ V_2(async&await 만으로 fetch를 구현) */
        console.log('카카오톡의 일시적인 서비스 장애입니다!');
      }
      else if(json.code === -401) {
        /* [2.2단계] 토큰(token) 갱신
        ※ V_2(async&await 만으로 fetch를 구현) */
        try{
          let body =
          `grant_type=refresh_token` +
          `&client_id=${KAKAO_APP_KEY}` +
          `&refresh_token=${this.props.token.refresh_token}`;
          // console.log(body); (for test)
          response = await fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: {
              'Accept': 'application/json;charset=UTF-8',
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body
          });
          // console.log(response); (for test)
          json = await response.json(); 
          console.log(token, '기존의 token'); // (for test)
          console.log(json, '갱신된 token(json)'); // (for test)
          const newToken = {
            ...this.props.token,
            ...json
          };
          // console.log(newToken, '새로운 newToken'); (for test)
          this.props.setToken(newToken);
        }
        catch(error){
          console.log('error_checkTokenForKakao(2.2단계_토큰갱신)');
          this.props.setLogOut();
        }
      } else if(json.code) { // → json.code 수정해야 함(0이면 문제가 발생) **
        /* [2.3단계] 로그아웃
        ※ V_2(async&await 만으로 fetch를 구현, V_1은 LogInScreen/container.js에 有) */
        // console.log(json.code);
        try{
          response = await fetch('https://kapi.kakao.com/v1/user/logout', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${this.props.token.access_token}`
            },
          });
          json = await response.json();
          this.props.setLogOut();
        }
        catch(error){
          console.log('error_checkTokenForKakao(2.3단계_로그아웃)');
        }
      }
    }
    catch(error) {
      console.log('error_checkTokenForKakao(1단계)');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});

export default RootContainer;