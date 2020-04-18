/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  View,
  Text,
  ScrollView,
} from 'react-native';
import Card from './components/Card';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView} />
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: '#262626',
        }}>
        <Text style={{fontSize: 18, color: '#FFFFFF', fontWeight: '600'}}>
          Total Cases - Wrold Wide
        </Text>
      </View>
      <ScrollView style={styles.view}>
        <Card title={'Total Confirmed'} value={'256,000'} color={'#58D68D'} />
        <Card title={'Total Active'} value={'256,000'} color={'#F39C12'} />
        <Card title={'Total Deaths'} value={'256,000'} color={'#E74C3C'} />
        <Card title={'Total Recoverd'} value={'256,000'} color={'#3498DB'} />
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  view: {
    // flex: 1,
    backgroundColor: '#000000',
  },
  safeAreaView: {
    backgroundColor: '#000000',
  },
});

export default App;
