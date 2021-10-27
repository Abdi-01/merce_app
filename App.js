import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/Navigations/StackNavigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducers from './src/redux/reducers';
import ReduxThunk from 'redux-thunk';

const globalStore = createStore(Reducers, {}, applyMiddleware(ReduxThunk));

const App = () => {

  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App