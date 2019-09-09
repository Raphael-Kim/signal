import React, { Component } from 'react';
import { Button, View, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import styles from './styles';
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

class ProfileTabScreen extends React.Component {
  static navigationOptions = {

  }

  state = {
    profile_image: null,
  }
  
  componentDidMount() {
    const { profile_image } = this.props.userInfo;

    this.setState({ profile_image })
  }

  render() {
    console.log("ProfileTabScreen/presenter의 render()함수 안입니다. this.props: ", this.props);
    const { profile_image } = this.state;

    return (
      <ScrollView>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageView}>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity
                style={[styles.profileImageView_profileImage, {backgroundColor: '#E6E6E6'}]}
                onPress={() => {
                  this.getPermissionAsync();
                  this.pickImage();
                }}
              >
                {
                  profile_image &&
                    <Image 
                      source={{ uri: profile_image }} 
                      style={styles.profileImageView_profileImage} 
                    />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.profileImageView_profileTextView}>
              <Text style={styles.profileTextView_name}>
                김성재{'\n'}
                <Text style={styles.profileTextView_id}>
                  @ZalSaengGim
                </Text>
              </Text>
              <View style={styles.profileTextView_infoView}>
                <Text style={styles.infoView_title}>
                  팔로잉{'\n'}
                  <Text style={styles.infoView_number}>
                    68465
                  </Text>
                </Text>
                <Text style={styles.infoView_title}>
                  팔로우{'\n'}
                  <Text style={styles.infoView_number}>
                    63
                  </Text>
                </Text>
                <Text style={styles.infoView_title}>
                  포인트{'\n'}
                  <Text style={styles.infoView_number}>
                    비공개
                  </Text>
                </Text>                               
              </View>
            </View>
          </View>
          <View style={styles.profileIntroduceMyselfView}>
            <Text style={styles.profileIntroduceMyselfView_text}>
              코딩에 푹 빠진 남자.{'\n'}
              유튜브: www.youtube.com/ZiHO8282
            </Text>
          </View>
          <View style={styles.separatorView}/>
          <View style={styles.profileCareerView}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              프로필{'\n'}
            </Text>

            <View style={styles.profileCareerView_schoolView}>
              <View style={styles.schoolView_titleView}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  직장
                </Text>
              </View>
              <View style={styles.schoolView_textView}>
                <Text style={{fontSize: 17}}>
                  시그널에서 Software Engineer로 근무중{'\n'}
                </Text>
              </View>
            </View>

            <View style={styles.profileCareerView_schoolView}>
              <View style={styles.schoolView_titleView}>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  학력
                </Text>
              </View>
              <View style={styles.schoolView_textView}>
                <Text style={{fontSize: 17}}>
                  HUFS에서 Computer Science 재학중{'\n'}
                  HUFS에서 베트남어과 재학중
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.feedContainer}>
          <Text style={{fontSize: 17}}>
            {
              // {'\n'}피드
            }
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

export default ProfileTabScreen;