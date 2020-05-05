import {StyleSheet, Dimensions} from 'react-native';

let primaryColor = '#F9F9F9';
let secondaryColor = '#1E1D4D';
let fadeColor = '#AFC0D2';
let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  inputWrapper: {
    display: 'flex',
    width: width,
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 120,
  },
  footer: {
    paddingBottom: 30,
  },
});

export default styles;
