import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  //~~~~~~~~~~~~~~~~~~~~~~~~~
  profileImageBox: {
    borderRadius: (37.5 * 1) / 2,
    backgroundColor: '#E6E6E6',
  },
  profileImage: {
    height: 37.5,
    width: 37.5,
    borderRadius: (37.5 * 1) / 2
  },
});