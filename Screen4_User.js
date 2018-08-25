import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

var titlelocation = Dimensions.get('window').width * 0.33;
var barheight = Dimensions.get('window').height * 0.07;

// SHARE DATA TO USER

var DataShared = 1;
var buttonText = 'Stop Sharing Data';
var FontColor = '#FF0000';

// ADD MORE ACTIONS
function UnshareData() {
    if (DataShared == 1) {
        DataShared = 0;
        buttonText = 'Share Data';
        FontColor = '#00FF00';
    }
    else {
        DataShared = 1;
        buttonText = 'Stop Sharing Data';
        FontColor = '#FF0000';
    } 
};

export default class Screen4User extends React.Component {
  static navigationOptions = {
      title: 'Done!',
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
      <View style={styles.container}>
        <Text style={styles.text1}>{"\u2713"}</Text>
        <Text style={styles.text2}>Your data has been shared</Text>
        <Text style={styles.text2}>Enjoy your music experience!</Text>
        <TouchableOpacity style={styles.button} onPress={() => UnshareData()}>
            <Text style = {styles.text3}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var Width = Dimensions.get('window').width * 0.50;
var Height = Dimensions.get('window').width * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: Width,
    height: Height,
    marginTop: 70,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 100,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#00CC00',
  },
  text2: {
    marginTop: 15,
    fontSize: 20,
    color: '#FFFFFF',
  },
  text3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: FontColor,
  },
});