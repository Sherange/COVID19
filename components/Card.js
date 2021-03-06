import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Badge} from 'react-native-elements';

const Card = props => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardHeader}>
        <Badge
          badgeStyle={{backgroundColor: props.color, borderColor: props.color}}
          status="success"
        />
      </View>
      <View style={styles.cardTileRaw}>
        <Text style={styles.titlelabel}>{props.title}</Text>
      </View>
      <View style={styles.cardValueRaw}>
        <Text style={[styles.label, {color: props.color}]}>{props.value}</Text>
      </View>
      <View style={styles.cardFooterRaw}>
        <Text style={styles.footerLabel}>{props.source}</Text>
        <Text style={styles.footerLabel}>{props.lastUpdate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 16,
    borderRadius: 8,
    backgroundColor: '#262626',
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cardTileRaw: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardValueRaw: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFooterRaw: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titlelabel: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'Cairo-Regular',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    fontFamily: 'Cairo-Regular',
  },
  footerLabel: {
    color: '#d9d9d9',
    fontSize: 12,
    fontFamily: 'Cairo-Regular',
  },
});

export default Card;
