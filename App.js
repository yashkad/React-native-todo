import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import Header from './src/components/header';
import Todo from './src/components/todo/';
import store from './src/myStore/todo-store/store';

const App = props => {
  return (
    <Provider store={store}>
      <Header />
      <Todo />
    </Provider>
  );
};

export default App;
