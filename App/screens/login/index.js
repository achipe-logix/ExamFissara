import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';

import InputBoxComponents from '../../components/input-text';
import ButtonComponents from '../../components/buttons';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      password: '',
      showPassword: true,
      iconPassword: 'eye',
    };
  }

  _onPressLogin = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <InputBoxComponents.InputText
            placeHolder="Username"
            onChange={(mobileNumber) => this.setState({mobileNumber})}
          />
          <InputBoxComponents.PasswordInput
            placeHolder="Password"
            onChange={(password) => this.setState({password})}
            isSecured={this.state.showPassword}
            iconName={this.state.iconPassword}
            onPress={this._showPassword}
          />
        </View>

        <View style={styles.footer}>
          <ButtonComponents.SubmitButton
            onPress={this._onPressLogin}
            title="LOG IN"
          />
        </View>
      </View>
    );
  }
}

export default LogIn;
