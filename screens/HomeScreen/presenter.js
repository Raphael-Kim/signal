import React, { Component } from 'react';
// import { setExpoStatusBarHeight, withCollapsible, setSafeBounceHeight } from 'react-navigation-collapsible';
import { ScrollView, Text, Button, View, Animated, FlatList, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Card from '../../components/Card(HomeScreen)';
import { SafeAreaView } from 'react-navigation';
import Constants from 'expo-constants';
import styles from './styles.js';

// setExpoStatusBarHeight(Constants.statusBarHeight);
// setSafeBounceHeight(Platform.select({ios: 300, android: 100, web: 200})); // 2019.07.19 BUG: github fork해서 수정할 것!

// const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class HomeScreen extends React.Component {
  state = {
    isFetching: false,
    visibleModal: null,
    modalText: null
  };
  
  guideline = ` 1) 30자 내로 작성해주세요.\n 2) 비속어 사용하면 바로 짤입니다.\n 3) 제발 먼저 찾고 질문하세요.`;

  componentDidMount() {
    this.props.init().then(() => {
      this.setState({isFetching: false}); // render 2
    });;
  }

  render() {
    console.log('HomeScreen/presenter의 render()함수 안입니다.');
    // const { paddingHeight, animatedY, onScroll } = this.props.collapsible;

    return(
      <View style={styles.container}>
        <FlatList
          data={this.props.askCard}
          renderItem={({ item }) => {
            return(<Card { ...this.props.userInfo } { ...item }/>);
          }}
          ItemSeparatorComponent={() => {
            return(<View style={{borderWidth: 5, borderColor: '#E6E6E6'}}/>);
          }}
          refreshing={this.state.isFetching}
          onRefresh={this.refresh}
          keyExtractor={this.keyExtractor}
          // contentContainerStyle={{paddingTop: paddingHeight}}
          // scrollIndicatorInsets={{top: paddingHeight}}
          // _mustAddThis={animatedY}
          // onScroll={onScroll}
        />

        <SafeAreaView style={styles.addQuestionSAView}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {this.setState({ visibleModal: 'scrollable' })}}
            style={styles.addQuestion}
          >
            <Text style={styles.addQuestionText} numberOfLines={1}>
              +
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
        
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
          onBackdropPress={() => {
            this.textInputRef.blur(); // keyboard dismiss
            this.setState({ visibleModal: null });
          }}
          customBackdrop={
            <SafeAreaView style={styles.customBackdrop}>
              <Text style={styles.customBackdropText}>
                탭해서 닫기
              </Text>
            </SafeAreaView>
          }
          //----------------------------------------------------------------
          onModalShow={() => {
            this.textInputRef.focus();
          }}
        >
          <View style={styles.scrollableModal}>
            <View style={styles.scrollableTop}>
              <View style={styles.scrollableTopBar}/>
            </View>
            <View style={styles.scrollableMiddle}>
              <View style={styles.scrollableMiddleUp}>
                <Text style={styles.scrollableMiddleUpText}>
                  무엇이 궁금하신가요?
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
                    가이드라인을 준수해주세요!👆
                  </Text>
                  <Text style={{fontSize: 17}}>
                    {this.guideline}
                  </Text>
                  <View style={{borderColor: 'grey', borderBottomWidth: 1, marginTop: 20, justifyContent: 'flex-end'}}>
                    <TextInput
                      ref={(ref) => this.textInputRef = ref}
                      style={{fontSize: 17, textAlignVertical: 'center'}}
                      onChangeText={(text) => {this.setState({modalText: text});}}
                      value={this.state.modalText}
                      placeholder={'페이스북은 어떻게 node_modules를 관리하나요?'}
                      placeholderTextColor={'grey'}
                      maxLength={30}
                      multiline={true}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
            <KeyboardAvoidingView 
              style={styles.scrollableBottom} 
              keyboardVerticalOffset={108} 
              behavior="padding" enabled
            >
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  this.textInputRef.blur(); // keyboard dismiss
                  this.setState({ visibleModal: null });
                }}
                style={styles.modalSubmit}
              >
                <Text style={styles.modalSubmitText} numberOfLines={1}>
                  제출
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </View>
        </Modal>
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

  renderModalContent = () => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>Hi 👋!</Text>
      <Button
        onPress={() => this.setState({ visibleModal: null })}
        title="Close"
      />
    </View>
  );

  handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y,
    });
  };

  handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };
}

export default HomeScreen;
// export default withCollapsible(HomeScreen, {iOSCollapsedColor: 'white'});