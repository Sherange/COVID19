/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView} />
      <Home />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#000000',
  },
});

export default App;
