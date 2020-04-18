import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Card from '../components/Card';
const Home = () => {
  return (
    <ScrollView style={styles.view}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>COVID19 Total Cases - Local</Text>
      </View>
      <Card title={'Total Confirmed'} value={'256,000'} color={'#58D68D'} />
      <Card title={'Total Active'} value={'256,000'} color={'#F39C12'} />
      <Card title={'Total Deaths'} value={'256,000'} color={'#E74C3C'} />
      <Card title={'Total Recoverd'} value={'256,000'} color={'#3498DB'} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#000000',
  },
  safeAreaView: {
    backgroundColor: '#000000',
  },
  headerView: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#000000',
  },
  headerTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Cairo-Regular',
  },
});

export default Home;
