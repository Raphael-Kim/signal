import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Modal from 'react-native-modal';
import ViewMoreText from 'react-native-view-more-text';
import styles from './styles';

class QuestionScreen extends React.Component {
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
    activeSlide: 0,
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~
    visibleModal: null,
    modalText: null,
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~
    isAnswerContainerVisible: false,
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~
    position: new Animated.ValueXY({x:0,y:300})
  }

  render() {
    console.log('여기는 QuestionScreen/presenter.js의 render()함수 안입니다.');

    const { askCode } = this.props.navigation.state.params;
    const { profile_image } = this.props.navigation.state.params;
    const { userName } = this.props.navigation.state.params;
    const { isFollowed } = this.props.navigation.state.params;
    const { askTitle } = this.props.navigation.state.params;
    const { hashTag } = this.props.navigation.state.params;
    const { numberOfSignal } = this.props.navigation.state.params;
    const { numberOfAnswer } = this.props.navigation.state.params;

    return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.questionContainer}>
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
                onPress={() => {this.props.setLogOut();}}
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
          
          <View
            style={{
              width: 10 // 간격 넓히기 위해서 추가
            }}
          />
          
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {this.props.navigation.navigate('Ladder');}}
          >
            <MaterialCommunityIcons 
              name='resistor-nodes' 
              size={30} 
              color='black'
              style={{
                // backgroundColor: 'blue',
                paddingTop: 2
              }}
            />
          </TouchableOpacity>
        </View>

        {
          /*
            <WebView
              style={{ height: hp('100%') }}
              source={{ uri: 'https://github.com/react-native-community/react-native-webview' }}
            />
            
            <Text
              style={{
                height: hp('100%'),
                backgroundColor: '#CDD0D4',
                textAlign: 'center',
                fontSize: 17,
                color: 'black',
                paddingTop: 25
              }}
            >
              WEB VIEW
            </Text>
          */
        }

      </ScrollView>

      {
        this.state.isAnswerContainerVisible === true ? (
          <Animated.View 
            style={{
              height: hp('34%'), 
              backgroundColor: '#E6E6E6', 
              transform:[{translateY:this.state.position.y}]
            }}
          >
            <View
              style={{
                height: '15%',
                flexDirection: 'row',
                backgroundColor: '#E6E6E6',
                alignItems: 'center',
                paddingHorizontal: wp('5%')
              }}
            >
              <Text
                style={{
                  // fontFamily: 'NanumSquareR',
                  flex: 1,
                  color: 'black',
                  fontSize: 17,
                  fontWeight: 'bold'
                }}
              >
                {this.state.entries.length}개 중에 {this.state.activeSlide + 1}번째 답변
              </Text>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  width: '25%',
                  height: '60%',
                  backgroundColor: 'rgb(0, 176, 240)',
                  borderRadius: 20,
                  justifyContent: 'center'
                }}
                onPress={() => this.props.navigation.navigate('Answer', this.props.navigation.state.params, this.props.navigation.state.params.properties)}
              >
                <Text
                  style={{
                    // fontFamily: 'NanumSquareR',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 17
                  }}
                >
                  답변하기
                </Text>
              </TouchableOpacity>
            </View>
            <Carousel
              ref={c => this._slider1Ref = c}
              data={this.state.entries}
              extraData={this.state.activeSlide}
              renderItem={this._renderItemCard.bind(this)}
              sliderWidth={wp('100%')}
              itemWidth={wp('90%')}
              useScrollView={true}
              // removeClippedSubviews={false}
              activeSlideAlignment={'center'}
              inactiveSlideOpacity={0.5}
              inactiveSlideScale={0.9}
              // enableMomentum={true}
              firstItem={this.state.activeSlide}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            />
        </Animated.View>
      ) : (
        null
      )
    }

      <Modal
        isVisible={this.state.visibleModal === 'scrollable'}
        //----------------------------------------------------------------
        scrollTo={this.handleScrollTo}
        scrollOffset={this.state.scrollOffset}
        scrollOffsetMax={hp('150%') - (hp('90%')-25-50)} // content height - ScrollView height
        //----------------------------------------------------------------
        style={styles.bottomModal} // margin 0, flex-end
        //----------------------------------------------------------------
        onSwipeComplete={() => this.setState({ visibleModal: null })}
        // swipeDirection={['up', 'left', 'right', 'down']}
        //----------------------------------------------------------------
        customBackdrop={
          <SafeAreaView style={styles.customBackdrop}>
            {
              this.state.activeSlide === 0 ? (
                <Text style={styles.customBackdropTextLR_inactive}>
                  이전
                </Text>
              ) : (
                <TouchableOpacity onPress={() => {this._slider2Ref.snapToPrev();}}>
                  <Text style={styles.customBackdropTextLR}>
                    이전
                  </Text>
                </TouchableOpacity>
              )
            }
            <TouchableOpacity onPress={() => {this.setState({ visibleModal: null });}}>
              <Text style={styles.customBackdropTextMain}>
                탭해서 닫기
              </Text>
            </TouchableOpacity>
            {
              this.state.activeSlide === (this.state.entries.length - 1) ? (
                <Text style={styles.customBackdropTextLR_inactive}>
                  다음
                </Text>
              ) : (
                <TouchableOpacity onPress={() => {this._slider2Ref.snapToNext();}}>
                  <Text style={styles.customBackdropTextLR}>
                    다음
                  </Text>
                </TouchableOpacity>
              )
            }
          </SafeAreaView>
        }
      >
        <View style={styles.scrollableModal}>
          <Carousel
            ref={c => this._slider2Ref = c}
            data={this.state.entries}
            renderItem={this._renderItemModal.bind(this)}
            sliderWidth={wp('100%')}
            itemWidth={wp('100%')}
            useScrollView={true}
            // removeClippedSubviews={false}
            activeSlideAlignment={'center'}
            inactiveSlideOpacity={0.8}
            inactiveSlideScale={1}
            // enableMomentum={true}
            firstItem={this.state.activeSlide}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            // containerCustomStyle={{null}}
            // contentContainerCustomStyle={null}}
          />
        </View>
      </Modal>

      <SafeAreaView style={styles.answerContainerSetterSAView}>
        {
          this.state.isAnswerContainerVisible === true ? (
            <Text
              style={styles.answerContainerSetterText}
              onPress={()=> {this.close()}}
            >
              탭해서 닫기
            </Text>

          ) : (
            <Text
              style={styles.answerContainerSetterText}
              onPress={()=> {this.open()}}
            >
              {numberOfAnswer}개의 답변
            </Text>
          )
        }

      </SafeAreaView>
    </View>
    );
  }

  open = () => {
    this.setState({isAnswerContainerVisible:true}, () => {
      Animated.spring (
        this.state.position, {
          toValue : {x:0, y:0},
          friction : 13,
          tension : 60,
      }).start();
    });
  };

  close = () => {
    Animated.spring (
      this.state.position, {
        toValue : {x:0, y:300},
        friction : 13,
        tension : 60,
    }).start(() => {
      this.setState({isAnswerContainerVisible:false});
    });
  };

  renderViewMore = (onPress) => (
    <Text onPress={onPress} style={{fontSize: 17, color:'grey'}}>더 보기</Text>
  )

  renderViewLess = (onPress) => (
    null // disable viewless
  )

  _renderItemCard ({ item, index }) {
    return(
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          backgroundColor: 'white',
          // marginTop: 0,
          marginBottom: 25,
          borderRadius: 20,
          justifyContent: 'center'
        }}
        onPress={() => this.setState({ visibleModal: 'scrollable' })}
      >
        <Text
          style={{
            textAlign: 'center',
            // fontFamily: 'NanumSquareR',
            color: 'black',
            fontSize: 17
          }}
        >
          {item.text}
        </Text>
      </TouchableOpacity>
    );
  }

  _renderItemModal ({ item, index }) {
    return(
      <View style={styles.scrollableModal}>
        <View style={styles.scrollableMiddle}>
          <View style={styles.scrollableMiddleUp}>
            <Text style={styles.scrollableMiddleUpText}>
              {item.text}
            </Text>
          </View>
          <ScrollView
            ref={ref => (this.scrollViewRef = ref)}
            onScroll={this.handleOnScroll}
            scrollEventThrottle={16}
            contentContainerStyle={styles.scrollableMain}
          >
            <View style={{height: hp('150%'), paddingHorizontal: 20, marginTop: 20}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                답변 내용이 들어갈 공간입니다!👆
              </Text>
              <Text style={{fontSize: 17}}>
                (이전, 이후로 밀어서 이동이 가능합니다)
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }

  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };

  handleScrollTo = point => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(point);
    }
  };

  get pagination () {
    const { entries, activeSlide } = this.state;

    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          backgroundColor: '#E6E6E6'
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotStyle={{
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
}

export default QuestionScreen;
