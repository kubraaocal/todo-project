import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from './src/pages/Navigaion';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
