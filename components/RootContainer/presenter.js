import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import LoggedOutNavigation from '../../navigation/LoggedOutNavigation';
import LoggedInNavigation from '../../navigation/LoggedInNavigation';

class RootContainer extends React.Component {
  state = {
    isReady: false
  }

  render() {
    const { isLoggedIn } = this.props;
    console.log('RootContainer/presenter의 render()함수 안입니다. isLoggedIn: ', isLoggedIn);
    console.log('RootContainer/presenter의 render()함수 안입니다. isReady: ', this.state.isReady);

    if(this.state.isReady === false) {
      return(
        <AppLoading
          //autoHideSplash={false} → 제거한 이후 <AppLoading> 화면에 갇히는 문제 제거(2019.02.04 14:12)
          startAsync={() => {
            return Promise.all([
              this.props.checkTokenForKakao(),
              this.loadFontsAsync(),
              this.loadImagesAsync()
            ]);
          }} // → 세 함수가 모두 Promise.resolve()되면 onFinish()가 실행됩니다.
          onFinish={() => {
            console.log('지금부터 AppLoading 컴포넌트의 onFinish()가 실행됩니다.');
            this.setState({ isReady: true });
          }}
          onError={() => console.log('error_<AppLoading>')}
        />
      );
    }

    this.props.checkTokenForKakao();

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});

export default RootContainer;
