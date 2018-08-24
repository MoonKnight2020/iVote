import React from 'react';

import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Signup from './Signup';
import Address from './Address';
import MainPage from './MainPage';
import Representatives from "./Representatives";

const Application = createStackNavigator({
  Home: {screen: Login },
  Signup: {screen: Signup},
  Address: {screen: Address},
  MainPage: {screen: MainPage},
  Representatives: {screen: Representatives}
  }, {
      headerMode: 'none'
});

export default class App extends React.Component {
  render() {
    return (
      <Application />
    );
  }
}
