import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import ButtonComponents from '../../components/buttons';
import setItemDetails from '../../actions/loadItems';
import {getAllEmp} from '../../utils/services/events';

import ItemBox from '../../components/item-box';

class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: [],
    };
  }

  async componentDidMount() {
    try {
      const payload = await getAllEmp();
      this.setState({
        employee: payload.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  _showDetails = (items) => () => {
    this.props.setItemDetails(items);
    this.props.navigation.navigate('itemDetails');
  };

  render() {
    console.log('PROPS', this.props);
    return (
      <ScrollView>
        {this.state.employee.map((emp) => {
          return (
            <View key={emp.id}>
              <ItemBox name={emp.employee_name} id={emp.id} />
              <ButtonComponents.SubmitButtonReverse
                title={'Open Details'}
                onPress={this._showDetails(emp)}
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setItemDetails: (payload) => dispatch(setItemDetails(payload)),
});

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MainList);
