import {StyleSheet, Dimensions} from 'react-native';

let primaryColor = '#303030';
let secondaryColor = '#858585';
let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textWrapper: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#303030',
  },
  data: {
    fontSize: 17,
    color: secondaryColor,
  },
});

export default styles;
