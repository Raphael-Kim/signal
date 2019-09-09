import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Dimensions, Platform, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Tags from 'react-native-tags'
import styles from './styles';
import MentionsTextInput from 'react-native-mentions';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

import { getUserSuggestions } from './service';
const { height, width } = Dimensions.get('window');

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
    useTags: false,
    value: "",
    keyword: "",
    data: [],
    myArr: [
      <View 
        key={5} 
        style={{ 
          height:40, 
          borderBottomWidth:2, 
          borderBottomColor: '#ededed' 
        }}
      >
        <Text>{ 10 }</Text>
      </View>,
      <Image/>
    ],
  };

  reqTimer = 0;

  render() {
    console.log('여기는 AnswerScreen/presenter.js의 render()함수 안입니다.');

    const displayContents = this.state.myArr.map((item, index) => {

      if(item.type.displayName === 'Image') {
        return (
          <Text>
            이미지 공간입니다.!
          </Text>
        )
      }

      return (
        <MentionsTextInput
          textInputStyle={{ borderColor: '#ebebeb', borderWidth: 1, padding: 5, fontSize: 17 }}
          suggestionsPanelStyle={{ backgroundColor: 'rgba(100,100,100,0.1)' }}
          loadingComponent={() => {
            return (
              <View 
                style={{ 
                  flex: 1, 
                  width, 
                  justifyContent: 'center', 
                  alignItems: 'center' 
                }}
              >
                <ActivityIndicator />
              </View>
            )
          }}
          // textInputMinHeight={200}
          // textInputMaxHeight={200}
          trigger={'@'}
          triggerLocation={'new-word-only'} // 'new-word-only', 'anywhere'
          value={this.state.value}
          onChangeText={(val) => { this.setState({ value: val }) }}
          triggerCallback={this.callback.bind(this)}
          renderSuggestionsRow={this.renderSuggestionsRow.bind(this)}
          suggestionsData={this.state.data} // array of objects
          keyExtractor={(item, index) => item.UserName}
          suggestionRowHeight={45}
          horizontal={false} // defaut is true, change the orientation of the list
          MaxVisibleRowCount={3} // this is required if horizontal={false}
        />
      )
    })
    
    return(
      <View style={styles.container}>
        <View style={{
          paddingHorizontal: 20,
          paddingVertical: 10
        }}>
          <TextInput
            ref={(ref) => this.textInputRef_title = ref}
            style={{
              fontSize: 20, 
              fontWeight: 'bold', 
              textAlignVertical: 'top'
            }}
            onChangeText={(text) => {
              this.setState({answerText: text});
            }}
            value={this.state.answerText}
            placeholder={'제목을 적어주세요!'}
            placeholderTextColor={'grey'}
            autoFocus={true}
            maxLength={40}
            multiline={true}
            blurOnSubmit={true}
          />
        </View>

        <View style={styles.answer}>
          <View style={styles.answerContainer}>
            <ScrollView style={styles.textInputBox}>

              {displayContents}

            </ScrollView>
          </View>   
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
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              this.getPermissionAsync();
              this.pickImage();
            }}
            style={styles.answerSubmit}
          >
            <Text style={styles.answerSubmitText} numberOfLines={1}>
              이미지 삽입
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }

  renderSuggestionsRow({ item }, hidePanel) {
    return (
      <TouchableOpacity onPress={() => this.onSuggestionTap(item.UserName, hidePanel)}>
        <View style={styles.suggestionsRowContainer}>
          <View style={styles.userIconBox}>
            <Text style={styles.usernameInitials}>{!!item.DisplayName && item.DisplayName.substring(0, 2).toUpperCase()}</Text>
          </View>
          <View style={styles.userDetailsBox}>
            <Text style={styles.displayNameText}>{item.DisplayName}</Text>
            <Text style={styles.usernameText}>@{item.UserName}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  onSuggestionTap(username, hidePanel) {
    hidePanel();
    const comment = this.state.value.slice(0, - this.state.keyword.length)
    this.setState({
      data: [],
      value: comment + '@' + username
    })
  }

  callback(keyword) {
    if (this.reqTimer) {
      clearTimeout(this.reqTimer);
    }

    this.reqTimer = setTimeout(() => {
      getUserSuggestions(keyword)
        .then(data => {
          this.setState({
            keyword: keyword,
            data: [...data]
          })
        })
        .catch(err => {
          console.log(err);
        });
    }, 200);
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3], // only Android
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

}

export default AnswerScreen;