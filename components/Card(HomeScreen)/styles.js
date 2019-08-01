import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  boxTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 5,
    paddingTop: 15,
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
    paddingTop: 5,
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
    paddingBottom: 15
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