import {StyleSheet, Dimensions} from 'react-native';

let primaryColor = '#F9F9F9';
let secondaryColor = '#1E1D4D';
let fadeColor = '#AFC0D2';
let width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: primaryColor,
    margin: 30,
    borderRadius: 10,
    shadowColor: fadeColor,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#49494a',
    textAlign: 'center',
    marginVertical: 10,
  },
  line: {
    borderBottomColor: fadeColor,
    borderBottomWidth: 1,
  },

  detailsWrapper: {
    margin: 10,
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
