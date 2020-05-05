import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './store';

import LogIn from './login';
import MainList from './main-list';
import Items from './item';

const Auth = createStackNavigator();
const MainListNav = createStackNavigator();

const Screens = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainListNav.Navigator>
          <MainListNav.Screen
            name="itemList"
            component={MainList}
            tittle="Item List"
          />
          <MainListNav.Screen
            name="itemDetails"
            component={Items}
            tittle="Details"
          />
        </MainListNav.Navigator>
        {/* <Auth.Navigator>
        <Auth.Screen name="Login" component={LogIn} />
      </Auth.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
};

export default Screens;
