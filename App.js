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
  StackNavigator,
} from 'react-navigation';

//import Splash_Screen from './Splash_Screen';
import MainPage from './MainPage';
//import MenuPage from './MenuPage';
//import AboutPage from './About';

const App = StackNavigator(
    {
        //InitScreen: { screen: Splash_Screen },
        Home: { screen: MainPage },
        //Menu: { screen: MenuPage },
        //About: { screen: AboutPage },
    }, {
        initialRouteName: "Menu" 
    }
);
export default App;
