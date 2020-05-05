import {StyleSheet, Dimensions} from 'react-native';

let primaryColor = '#4A63E7';
let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  boxWrapper: {
    margin: 20,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 17,
    color: primaryColor,
  },
});

export default styles;
