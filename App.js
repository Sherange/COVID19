/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Home from './screens/Home';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({duration: 250});
  }, []);

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" backgroundColor={'#000000'} />
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
