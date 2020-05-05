import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import DataLabel from '../../components/data-label';

import {connect} from 'react-redux';

const Items = (props) => {
  return (
    <View style={styles.itemWrapper}>
      <Text style={styles.title}>Employee Details</Text>
      <View style={styles.line} />
      <View style={styles.detailsWrapper}>
        <DataLabel label="Employee ID" data={props.itemDetails.id} />
        <DataLabel label="Full name" data={props.itemDetails.employee_name} />
        <DataLabel label="Salary" data={props.itemDetails.employee_salary} />
        <DataLabel label="Age" data={props.itemDetails.employee_age} />
      </View>
    </View>
  );
};

const mapStateToProps = ({itemDetails}) => ({
  itemDetails,
});

export default connect(mapStateToProps)(Items);
