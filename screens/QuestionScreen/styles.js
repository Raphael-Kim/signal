import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  questionContainer: {
    // flex: 1,
    // height: hp('70%'),
    backgroundColor: '#E6E6E6'
  },
  answerContainer: {
    height: hp('34%'),
    backgroundColor: '#E6E6E6'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  boxTop: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 5,
    paddingTop: 15,
    // backgroundColor: 'pink'
  },
  boxCenter: {
    backgroundColor: 'white',
    // alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  boxBottom: {
    backgroundColor: 'white',
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
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  modalSubmit: {
    height: 35,
    width: 150,
    borderRadius: (55 * 1) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 176, 240)'
  },
  modalSubmitText: {
    // fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 17,
    color: 'white'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  scrollableModal: {
    height: hp('90%')
  },
  scrollableTop: {
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollableTopBar: {
    width: 40,
    height: 5,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  scrollableMiddle: {
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20
  },
  scrollableMiddleUp: {
    height: 50,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  scrollableMiddleUpText: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  scrollableMain: {
    borderTopWidth: 1,
    borderColor: '#E6E6E6'
  },
  scrollableBottom: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  customBackdrop: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  customBackdropTextLR: {
    marginTop: 10,
    fontSize: 17,
    color: 'white'
  },
  customBackdropTextLR_inactive: {
    marginTop: 10,
    fontSize: 17,
    color: 'grey'
  },
  customBackdropTextMain: {
    marginTop: 8, // 글자 크기 차이로 인한 조정
    fontSize: 17,
    color: 'grey',
    textAlign: 'center'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  answerContainerSetterSAView: {
    left: 0,
    right: 0,
    bottom: 0,
    // alignItems: 'center',
    backgroundColor: '#00B0F0'
  },
  answerContainerSetterText: {
    marginVertical: 10,
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
