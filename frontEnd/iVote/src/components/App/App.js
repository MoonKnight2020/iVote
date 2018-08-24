import React from 'react';

import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import Signup from './Signup';
import Address from './Address';
import MainPage from './MainPage';
import Elections from './Elections';
import Representatives from './Representatives';
import RepInfo from './RepInfo';

const Application = createStackNavigator({
  Home: {screen: Login },
  Signup: {screen: Signup},
  Address: {screen: Address},
  MainPage: {screen: MainPage},
  Elections: {screen: Elections},
  Representatives: {screen: Representatives},
  RepInfo: {screen: RepInfo}

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
