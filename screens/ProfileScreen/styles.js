import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
  },
  profileImageView: {
    // height: hp('20%'),
    marginHorizontal: wp('5%'),
    flexDirection: 'row',
    paddingVertical: hp('2.5%')
    // alignItems: 'center'
    // backgroundColor: 'green'
  },
  profileImage: {
    height: wp('30%'),
    width: wp('30%'),
    borderRadius: (wp('30%') * 1) /2,
    backgroundColor: '#E6E6E6'
  },
  profileInfoView: {
    // height: hp('15%'),
    marginHorizontal: wp('5%'),
    paddingVertical: hp('1%')
  },
  profileFeedView: {
    // height: hp('15%'),
    marginHorizontal: wp('5%'),
    backgroundColor: '#E6E6E6'
  }
});