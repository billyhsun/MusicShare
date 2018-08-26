import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button, WebView } from 'react-native';
import { NavigationActions } from 'react-navigation';

var UserLoggedIn = 0;
var titlelocation = Dimensions.get('window').width * 0.33;
var barheight = Dimensions.get('window').height * 0.07;

function getMoviesFromApiAsync() {
  return fetch('https://limitless-basin-60883.herokuapp.com/users')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

var data = getMoviesFromApiAsync();

export default class Screen2 extends React.Component {
  static navigationOptions = {
      title: 'Login',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: barheight,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
  };

  render() {
      return (
          <WebView
            source={{uri: 'https://accounts.spotify.com/en/login?utm_source=webplayer&utm_medium=&utm_campaign=&continue=https:%2F%2Fopen.spotify.com%2Fartist%2F7mz6tB1Og2yzxP74wxDVrn'}}
            style={{marginTop: 0}}
          />
      );
  };

// https://accounts.spotify.com/en/login?utm_source=webplayer&utm_medium=&utm_campaign=&continue=https:%2F%2Fopen.spotify.com%2Fartist%2F7mz6tB1Og2yzxP74wxDVrn

// https://limitless-basin-60883.herokuapp.com

  
  
}

var Width = Dimensions.get('window').width * 0.25;
var Height = Dimensions.get('window').width * 0.10;

const styles = StyleSheet.create({
  button: {
    width: Width,
    height: Height,
    marginTop: 50,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text3: {
    fontSize: 15,
    color: '#000000',
    fontWeight: 'bold',
  }
});