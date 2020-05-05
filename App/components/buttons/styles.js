import {StyleSheet, Dimensions} from 'react-native';

let primaryColor = '#4A63E7';
let secondaryColor = '#FFFFFF';
let redColor = '#FF5959';
let yellowColor = '#FBC985';
let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  buttonWrapper: {
    width: width,
    paddingRight: 30,
    paddingLeft: 30,
    margin: 10,
  },
  submitButton: {
    backgroundColor: primaryColor,
    borderRadius: 50,
    paddingVertical: 15,
    alignSelf: 'stretch',
  },
  cancelButton: {
    backgroundColor: redColor,
    borderRadius: 50,
    paddingVertical: 15,
    alignSelf: 'stretch',
  },
  submitButtonText: {
    color: secondaryColor,
    fontSize: 18,
    textAlign: 'center',
  },
  submitButtonReverse: {
    backgroundColor: secondaryColor,
    borderRadius: 50,
    paddingVertical: 15,
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: primaryColor,
  },
  submitButtonTextReverse: {
    color: primaryColor,
    fontSize: 18,
    textAlign: 'center',
  },
  bigBlueButton: {
    borderRadius: 10,
    backgroundColor: primaryColor,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bigRedButton: {
    borderRadius: 10,
    backgroundColor: redColor,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bigYellowButton: {
    borderRadius: 10,
    backgroundColor: yellowColor,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
  },
  bigButtonWrapper: {
    paddingBottom: 15,
  },
});

export default styles;
