import { connect } from 'react-redux';
import U300Screen from './presenter';
import { actionCreators as userActions } from '../../redux/modules/user';

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

export default connect(null, mapDispatchToProps)(U300Screen);
// ↑ 모든 redux ERROR의 원인은 **null** 때문이었다! (2019년 2월 4일 새벽 1시 14분)