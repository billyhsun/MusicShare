import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

var titlelocation = Dimensions.get('window').width * 0.33;
var barheight = Dimensions.get('window').height * 0.07;

export default class Screen1 extends React.Component {
  static navigationOptions = {
      title: 'Home',
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
      <View style = {styles.container}>
        <Text style = {styles.text1}>Share Data?</Text>
        <Text style = {styles.text2}>Your location and Spotify account data</Text>
        <Text style = {styles.text2}>will be seen by nearby Spotify hosts</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('UserConfirm')}>
            <Text style = {styles.text3}>Yes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var Width = Dimensions.get('window').width * 0.33;
var Height = Dimensions.get('window').width * 0.2;

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
    marginTop: 50,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    backgroundColor: '#FFFFFF',
    marginBottom: 25,
  },
  text1: {
    fontSize: 35,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  text2: {
    marginTop: 10,
    fontSize: 20,
    color: '#FFFFFF',
  },
  text3: {
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
  }
});