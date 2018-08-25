'use strict';

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';

//import Splash_Screen from './Splash_Screen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4User from './Screen4_User';
import Screen4Host from './Screen4_Host';
import Settings from './Screen5_Host';


const App = createStackNavigator(
    {
        //InitScreen: { screen: Splash_Screen },
        SpotifyLogin: { screen: Screen2 },
        Select: { screen: Screen3 },
        UserHome: { screen: Screen1 },
        UserConfirm: { screen: Screen4User },
        HostMain: { screen: Screen4Host },
        HostSettings: { screen: Settings },
    }, {
        initialRouteName: "HostSettings" 
    }
);
export default App;
