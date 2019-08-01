import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Tags from 'react-native-tags'
import styles from './styles.js';

class AnswerScreen extends React.Component {
  static navigationOptions = {
    headerTitle: '', // signal 로고 덮어쓰기
    headerRight: null,
    headerTitleContainerStyle: {
      alignItems: 'center'
    },
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0
    },
    // gesturesEnabled: false // disable swipe
  }

  state = {
    answerText: null,
    tags: [],
    useTags: false
  };

  render() {
    console.log('여기는 AnswerScreen/presenter.js의 render()함수 안입니다.');
    
    return(
      <View style={styles.container}>
        <View style={styles.answer}>
          <Text style={styles.answerTitle}>
            1. 답변
          </Text>
          <View style={styles.answerContainer}>
            <View style={styles.textInputBox}>
              <TextInput
                ref={(ref) => this.textInputRef = ref}
                style={{fontSize: 17, textAlignVertical: 'center'}}
                onChangeText={(text) => {this.setState({answerText: text});}}
                value={this.state.answerText}
                placeholder={'답변을 적어주세요.'}
                placeholderTextColor={'grey'}
                autoFocus={true}
                // maxLength={30}
                multiline={true}
              />
            </View>
          </View>   
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagTitle}>
              2. 태그
            </Text>
          {
            this.state.useTags === false 
            ? (
              <TouchableOpacity
                style={styles.tagInputSwitch}
                onPress={() => {
                  this.textInputRef.blur(); // keyboard dismiss
                  this.setState({useTags: true});}}
              >
                <Text style={styles.tagInputSwitchText}>
                  사용하기
                </Text>
              </TouchableOpacity>
            ) : (
              <ScrollView
                  ref={ref => this.scrollView = ref}
                  onContentSizeChange={(contentWidth, contentHeight)=>{
                      this.scrollView.scrollToEnd({animated: true});
                  }}
                >
                <Tags
                  // initialText=""
                  textInputProps={{
                    // placeholder: "Any type of animal",
                    // placeholderTextColor: 'white'
                  }}
                  initialTags={ this.state.tags }
                  createTagOnString={[",", ".", " "]}
                  onChangeTags={ tags => {this.setState({ tags })}}
                  containerStyle={{paddingHorizontal: 20}}
                  inputStyle={styles.customInputStyle}
                  renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
                    <TouchableOpacity 
                      key={`${tag}-${index}`} 
                      onPress={onPress}
                      style={styles.customRenderTagStyle}
                    >
                      <Text style={styles.customRenderTagStyleText}>
                        {tag}
                      </Text>
                    </TouchableOpacity>
                  )}
                />            
              </ScrollView>
            )
          }
        </View>   

        <KeyboardAvoidingView 
          style={styles.submit} 
          keyboardVerticalOffset={108} 
          behavior="padding" enabled
        >
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              this.textInputRef.blur(); // keyboard dismiss
            }}
            style={styles.answerSubmit}
          >
            <Text style={styles.answerSubmitText} numberOfLines={1}>
              제출
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default AnswerScreen;