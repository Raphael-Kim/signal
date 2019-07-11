import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from '../../circular-progress(RN)';
import Card from '../../components/Card(HomeScreen)';
import Modal from 'react-native-modal';  // yarn add(sudo npm install --save) react-native-modal: @7.0.2

class QuestionScreen extends React.Component {
  render() {
    console.log('여기는 QuestionScreen/presenter.js의 render()함수 안입니다.');
    
    return(
      <View style={styles.container}>
        <SafeAreaView style={styles.addView}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {this.props.navigation.navigate('Ask', null);}}
            style={styles.addAnswer}
          >
            <Text style={styles.plus} numberOfLines={1}>
              답변하기
            </Text>
          </TouchableOpacity>            
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    // backgroundColor: '#E6E6E6'
    // height: hp('100%'), 
    // width: wp('100%'),
  },
  addView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey'
  },
  addAnswer: {
    height: 55,
    width: 55,
    borderRadius: (55 * 1) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  plus: {
    fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 25,
    color: 'white'
  },
});

export default QuestionScreen;