import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  addQuestionSAView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'flex-end'
  },
  addQuestion: {
    //-----------------POSITION
    // position: 'absolute',
    right: 15,
    bottom: 15,
    //-------------------LAYOUT
    height: 55,
    width: 55,
    borderRadius: (55 * 1) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 176, 240)'
  },
  addQuestionText: {
    // fontFamily: 'NanumSquareR',
    color: 'black',
    fontSize: 25,
    color: 'white'
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
    backgroundColor: 'black',
    alignItems: 'center',
  },
  customBackdropText: {
    marginTop: 10,
    fontSize: 17,
    color: 'grey'
  },
  //~~~~~~~~~~~~~~~~~~DON'T USE
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  }
});
