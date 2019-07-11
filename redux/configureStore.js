import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'; // (1)
import asyncStorage from 'redux-persist/lib/storage'; // local storage
import reduxThunk from 'redux-thunk';
import userReducer from './modules/user';
import cardReducer from './modules/card';

const middlewares = [reduxThunk]; // (2)

const rootReducer = combineReducers({user: userReducer, card: cardReducer});

const persistConfig = {
  key: 'root', // the key for the persist
  storage: asyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // returns an "ENHANCED" reducer
// console.log(persistedReducer, "persistedReducer(함수)");

const configureStore = ()  => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  // console.log(store, "store");
  let persistor = persistStore(store, null, () => {console.log('callback function called after rehydration is finished');}); // "ENABLE" persistence
  // console.log(persistor, "persistor");
  return { store, persistor }
};

export default configureStore;

/* (1) Redux-persist?
  → ★★ persist(지속하다) the state of redux "SOTRE" to AsyncStorage on store changes,
  → ★★ and rehydrate(불러오다) the store with this saved state when the app launches.
  → redux-persist가 없으면 새로고침 시 initial state로 redux store가 자동 초기화가 된다. 
  → why? web(React JS application)에서는 redux-persist를 잘 사용하지 않기 때문이다. */

/* (2) Redux-thunk?
  → "action creators"가 "action"이 아닌 "function"을 return하도록 하는 미들웨어(middleware) */