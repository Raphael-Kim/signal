import React, { Component } from 'react';
import { View, Image, StyleSheet, Platform, Text, TouchableOpacity, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Card extends React.PureComponent {
  componentWillUnmount() {
    console.log(this.props.askCode, '가 unmount 되었습니다.');
  }

  render() {
    console.log(this.props.askCode, "여기는 Card(HomeScreen)/index.js의 render()함수 안입니다.");
    
    const { askCode } = this.props;
    const { profile_image } = this.props.properties;
    const { userName } = this.props;
    const { isFollowed } = this.props;
    const { askTitle } = this.props;
    const { hashTag } = this.props;
    const { numberOfSignal } = this.props;
    const { numberOfAnswer } = this.props;

    return(
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {this.props.navigation.navigate('Question', null);}}
      >
        <View style={styles.container}>
          <View style={styles.boxTop}>
            <View style={styles.userRow}>
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
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {alert('#(hashtag) 작업 할것');}}
            >
              <Text style={styles.hashTag} numberOfLines={1}>
                #{hashTag}
              </Text>
            </TouchableOpacity>
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  ///////////////////////////
  boxTop: {
  },
  boxBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  ///////////////////////////
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  userName: {
    fontFamily: 'NanumSquareR',
    color: 'black',
    textAlign: 'center',
    fontSize: 17.5,
    paddingHorizontal: 5
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: (40 * 1) / 2,
    backgroundColor: '#E6E6E6',
  },
  isSubscribing: {
    fontFamily: 'NanumSquareR',
    color: 'black',
    textAlign: 'center',
    fontSize: 17.5
  },
  subscribe: {
    fontFamily: 'NanumSquareR',
    color: 'blue',
    textAlign: 'center',
    fontSize: 17.5
  },
  ///////////////////////////
  askTitle: {
    fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  ///////////////////////////
  hashTag: {
    fontFamily: 'NanumSquareR',
    color: 'grey',
    fontSize: 17.5,
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  ///////////////////////////
  noAnswer: {
    fontFamily: 'NanumSquareR',
    color: 'grey',
    fontSize: 17.5,
    flex: 1
  },
  numberOfAnswer: {
    fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 17.5,
    flex: 1
  },
  ///////////////////////////
  signal: {
    fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 17.5,
  },
});

export default withNavigation(Card);