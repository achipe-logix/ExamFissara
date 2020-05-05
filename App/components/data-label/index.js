import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const DataLabel = (props) => {
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.label}>{props.label} : </Text>
      <Text style={styles.data}>{props.data}</Text>
    </View>
  );
};

export default DataLabel;
