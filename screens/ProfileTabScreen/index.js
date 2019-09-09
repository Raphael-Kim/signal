import { connect } from 'react-redux';
import ProfileTabScreen from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps from ProfileTabScreen/index.js');

  const { user: { userInfo } } = state; // → userInfo from kakao 
  
  return {
    userInfo
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    kakaoLogin: () => {
      dispatch(userActions.kakaoLogin());
    },
    githubLogin: () => {
      dispatch(userActions.githubLogin());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileTabScreen);
// ↑ 모든 redux ERROR의 원인은 **null** 때문이었다! (2019년 2월 4일 새벽 1시 14분)