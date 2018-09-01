import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';


var titlelocation = Dimensions.get('window').width * 0.33;
var barheight = Dimensions.get('window').height * 0.07;
var host_coords = { lat: 43.6686301, lng: -79.3953986 }; // TopHat Coords

// Get location
var citymap;
var coordinates = [43.6686464, -79.3953464];

function getLocation() {
    return navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    coordinates = [position.coords.latitude, position.coords.longitude];
    return coordinates;
}

// checkPoint is the spotify user
// centerPoint is the spotify host
function arePointsNear(checkPoint, centerPoint, km) {
    var ky = 40000 / 360;
    var kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
    var dx = Math.abs(centerPoint.lng - checkPoint[1]) * kx;
    var dy = Math.abs(centerPoint.lat - checkPoint[0]) * ky;
    return (Math.sqrt(dx * dx + dy * dy) <= km);
};

var text = "There is currently NO Spotify host nearby";
var a = getLocation();
var user_coords = coordinates;

var in_range = arePointsNear(user_coords, host_coords, 1);

if (in_range == 1) {
    text = "There is a host nearby!";
}

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

  ShareData () {
      // Get User Data
      this.props.navigation.navigate('UserConfirm');
      var in_range = arePointsNear(user_coords, host_coords, 1);
      if (in_range == 1) {
        // Send User Data to Host
      }
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.text2}>{text}</Text>
        <Text style = {styles.text2}></Text>
        <Text style = {styles.text1}>Share Data?</Text>
        <Text style = {styles.text2}>Your location and Spotify account data</Text>
        <Text style = {styles.text2}>will be seen by nearby Spotify hosts</Text>
        <TouchableOpacity style={styles.button} onPress={() => this.ShareData()}>
            <Text style = {styles.text3}>Yes</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
/*
for ( ; ; ) {
    user_coords = getLocation();
    if (in_range == 1) {
        text = "There is a host nearby!";
    }
    else {
        text = "There is currently NO Spotify host nearby";
    }
}; */

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
    marginTop: 30,
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