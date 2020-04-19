import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import Card from '../components/Card';
const Home = () => {
  const [totalConfrimed, setConfirmed] = useState(0);
  const [totalActive, setActive] = useState(0);
  const [totalDaths, setDeaths] = useState(0);
  const [totalRecoverd, setRecoverd] = useState(0);
  const [source, setSource] = useState('https://www.hpb.health.gov.lk');
  const [lastUpdate, setUpdate] = useState('');

  useEffect(() => {
    fetchData();
    return () => {
      setConfirmed(0);
    };
  }, []);

  const fetchData = async () => {
    await axios
      .get('https://www.hpb.health.gov.lk/api/get-current-statistical')
      .then(response => {
        if (response && response.data.success) {
          setConfirmed(response.data.data.local_total_cases);
          setActive(response.data.data.local_active_cases);
          setDeaths(response.data.data.local_deaths);
          setRecoverd(response.data.data.local_recovered);
          setSource('https://www.hpb.health.gov.lk');
          setUpdate(response.data.data.update_date_time);
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  return (
    <ScrollView style={styles.view}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>COVID19 Total Cases - Local</Text>
      </View>
      <Card
        title={'Total Confirmed'}
        value={totalConfrimed}
        source={source}
        lastUpdate={lastUpdate}
        color={'#58D68D'}
      />
      <Card
        title={'Total Active'}
        value={totalActive}
        source={source}
        lastUpdate={lastUpdate}
        color={'#F39C12'}
      />
      <Card
        title={'Total Deaths'}
        value={totalDaths}
        source={source}
        lastUpdate={lastUpdate}
        color={'#E74C3C'}
      />
      <Card
        title={'Total Recoverd'}
        value={totalRecoverd}
        source={source}
        lastUpdate={lastUpdate}
        color={'#3498DB'}
      />
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
