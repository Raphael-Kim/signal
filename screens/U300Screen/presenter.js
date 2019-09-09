import React, { Component } from 'react';
import { Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-navigation';
import { getHeaderHeight } from './getHeight';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import styles from './styles';

class U300Screen extends React.Component {
  state = {
    image: null,
    isSentenceSelected: false,
    selectedSentence: 1,
    bundle: [
      {
        title: '이 사람이 스타트업계의 전설이라던데 사실인가요?',
        comment: '저 분이 참여한 아이템마다 다 대박을 쳤다고 합니다!!',
        tag: '#대한민국_최고의_창업가 #모든_창업가의_롤모델'
      }, {
        title: '이 사람이 대한민국 IT 기술을 쥐락펴락한다던데 사실인가요?',
        comment: '네 맞아요. 저 공대생인데 수업시간에도 언급되는 분이십니다.',
        tag: '#대한민국_최고의_전문가 #모든_공대생의_롤모델'
      }, {
        title: '\'대한민국 개발자\'하면 이 사람이라던데 사실인가요?',
        comment: '대한민국 IT 역사에 한 획을 그은 분이시죠!!',
        tag: '#대한민국_최고의_프로그래머 #모든_개발자의_롤모델'
      }, {
        title: '이 사람이 많은 사람들의 롤모델이라던데 사실인가요?',
        comment: '세계에서 가장 영항력 있는 50인에 꼽히셨어요 ㄷㄷ',
        tag: '#대한민국_최고의_인플루언서 #모든_사람들의_롤모델'
      }, {
        title: '이 사람이 하버드대학교에 입학할 거라던데 사실인가요?',
        comment: '네 맞아요. 특유의 스마트함과 성실함이 대단하신 분이죠!!',
        tag: '#대한민국_최고의_수재 #모든_수험생의_롤모델'
      }

    ]
  }

  render() {
    console.log("U300Screen/presenter.js의 render() 속 this.prop: ", this.prop);
    // console.log(getHeaderHeight());
    const { image } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} hidden={false} />

          <View 
            style={{
              backgroundColor: 'white',
              width: wp('100%'),
              height: ((wp('100%') * 1.5) - getHeaderHeight() - 15)
            }}
          >
            <View
              style={{
                backgroundColor: 'white',
                // width: wp('100%'),
                height: (((wp('100%') * 1.5) - getHeaderHeight()) - 15 - wp('100%')) / 2,
                justifyContent: 'center',
                // alignItems: 'center',
                borderBottomWidth: 0.25
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 25
                }}
              >
                {this.state.bundle[this.state.selectedSentence - 1].title}{'\n'}
                <Text
                  style={{
                    fontSize: 3,
                    fontWeight: 'bold'
                  }}
                >
                  {'\n'}
                </Text>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'normal',
                    color: 'grey'
                  }}
                >
                  {this.state.bundle[this.state.selectedSentence - 1].tag}
                </Text>
              </Text>

            </View>

            <View
              style={{
                backgroundColor: 'white',
                width: wp('100%'),
                height: wp('100%')
              }}
            >
              <Image 
                source={{ uri: image }} 
                style={{
                  width: wp('100%'),
                  height: wp('100%'),
                  resizeMode: 'contain',
                }} 
              />
            </View>

            <View
              style={{
                // backgroundColor: 'pink',
                // width: wp('100%'),
                height: (((wp('100%') * 1.5) - getHeaderHeight()) - 15 - wp('100%')) / 2,
                // justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                borderTopWidth: 0.25
              }}
            >
              <View 
                style={{
                  height: '100%', 
                  width: 45,
                  marginLeft: 20,
                  marginRight: 10,
                  marginTop: 2.5,
                  justifyContent: 'center',
                  // backgroundColor: 'green'
                }}
              >
                <Image 
                  style={{height: 45, width: 45}}
                  resizeMode='stretch' 
                  source={require('../../assets/images/u300_person_icon(x2).png')}
                />
              </View>

              <View 
                style={{
                  // justifyContent: 'space-around'
                }}
              >
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    color: 'grey'
                  }}
                >
                  시그널{'\n'}
                  <Text
                    style={{
                      fontSize: 3,
                      fontWeight: 'bold'
                    }}
                  >
                    {'\n'}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: 'black'
                    }}
                  >
                    {this.state.bundle[this.state.selectedSentence - 1].comment}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          
          {/* 하단 설정 칸 */}
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              paddingTop: 30
            }}
          >
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: 'white',
                height: 15
              }}
            />

            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
                marginTop: 15
              }}
              onPress={() => {
                this.setState({ isSentenceSelected: false });
              }}
            >
              창업유망팀 300 출정식 기념{'\n'}
              시그널 굿즈 제작하기
            </Text>

            <View
              style={{
                height: 25
              }}
            />

            {
              this.state.isSentenceSelected === false ? (
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    style={[styles.selectButton, {backgroundColor: '#272822'}]}
                    onPress={() => {
                      this.setState({ isSentenceSelected: true });
                    }}
                  >
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 15
                      }}
                    >
                      1. 문구 선택하기
                    </Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      height: 25
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'row'
                    }}
                  >
                    <TouchableOpacity
                      style={[styles.selectSentenceButton, {backgroundColor: '#272822'}]}
                      onPress={() => {
                        this.setState({ selectedSentence: 1 });
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 15
                        }}
                      >
                        1
                      </Text>
                    </TouchableOpacity>
                      <View
                        style={{
                          width: 5
                        }}
                      />
                    <TouchableOpacity
                      style={[styles.selectSentenceButton, {backgroundColor: '#272822'}]}
                      onPress={() => {
                        this.setState({ selectedSentence: 2 });
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 15
                        }}
                      >
                        2
                      </Text>
                    </TouchableOpacity>
                      <View
                        style={{
                          width: 5
                        }}
                      />
                    <TouchableOpacity
                      style={[styles.selectSentenceButton, {backgroundColor: '#272822'}]}
                      onPress={() => {
                        this.setState({ selectedSentence: 3 });
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 15
                        }}
                      >
                        3
                      </Text>
                    </TouchableOpacity>
                      <View
                        style={{
                          width: 5
                        }}
                      />
                    <TouchableOpacity
                      style={[styles.selectSentenceButton, {backgroundColor: '#272822'}]}
                      onPress={() => {
                        this.setState({ selectedSentence: 4 });
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 15
                        }}
                      >
                        4
                      </Text>
                    </TouchableOpacity>
                      <View
                        style={{
                          width: 5
                        }}
                      />
                    <TouchableOpacity
                      style={[styles.selectSentenceButton, {backgroundColor: '#272822'}]}
                      onPress={() => {
                        this.setState({ selectedSentence: 5 });
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: 15
                        }}
                      >
                        5
                      </Text>
                    </TouchableOpacity>

                  </View>
                </View>
              ) : (
                <TouchableOpacity
                  style={[styles.selectButton, {backgroundColor: '#272822'}]}
                  onPress={() => {
                    this.getPermissionAsync();
                    this.pickImage();
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 15
                    }}
                  >
                    2. 사진 선택하기
                  </Text>
                </TouchableOpacity>
              )
            }

          </View>
      </View>
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
      allowsEditing: true,
      // aspect: [4, 3], // only Android
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

}

export default U300Screen;

