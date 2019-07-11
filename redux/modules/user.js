// Imports
import { AuthSession } from 'expo';

// Constants(type)
const SET_TOKEN = 'SET_TOKEN';
const SET_USER = 'SET_USER';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SET_USERPROFILE = 'SET_USERPROFILE';

const KAKAO_APP_KEY = 'fc03e1abe3af0aa5fcba490d726bb5b3'; 

// Action Creators
function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  };
}

function setUser(userInfo) {
  return {
    type: SET_USER,
    userInfo
  };
}

function setLogIn() {
  return {
    type: LOG_IN
  };
}

function setLogOut() {
  return {
    type: LOG_OUT
  };
}

function setUserProfile(userProfile) {
  return {
    type: SET_USERPROFILE,
    userProfile
  };
}

// API Actions
function kakaoLogin() {
  return async (dispatch, getState) => {
    /* ↓ [1단계] authorization_code 수령해오기 */     
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_APP_KEY}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&response_type=code`,
    });
    if (result.type !== 'success') {
      console.log(result.type);
      // this.setState({ didError: true });
    } else { 
      /* ↓ [2단계] access_token 및 refresh_token 수령
      ※ V_2(async&await 만으로 fetch를 구현, V_1은 보류file/kakaoAPI.js 하단에 有) */
      try {
        let body =
          `grant_type=authorization_code` +
          `&client_id=${KAKAO_APP_KEY}` +
          `&code=${result.params.code}` +
          `&redirect_uri=${encodeURIComponent(redirectUrl)}`;
        let response = await fetch('https://kauth.kakao.com/oauth/token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: body
        });
        let json = await response.json();
        dispatch(setToken(json));
        /* ↓ [3단계] 사용자 정보 요청(token 이용)
        ※ V_2(async&await 만으로 fetch를 구현, V_1은 보류file/kakaoAPI.js 하단에 有) */    
        try {
          response = await fetch('https://kapi.kakao.com/v2/user/me', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${json.access_token}`,
            }
          });
          json = await response.json();
          dispatch(setUser(json));
          dispatch(setLogIn());
        } catch(error) {
          console.log('error_kakaoLogin(3단계)')
        }
      } catch(error) {
        console.log('error_kakaoLogin(2단계)');
      }
    }
  }
}

// Initial State
const initialState = {
  isLoggedIn: false
} 

// Reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
    case SET_TOKEN:
      return applySetToken(state, action);
    case LOG_IN:
      return applyLogIn(state, action);
    case SET_USER:
      return applySetUser(state, action);
    case LOG_OUT:
      return applyLogOut(state, action);
    case SET_USERPROFILE:
      return applySetUserProfile(state, action);
    };
}

function applySetToken(state, action) {
  const { token } = action;
  return {
    ...state,
    token
  };
}

function applySetUser(state, action) {
  const { userInfo } = action;
  return {
    ...state,
    userInfo
  };
}

function applyLogIn(state, action) {
  return {
    ...state,
    isLoggedIn: true
  };
}

function applyLogOut(state, action) {
  return {
    ...state,
    isLoggedIn: false
  };
}

function applySetUserProfile(state, action) {
  const { userProfile } = action;    
  return {
    ...state,
    userProfile
  };
}

// Exports
const actionCreators = {
  setToken,
  setUser,
  setLogIn,
  setLogOut,
  setUserProfile,
  kakaoLogin
};

export { actionCreators };

export default reducer;