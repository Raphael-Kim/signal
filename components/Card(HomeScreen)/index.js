import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ViewMoreText from 'react-native-view-more-text';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles.js'

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
    
    const { askCode } = this.props;
    const { profile_image } = this.props;
    const { userName } = this.props;
    const { isFollowed } = this.props;
    const { askTitle } = this.props;
    // const { hashTag } = this.props;
    const { numberOfSignal } = this.props;
    const { numberOfAnswer } = this.props;

    return(
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {this.props.navigation.navigate('Question', this.props);}}
      >
        <View style={styles.container}>
          <View style={styles.boxTop}>
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
          <View style={styles.boxCenter}>  
            <Text style={styles.askTitle} numberOfLines={2}>
              {askTitle}
            </Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <ViewMoreText
                  numberOfLines={1}
                  renderViewMore={this.renderViewMore}
                  renderViewLess={this.renderViewLess}
                  textStyle={styles.hashTag}
                >
                  {
                    this.state.tags && this.state.tags.map( item => {
                      return (
                        <Text key={item.id}>
                          <Text onPress={() => {alert('#(hashtag) 작업 할것');}}>
                            #{item.text}
                          </Text>
                          <Text>  </Text>
                        </Text>
                      )
                    })
                  }      
              </ViewMoreText>    
            </View>
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