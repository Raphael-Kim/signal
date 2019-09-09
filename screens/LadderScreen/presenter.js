import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import Card from '../../components/Card(LadderScreen)'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Autolink from 'react-native-autolink';
import MentionsTextInput from 'react-native-mentions';

class LadderScreen extends React.Component {
  static navigationOptions = {
    headerTitle: '', // signal 로고 덮어쓰기
    headerRight: null,
    headerTitleContainerStyle: {
      alignItems: 'center'
    },
    headerStyle: {
      // backgroundColor: 'white',
      // borderBottomWidth: 0,
    }
  }

  state = {
    entries: [
      {id: 0, text: 'ANSWER1'},
      {id: 2, text: 'ANSWER2'},
      {id: 3, text: 'ANSWER3'},
      {id: 4, text: 'ANSWER4'},
      {id: 5, text: 'ANSWER5'},
      {id: 6, text: 'ANSWER6'}
    ],
    tags: [
      {id: 0, text: 'HASHTAG1'},
      {id: 2, text: 'HASHTAG2'},
      {id: 3, text: 'HASHTAG3'},
      {id: 4, text: 'HASHTAG4'},
      {id: 5, text: 'HASHTAG5'},
      {id: 6, text: 'HASHTAG6'}
    ],
    isFetching: false,
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  }

  render() {
    console.log('여기는 LadderScreen/presenter.js의 render()함수 안입니다.');

    return (
      <View style={{flex: 1, backgroundColor: '#F7FAFF'}}>
        <FlatList
          data={this.props.askCard}
          renderItem={({ item }) => {
            let lastIndex = this.props.askCard.length;
            lastIndex -= 1;
            
            if(item.askCode === this.props.askCard[lastIndex].askCode) {
              return(
                <View>
                  <Card/>
                  <View
                    style={{
                      height: 100,
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 15
                      }}
                    >
                      총 {lastIndex + 1}개의 사다리 질문이 있습니다.
                    </Text>
                  </View>
                  <Autolink
                    text="This is the string to parse for urls (https://github.com/joshswan/react-native-autolink), phone numbers (415-555-5555), emails (josh@example.com), mentions/handles (@twitter), and hashtags (#exciting)"
                    hashtag="instagram"
                    mention="twitter" 
                  />
                </View>
              );
            }

            return(
              <Card/>
            );
          }}
          ItemSeparatorComponent={() => {
            return(
              <View 
                style={{
                  height: 50, 
                  // backgroundColor: '#E6E6E6',
                  flexDirection: 'row'
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    left: 100,
                    top: 2,
                    bottom: 2,
                    borderWidth: 2,
                    borderRadius: 500,
                    borderColor: 'grey'
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    right: 100,
                    top: 2,
                    bottom: 2,
                    borderWidth: 2,
                    borderRadius: 500,
                    borderColor: 'grey'
                  }}
                />
              </View>
            );
          }}
          refreshing={this.state.isFetching}
          onRefresh={this.refresh}
          keyExtractor={this.keyExtractor}
          // contentContainerStyle={{paddingTop: paddingHeight/4}}
          // scrollIndicatorInsets={{top: paddingHeight/2}}
          // _mustAddThis={animatedY}
          // onScroll={onScroll}
        />
      </View>
    );
  }

  refresh = () => {
    this.setState({isFetching: true});
    this.props.init().then(() => {
      this.setState({isFetching: false}); // render 2
    })
  };

  keyExtractor = (item, index) => {
    return item.askCode.toString()
  };

}

export default LadderScreen;
