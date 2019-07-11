import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/configureStore';
import RootContainer from './components/RootContainer';

const { persistor, store } = configureStore();

class App extends React.Component {
  render() {
    console.log(store.getState(), '경우에 따라서 rehydrated가 O, X 모두 가능(async)');
    return(
      <Provider store={store}>
        <PersistGate loading={<View style={{flex: 1, backgroundColor: 'blue'}}/>} persistor={persistor}>
          {console.log(store.getState(), '처음에 바로 store.getState()를 호출')}
          {console.log(setTimeout(function () {console.log(store.getState(), '5초후에 기록되는 store.getState()');}, 5000), 'setTimeout() 발동')}
          <RootContainer/>
        </PersistGate>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App; 
