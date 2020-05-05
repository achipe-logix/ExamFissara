import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';

const SubmitButton = (props) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        title={props.title}
        onPress={props.onPress}
        style={styles.submitButton}>
        <Text style={styles.submitButtonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const SubmitButtonReverse = (props) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        title={props.title}
        onPress={props.onPress}
        style={styles.submitButtonReverse}>
        <Text style={styles.submitButtonTextReverse}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const CancelButton = ({title, onPress}) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        title={title}
        onPress={onPress}
        style={styles.cancelButton}>
        <Text style={styles.submitButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ButtonComponents = {
  SubmitButton,
  SubmitButtonReverse,
  CancelButton,
};

export default ButtonComponents;
