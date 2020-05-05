import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const ItemBox = (props) => {
  return (
    <View style={styles.boxWrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>Employee ID : </Text>
        <Text style={styles.data}> {props.id}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.label}>Full name : </Text>
        <Text style={styles.data}>{props.name}</Text>
      </View>
    </View>
  );
};

export default ItemBox;
