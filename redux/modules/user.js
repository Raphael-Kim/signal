// Imports
import { AuthSession } from 'expo';

// Constants(type)
const SET_TOKEN = 'SET_TOKEN';
const SET_USER = 'SET_USER';
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SET_USERPROFILE = 'SET_USERPROFILE';

const KAKAO_APP_KEY = 'fc03e1abe3af0aa5fcba490d726bb5b3'; 
const GITHUB_APP_KEY = '298fb3f00aa01f02bb22'; 
const GITHUB_APP_KEY_SECRET = '69ec0fca5f92d10522394f3ae372bbfa7896f9c3'; 

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
function githubLogin() {
  return (dispatch, getState) => {
    /* ↓ [1단계] authorization_code 수령해오기 */     
    let redirectUrl = AuthSession.getRedirectUrl();
    let result = await AuthSession.startAsync({
      authUrl:
        `https://github.com/login/oauth/authorize?client_id=${GITHUB_APP_KEY}` +
        `&redirect_uri=${encodeURIComponent(redirectUrl)}` +
        `&response_type=code`,
    });
    if (result.type !== 'success') {
      console.log(result.type);
      // this.setState({ didError: true });
    } else { 
      /* ↓ [2단계] access_token 및 refresh_token 수령
      ※ V_2(async&await 만으로 fetch를 구현, V_1은 보류file/kakaoAPI.js 하단에 有) */
      // console.log(result, '(1)');
      try {
        let body =
          `client_id=${GITHUB_APP_KEY}` +
          `&client_secret=${GITHUB_APP_KEY_SECRET}` +
          `&code=${result.params.code}` +
          `&redirect_uri=${encodeURIComponent(redirectUrl)}`;
        let response = await fetch('https://github.com/login/oauth/access_token', {
          method: 'POST',
          headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: body
        });
        let json = await response.json();
        // console.log(json, '(2)');
        const token = {
          company: 'github',
          ...json
        }
        dispatch(setToken(token));
        /* ↓ [3단계] 사용자 정보 요청(token 이용)
        ※ V_2(async&await 만으로 fetch를 구현, V_1은 보류file/kakaoAPI.js 하단에 有) */    
        try {
          response = await fetch('https://api.github.com/user', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${json.access_token}`,
            }
          });
          json = await response.json();
          // console.log(json, '(3)')
          const userInfo = {
            company: 'github',
            profile_image: json.avatar_url,
          }
          dispatch(setUser(userInfo));
          dispatch(setLogIn());
        } catch(error) {
          console.log('error_githubLogin(3단계)')
        }
      } catch(error) {
        console.log('error_githubLogin(2단계)');
      }
    }
  }
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
        const token = {
          company: 'kakao',
          ...json
        }
        dispatch(setToken(token));
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
          const userInfo = {
            company: 'kakao',
            profile_image: json.properties.profile_image,
          }
          dispatch(setUser(userInfo));
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

// API Actions
function checkTokenForKakao() {
  return async (dispatch, getState) => {
    const { user: { token, userInfo } } = getState();

    if(!token) {
      console.log('redux에 token이 없으므로 checkTokenForKakao() 중단(∵ 최초 로딩)');
      return null
    } else if(!(token.company === 'kakao')) {
      console.log('token의 company가 kakao가 아니므로 checkTokenForKakao() 중단');
      return null     
    } else if(!userInfo) {
      console.log('redux에 userInfo가 없으므로 checkTokenForKakao() 중단');
      return null     
    } else if(!(userInfo.company === 'kakao')) {
      console.log('userInfo의 company가 kakao가 아니므로 checkTokenForKakao() 중단');
      return null
    }
    /* ↓ [1단계] access_token_info
    ※ V_2(async&await 만으로 fetch를 구현) */ 
    try{
      // console.log(token, 'from RootContainer/presenter.js');
      let response = await fetch('https://kapi.kakao.com/v1/user/access_token_info', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token.access_token}`,
        }
      });
      let json = await response.json();
      // json = {code: -401}; 
      // json = {code: 10}; 
      // console.log(json, 'checkTokenForKakao(1단계)');
      if(json.code === -1) {
        /* [2.1단계] 카카오톡 서비스 장애 처리
        ※ V_2(async&await 만으로 fetch를 구현) */
        alert('카카오톡의 일시적인 서비스 장애입니다!');
      } else if(json.code === -401) {
        /* [2.2단계] 토큰(token) 갱신
        ※ V_2(async&await 만으로 fetch를 구현) */
        try{
          let body =
            `grant_type=refresh_token` +
            `&client_id=${KAKAO_APP_KEY}` +
            `&refresh_token=${token.refresh_token}`;
          // console.log(body); 
          response = await fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: {
              'Accept': 'application/json;charset=UTF-8',
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
            body
          });
          // console.log(response);
          json = await response.json(); 
          // console.log(token, '기존의 token'); 
          // console.log(json, '갱신된 token(json)'); // access_token만 갱신 또는 refresh_token까지 갱신
          const newToken = {
            ...token,
            ...json
          };
          console.log(newToken, '새로운 newToken');
          dispatch(setToken(newToken));
        }
        catch(error){
          console.log('error_checkTokenForKakao(2.2단계_토큰갱신)');
          dispatch(setLogOut());
        }
      } else if(json.code === 0 || json.code) { // json.code가 0이면 문제가 발생하므로 json.code === 0 추가
        /* [2.3단계] 로그아웃
        ※ V_2(async&await 만으로 fetch를 구현) */ 
        // console.log(json.code);
        try{
          response = await fetch('https://kapi.kakao.com/v1/user/logout', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token.access_token}`
            },
          });
          json = await response.json();
          dispatch(setLogOut());
        }
        catch(error){
          console.log('error_checkTokenForKakao(2.3단계_로그아웃)');
        }
      }
    }
    catch(error) {
      console.log('error_checkTokenForKakao(1단계)');
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
  kakaoLogin,
  githubLogin,
  checkTokenForKakao
};

export { actionCreators };

export default reducer;