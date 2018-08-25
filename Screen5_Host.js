import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';

var titlelocation = Dimensions.get('window').width * 0.33;
var barheight = Dimensions.get('window').height * 0.07;
var a = Dimensions.get('window').width * 0.75;
var b = Dimensions.get('window').height * 0.12;


export default class Settings extends React.Component {
  static navigationOptions = {
      title: 'Settings',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: barheight,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
  }

  save_settings() {
      this.props.navigation.navigate('HostMain');
      // Get settings parameters
  }

  render() {
    return (
      <View style = {styles.container_outer}>
        <View style = {{flexDirection: 'row', height: b, marginTop: 30, marginBottom: 30}}>
          <View style = {{flexDirection: 'column', width: a, marginLeft: 15}}>
            <Text style = {{fontSize: 22, color: '#FFFFFF', marginBottom: 10, fontWeight: 'bold'}}>Radius of interest</Text>
            <Text style = {{fontSize: 14, color: '#FFFFFF'}}>Radius from your location where</Text>
            <Text style = {{fontSize: 14, color: '#FFFFFF'}}>Spotify users can share data</Text>
          </View>
          <ScrollPicker
                  dataSource={[
                       '20',
                       '50',
                       '100',
                       '200',
                       '300',
                       '400',
                       '500',
                       '750',
                       '1000',
                       '1500',
                       '2000',
                  ]}
                  selectedIndex={1}
                  renderItem={(data, index, isSelected) => {
                      //
                  }}
                  onValueChange={(data, selectedIndex) => {
                      //
                  }}
                  wrapperHeight={80}
                  wrapperWidth={150}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={25}
                  fontSize={16}
                  align='top'
                  highlightColor={'#d8d8d8'}
                  highlightBorderWidth={1}
                  activeItemColor={'#222121'}
                  itemColor={'#B4B4B4'}
          /><Text style = {{color: '#FFFFFF'}}> m </Text>
        </View>
        <View style = {{flexDirection: 'row', height: b}}>
          <View style = {{flexDirection: 'column', width: a, marginLeft: 15 }}>
            <Text style = {{fontSize: 22, color: '#FFFFFF', marginBottom: 10, fontWeight: 'bold'}}>Top number of songs</Text>
            <Text style = {{fontSize: 14, color: '#FFFFFF'}}>Get the top __ number of most-played</Text>
            <Text style = {{fontSize: 14, color: '#FFFFFF'}}>songs from each Spotify user</Text>
          </View>
            <ScrollPicker
                  dataSource={[
                       '1',
                       '2',
                       '3',
                       '4',
                       '5',
                       '6',
                       '7',
                       '8',
                       '9',
                       '10',
                  ]}
                  selectedIndex={1}
                  renderItem={(data, index, isSelected) => {
                      //
                  }}
                  onValueChange={(data, selectedIndex) => {
                      //
                  }}
                  wrapperHeight={80}
                  wrapperWidth={20}
                  wrapperBackground={'#FFFFFF'}
                  itemHeight={25}
                  fontSize={16}
                  align='top'
                  highlightColor={'#d8d8d8'}
                  highlightBorderWidth={1}
                  activeItemColor={'#222121'}
                  itemColor={'#B4B4B4'}
          /><Text>      </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.save_settings()}>
            <Text style = {styles.text}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var Width = Dimensions.get('window').width * 0.30;
var Height = Dimensions.get('window').width * 0.15;

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  button: {
    width: Width,
    height: Height,
    marginTop: 50,
    marginLeft: Dimensions.get('window').width * 0.35,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.08,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});