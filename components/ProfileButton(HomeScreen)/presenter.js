import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styles from './styles.js'

class ProfileButton extends React.PureComponent {
  render() {
    console.log("여기는 ProfileButton(HomeScreen)/index.js의 render()함수 안입니다.");
    
    const { profile_image } = this.props.userInfo;
    
    return(
      <TouchableOpacity 
        style={styles.profileImageBox}
        onPress={() => {this.props.navigation.navigate('Profile', this.props);}}
      >
        <Image 
          style={styles.profileImage}
          resizeMode='stretch' 
          source={{uri: `${profile_image}`}}
        />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(ProfileButton);