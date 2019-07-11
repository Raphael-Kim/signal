import React, { Component } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { AnimatedCircularProgress } from '../../circular-progress(RN)';
import Card from '../../components/Card(HomeScreen)';
import Modal from 'react-native-modal';  // yarn add(sudo npm install --save) react-native-modal: @7.0.2

class AskScreen extends React.Component {
  render() {
    console.log('여기는 QuestionScreen/presenter.js의 render()함수 안입니다.');
    
    return(
      <View style={styles.container}> 
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
  }
});

export default AskScreen;