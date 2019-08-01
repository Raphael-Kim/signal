import React, { Component } from 'react';
import { Button, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import styles from './styles.js';
import Amplify, { Auth, Storage } from 'aws-amplify';

Amplify.configure({
    Auth: {
        identityPoolId: 'ap-northeast-2:564bf062-96a0-4239-86db-0bc098d333e3', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'ap-northeast-2', // REQUIRED - Amazon Cognito Region
    },
    Storage: {
        AWSS3: {
            bucket: 'for-fromme', //REQUIRED -  Amazon eS3 bucket
            region: 'ap-northeast-2', //OPTIONAL -  Amazon service region
        }
    }
});

class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerTitle: '윤지호', // signal 로고 덮어쓰기
    headerRight: null,
    headerTitleContainerStyle: {
      alignItems: 'center'
    },
    headerStyle: {
      backgroundColor: 'white',
      borderBottomWidth: 0
    }
  }

  state = {
    image: null,
  }
  
  componentDidMount() {
    this.setState({ image: this.props.navigation.state.params.userInfo.profile_image })
  }

  render() {
    console.log("ProfileScreen/presenter의 render()함수 안입니다. this.props: ", this.props);
    let { image } = this.state;

    return (
      <ScrollView>
        <View style={{
          borderWidth: 2,
          borderRadius: 20,
          margin: 10,
          borderColor: '#00B0F0'
        }}>
          <View style={styles.profileImageView}>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                style={styles.profileImage}
                onPress={() => {
                  this.getPermissionAsync();
                  this.pickImage();
                }}
              >
                {
                  image &&
                    <Image 
                      source={{ uri: image }} 
                      style={{     
                        height: wp('30%'),
                        width: wp('30%'),
                        borderRadius: (wp('30%') * 1) /2
                      }} 
                    />
                }
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                // backgroundColor: 'pink',
                justifyContent: 'center',
                marginHorizontal: hp('2.5%')
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3C3C3C'
                }}
              >
                윤지호{'\n'}
                <Text
                  style={{
                    fontWeight: 'normal',
                    color: '#3C3C3C'
                  }}
                >
                  @ZalSaengGim
                </Text>
              </Text>
              <View
                style={{
                  // height: hp('5%'),
                  // backgroundColor: 'blue',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#3C3C3C',
                    textAlign: 'center',
                    backgroundColor: 'white'
                  }}                
                >
                  팔로잉{'\n'}
                  <Text
                    style={{
                      fontWeight: 'normal',
                      color: '#3C3C3C'
                    }}                  
                  >
                    68465
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#3C3C3C',
                    textAlign: 'center'
                  }}                
                >
                  팔로우{'\n'}
                  <Text
                    style={{
                      fontWeight: 'normal',
                      color: '#3C3C3C'
                    }}                  
                  >
                    63
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: 'bold',
                    color: '#3C3C3C',
                    textAlign: 'center'
                  }}                
                >
                  포인트{'\n'}
                  <Text
                    style={{
                      fontWeight: 'normal',
                      color: '#3C3C3C'
                    }}                  
                  >
                    비공개
                  </Text>
                </Text>                               
              </View>
            </View>
          </View>        
          <View style={styles.profileInfoView}>
            <Text
              style={{
                fontSize: 17,
                textAlign: 'center'
              }}
            >
              코딩과 사랑에 빠진 남자.{'\n'}
              @Arica와 함께♥: 2018.07.18~ing{'\n'}
              유튜브: www.youtube.com/ZiHO8282
            </Text>
          </View>
          <View style={styles.profileInfoView}>
            <Text
              style={{
                fontSize: 17,
                // textAlign: 'center'
              }}
            >
              Harvard University에서 Computer Science 재학중(석사){'\n'}
              서울대학교에서 컴퓨터 공학과 졸업(2018){'\n'}
            </Text>
          </View>
        </View>
        <View style={styles.profileFeedView}>
          <Text>
            피드
          </Text>
        </View>
      </ScrollView>
    );
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

    let response = await fetch(result.uri);

    console.log(response);

    const blob = await response.blob();

    console.log(blob, '요거 되닝?? ');

    Storage.put('???.jpg', blob, {
      level: 'public',
      contentType: 'image/jpeg'
    })
  };
}

export default ProfileScreen;