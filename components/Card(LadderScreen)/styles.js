import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  rootTouchableOpacity: {
    marginHorizontal: 20,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: 'grey',
    ...Platform.select({
      ios: {
          shadowColor:"rgb(50, 50, 50)",
          shadowOpacity: 0.3,
          shadowRadius: 5,
          shadowOffset:{
              height: 3,
              width: 2
          }
      },
      android: {
          elevation: 2
      }
    })
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 25
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  boxTop: {
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 15,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5
    // backgroundColor: 'pink'
  },
  userInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 20,
    paddingBottom: 15,
    // paddingTop: 15,
    // backgroundColor: 'pink'
  },
  boxCenter: {
    // alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  boxBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
    borderTopWidth: 0.5
    // backgroundColor: 'green'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  userName: {
    // fontFamily: 'NanumSquareR',
    color: 'black',
    textAlign: 'center',
    fontSize: 17,
    paddingLeft: 7.5, // space
    paddingRight: 15 // space
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: (40 * 1) / 2,
    backgroundColor: '#E6E6E6',
  },
  isSubscribing: {
    // fontFamily: 'NanumSquareR',
    color: 'black',
    textAlign: 'center',
    fontSize: 17
  },
  subscribe: {
    // fontFamily: 'NanumSquareR',
    color: '#2597C8',
    textAlign: 'center',
    fontSize: 17
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  askTitle: {
    // fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    // textAlign: 'center',
    // paddingHorizontal: 10,
    // paddingTop: 10,
    // paddingBottom: 15
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  hashTag: {
    // fontFamily: 'NanumSquareR',
    color: '#2597C8',
    fontSize: 17,
    // textAlign: 'center',
    // paddingHorizontal: 10,
    // paddingTop: 10,
    // paddingBottom: 5,
    // marginRight: 10
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  noAnswer: {
    // fontFamily: 'NanumSquareR',
    color: 'grey',
    fontSize: 17,
    flex: 1
  },
  numberOfAnswer: {
    // fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 17,
    flex: 1
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  signal: {
    // fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 17,
  },
});