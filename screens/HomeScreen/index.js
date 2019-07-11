import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from '../../redux/modules/user';
import { actionCreators as cardActions } from '../../redux/modules/card';

const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps from HomeScreen/index.js');
  const { user: { userInfo } } = state; // → userInfo from kakao 
  const { card: { askCard } } = state;
  return {
    userInfo,
    askCard
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    init: () => {
      return dispatch(cardActions.init());
    },
    setLogOut: () => {
      dispatch(userActions.setLogOut());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);