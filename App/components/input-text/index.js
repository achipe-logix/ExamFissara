import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';

const InputText = ({placeHolder, value, onChange}) => {
  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        value={value}
        placeholderTextColor="#AFC0D2"
        onChangeText={onChange}
      />
    </View>
  );
};

const PasswordInput = ({
  placeHolder,
  value,
  onChange,
  isSecured,
  iconName,
  onPress,
}) => {
  return (
    <View style={styles.boxSpacing}>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholderTextColor="#AFC0D2"
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
          secureTextEntry={isSecured}
        />
      </View>
    </View>
  );
};

const InputBoxComponents = {
  InputText,
  PasswordInput,
};

export default InputBoxComponents;
