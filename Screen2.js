import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button, WebView } from 'react-native';
import { NavigationActions } from 'react-navigation';

var UserLoggedIn = 0;
var titlelocation = Dimensions.get('window').width * 0.33;
var barheight = Dimensions.get('window').height * 0.07;

export default class Screen2 extends React.Component {
  static navigationOptions = {
      title: 'Login',
      headerLeft: (
        <Button
          onPress={() => this.props.navigation.navigate('ShareData')}
          title="Back"
        />
      ),
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
  }

  // If spotify log in status == 1,
  // UserLoggedIn = 1;
  // this.props.navigation.navigate('Select')}
}
