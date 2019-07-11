import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Animated } from 'react-native';
import Card from '../../components/Card(HomeScreen)';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';  // yarn add(sudo npm install --save) react-native-modal: @7.0.2

class HomeScreen extends React.Component {
  render() {
    console.log('여기는 HomeScreen/presenter.js의 render()함수 안입니다.');
    const { paddingHeight, animatedY, onScroll } = this.props.collapsible;
    
    return(
      <View style={styles.container}> 
        <AnimatedFlatList
          data={this.props.askCard}
          renderItem={({ item }) => {
            return(<Card { ...this.props.userInfo } { ...item }/>);
          }}
          ItemSeparatorComponent={() => {
            return(<View style={{borderWidth: 5, borderColor: '#E6E6E6'}}/>);
          }}
          refreshing={this.props.isFetching}
          onRefresh={this.props.refresh}
          keyExtractor={this.props.keyExtractor}
          contentContainerStyle={{paddingTop: paddingHeight}}
          scrollIndicatorInsets={{top: paddingHeight}}
          _mustAddThis={animatedY}
          onScroll={onScroll}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {this.props.navigation.navigate('Ask', null);}}
          style={styles.addQuestion}
        >
          <Text style={styles.plus} numberOfLines={1}>
            +
          </Text>
        </TouchableOpacity>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#E6E6E6'
    // height: hp('100%'), 
    // width: wp('100%'),
  },
  addQuestion: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    ///////////////////////////
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

export default HomeScreen;