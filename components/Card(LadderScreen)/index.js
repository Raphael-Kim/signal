import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import { withNavigation } from 'react-navigation';
import ViewMoreText from 'react-native-view-more-text';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles'
import { StackActions } from 'react-navigation';

class Card extends React.PureComponent {
  componentWillUnmount() {
    console.log(this.props.askCode, '가 unmount 되었습니다.');
  }

  state = {
    tags: [
      {id: 0, text: 'HASHTAG1'},
      {id: 2, text: 'HASHTAG2'},
      {id: 3, text: 'HASHTAG3'},
      {id: 4, text: 'HASHTAG4'},
      {id: 5, text: 'HASHTAG5'},
      {id: 6, text: 'HASHTAG6'}
    ]
  }

  render() {
    console.log("여기는 Card(HomeScreen)/index.js의 render()함수 안입니다.");
    // console.log(this.props);

    // const { askCode } = '0';
    // const { profile_image } = 'http://k.kakaocdn.net/dn/if7RG/btqsqTf8AjM/irPwwIZqeHde4W4J4qFBK1/profile_640x640s.jpg';
    // const { userName } = '성재';
    // const { isFollowed } = true;
    // const { askTitle } = '이것이 실화인가?';
    // const { hashTag } = this.props;
    // const { numberOfSignal } = 10;
    // const { numberOfAnswer } = 15;

    const askCode = '0';
    const profile_image = 'http://k.kakaocdn.net/dn/if7RG/btqsqTf8AjM/irPwwIZqeHde4W4J4qFBK1/profile_640x640s.jpg';
    const userName = '성재';
    const isFollowed = true;
    const askTitle = '이것이 실화인가?';
    // const { hashTag } = this.props;
    const numberOfSignal = 10;
    const numberOfAnswer = 15;

    return(
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          this.props.navigation.dispatch(
            StackActions.push({routeName: 'Question', params: { myUserId: 9 }})
          );
        }}
        style={styles.rootTouchableOpacity}
      >
        <View style={styles.container}>
          <View style={styles.boxTop}>
            <Text style={styles.askTitle} numberOfLines={2}>
              {askTitle}
            </Text>
          </View>
          
          <View style={styles.boxCenter}>
            <View style={styles.userInfoView}>
              <Image
                source={{uri: `${profile_image}`}}
                resizeMode='stretch'
                style={styles.profileImage}
              />
              <Text style={styles.userName} numberOfLines={1}>
                {userName}
              </Text>
              {
                isFollowed === true ? (
                  <Text style={styles.isSubscribing} numberOfLines={1}>
                    구독중
                  </Text>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {alert('isFollowed 바꾸는 Redux 작업 할것');}}
                  >
                    <Text style={styles.subscribe} numberOfLines={1}>
                      구독하기
                    </Text>
                  </TouchableOpacity>
                )
              }
            </View>

            <Text style={styles.askTitle} numberOfLines={2}>
              {askTitle}
            </Text>
          </View>
          
          <View style={styles.boxBottom}>
            {
              numberOfAnswer === 0 ? (
                <Text style={styles.noAnswer} numberOfLines={1}>
                  의견이 있으신가요?
                </Text>
              ) : (
                <Text style={styles.numberOfAnswer} numberOfLines={1}>
                  답변 {numberOfAnswer}개
                </Text>
              )
            }
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {alert('signal버튼 작업 할것');}}
            >
              <Text style={styles.signal} numberOfLines={1}>
                시그널 {numberOfSignal}개
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderViewMore = (onPress) => (
    <Text onPress={onPress} style={{fontSize: 17, color:'grey'}}>더 보기</Text>
  )

  renderViewLess = (onPress) => (
    null // disable viewless
  )
}

export default withNavigation(Card);
