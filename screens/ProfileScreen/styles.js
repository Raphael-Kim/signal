import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  profileContainer: {
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    borderColor: '#00B0F0',
    paddingVertical: hp('2.5%')
  },
  profileImageView: {
    marginHorizontal: wp('5%'),
    flexDirection: 'row',
    paddingBottom: hp('2.5%')
    // alignItems: 'center'
    // backgroundColor: 'green'
  },
  profileImageView_profileImage: {
    height: wp('30%'),
    width: wp('30%'),
    borderRadius: (wp('30%') * 1) /2,
    backgroundColor: '#E6E6E6'
  },
  profileImageView_profileTextView: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    marginHorizontal: hp('2.5%')
  },
  profileTextView_name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3C3C3C'
  },
  profileTextView_id: {
    fontWeight: 'normal',
    color: '#3C3C3C'
  },
  profileTextView_infoView: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  infoView_title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#3C3C3C',
    textAlign: 'center',
    backgroundColor: 'white'
  },
  infoView_number: {
    fontWeight: 'normal',
    color: '#3C3C3C'
  },
  profileIntroduceMyselfView: {
    marginHorizontal: wp('5%'),
    // paddingVertical: hp('1%'),
    // backgroundColor: 'pink'
  },
  profileIntroduceMyselfView_text: {
    fontSize: 17,
    // textAlign: 'center'
  },
  separatorView: {
    borderWidth: 0.5,
    borderColor: '#CDD0D3',
    marginHorizontal: wp('5%'),
    marginVertical: hp('2.5%')
  },
  profileCareerView: {
    // height: hp('15%'),
    marginHorizontal: wp('5%'),
    paddingVertical: hp('1%')
  },
  profileCareerView_schoolView: {
    flexDirection: 'row'
  },
  schoolView_titleView: {
    marginRight: 10,
    // backgroundColor: 'pink'
  },
  schoolView_textView: {
    flex: 1,
    // backgroundColor: 'green'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  feedContainer: {
    // marginHorizontal: wp('5%'),
    backgroundColor: '#E6E6E6',
    height: hp('100%'),
    alignItems: 'center'
  }
});