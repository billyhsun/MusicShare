import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';


var titlelocation = Dimensions.get('window').width * 0.33;
var barheight = Dimensions.get('window').height * 0.07;

export default class Screen3 extends React.Component {
  static navigationOptions = {
      title: 'Select',
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
        <Text style = {styles.text1}>Are you a host?</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('HostMain')}>
            <Text style = {styles.text2}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('UserHome')}>
            <Text style = {styles.text3}>No</Text>
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
    marginBottom: 25,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 35,
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#006600',
  },
  text3: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FF0000',
  },
});