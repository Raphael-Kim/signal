import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFF'
  },
  suggestionsRowContainer: {
    flexDirection: 'row',
  },
  userAvatarBox: {
    width: 35,
    paddingTop: 2
  },
  userIconBox: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#54c19c'
  },
  usernameInitials: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 14
  },
  userDetailsBox: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 15
  },
  displayNameText: {
    fontSize: 13,
    fontWeight: '500'
  },
  usernameText: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.6)'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  answer: {
    flex: 80
  },
  answerTitle: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  answerContainer: {
    flex: 1, 
    marginHorizontal: 20, 
    paddingHorizontal: 10, 
    backgroundColor: 'white', 
    borderColor: 'grey', 
    borderWidth: 1
  },
  textInputBox: {
    borderColor: 'grey', 
    borderBottomWidth: 1,
    backgroundColor: 'pink'
    // justifyContent: 'flex-end',
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  tag: {
    flex: 20
  },
  tagTitle: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  tagInputSwitch: {
    borderColor: 'rgb(0, 176, 240)', // signal blue
    borderWidth: 2,
    borderRadius: 20,
    width: 96,
    height: 32,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: "center",
  },
  tagInputSwitchText: {
    fontSize: 17,
    color: 'black'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  submit: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerSubmit: {
    height: 35,
    width: 150,
    borderRadius: (55 * 1) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 176, 240)'
  },
  answerSubmitText: {
    // fontFamily: 'NanumSquareR',
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~
  customInputStyle: {
    margin: 0,
    padding: 0,
    paddingLeft: 12,
    paddingRight: 12,
    flex: 1,
    height: 32,
    fontSize: 17,
    color: "rgba(0, 0, 0, 0.87)"
  },
  customRenderTagStyle: {
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    paddingLeft: 12,
    paddingRight: 12,
    height: 32,
    margin: 4
  },
  customRenderTagStyleText: {
    fontSize: 17,
    color: "rgba(0, 0, 0, 0.87)"
  }
});