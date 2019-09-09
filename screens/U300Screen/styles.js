import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC6D2D'
  },
  title: {
    width: wp('70%'),
    marginBottom: wp('6%'), // 트위터 클론
    backgroundColor: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'justify'
  },
  selectButton: {
    height: hp('5%'),
    width: wp('45%'),
    borderRadius: (wp('30%') * 1) /2,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: '#E6E6E6'
  },
  selectSentenceButton: {
    height: wp('13%'),
    width: wp('13%'),
    borderRadius: (wp('13%') * 1) /2,
    justifyContent: 'center',
    alignItems: 'center'  
  }
});