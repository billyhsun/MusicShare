import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

var titlelocation = Dimensions.get('window').width * 0.33;
var barheight = Dimensions.get('window').height * 0.07;
var a = Dimensions.get('window').width * 0.30;
var b = Dimensions.get('window').height * 0.12;

var songs = [{'title':'God\'s Plan', 'artist':'Drake', 'album':'Scorpion', 'released':'Jan 2018', 'in_fav':34},
             {'title':'Billie Jean', 'artist':'Michael Jackson', 'album':'Thriller', 'released':'Jan 1983', 'in_fav':21},
             {},
             {},
             {},];

export default class Screen3 extends React.Component {
  static navigationOptions = {
      title: 'Manage',
      headerStyle: {
          backgroundColor: '#F3F3F3',
          height: barheight,
      },
      headerTintColor: 'black',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
  };

  play_all() {




  };

  play_song(songname) {




  };

  render() {
    var data = [["Songname", "Artist", "Most Popular", "Release Date", "Random"]];
    return (
      <ScrollView style = {styles.container_outer}>
        <View style = {styles.topbar}>
          <TouchableOpacity style = {styles.button}><Text style = {{fontWeight: 'bold'}}>Play All</Text></TouchableOpacity>
          <Text>      Sort by:</Text>
          <DropdownMenu
              style={{flex: 0}}
              bgColor={'white'}
              tintColor={'#666666'}
              activityTintColor={'green'}
              height = {Height}
              width = {a}
              // arrowImg={}      
              // checkImage={}   
              // optionTextStyle={{color: '#333333'}}
              // titleStyle={{color: '#333333'}} 
              // maxHeight={300} 
              handler={(selection, row) => this.setState({text: data[selection][row]})}
              data={data}
          />
          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('HostSettings')}>
              <Text style = {styles.text3}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.songlist}>
          <View style = {styles.songlist1}>
            <Text style = {styles.text1}>{songs[0].title}</Text>
            <Text style = {styles.text2}>Artist: {songs[0].artist}</Text>
            <Text style = {styles.text2}>Album: {songs[0].album}</Text>
            <Text style = {styles.text2}>Released: {songs[0].released}</Text>
          </View>
          <View style = {styles.songlist2}>
            <Text style = {styles.text2}>{songs[0].in_fav}</Text>
            <TouchableOpacity style = {styles.button2} onPress={() => this.play_song(songs[0].title)}><Text>Play</Text></TouchableOpacity>
          </View>
        </View>
        <View style = {styles.songlist}>
          <View style = {styles.songlist1}>
            <Text style = {styles.text1}>{songs[1].title}</Text>
            <Text style = {styles.text2}>Artist: {songs[1].artist}</Text>
            <Text style = {styles.text2}>Album: {songs[1].album}</Text>
            <Text style = {styles.text2}>Released: {songs[1].released}</Text>
          </View>
          <View style = {styles.songlist2}>
            <Text style = {styles.text2}>{songs[1].in_fav}</Text>
            <TouchableOpacity style = {styles.button2} onPress={() => this.play_song(songs[1].title)}><Text>Play</Text></TouchableOpacity>
          </View>
        </View>
        <View style = {styles.songlist}>
          <View style = {styles.songlist1}>
            <Text style = {styles.text1}>{songs[2].title}</Text>
            <Text style = {styles.text2}>Artist: {songs[2].artist}</Text>
            <Text style = {styles.text2}>Album: {songs[2].album}</Text>
            <Text style = {styles.text2}>Released: {songs[2].released}</Text>
          </View>
          <View style = {styles.songlist2}>
            <Text style = {styles.text2}>{songs[2].in_fav}</Text>
            <TouchableOpacity style = {styles.button2} onPress={() => this.play_song(songs[2].title)}><Text>Play</Text></TouchableOpacity>
          </View>
        </View>
        <View style = {styles.songlist}>
          <View style = {styles.songlist1}>
            <Text style = {styles.text1}>{songs[3].title}</Text>
            <Text style = {styles.text2}>Artist: {songs[3].artist}</Text>
            <Text style = {styles.text2}>Album: {songs[3].album}</Text>
            <Text style = {styles.text2}>Released: {songs[3].released}</Text>
          </View>
          <View style = {styles.songlist2}>
            <Text style = {styles.text2}>{songs[3].in_fav}</Text>
            <TouchableOpacity style = {styles.button2} onPress={() => this.play_song(songs[3].title)}><Text>Play</Text></TouchableOpacity>
          </View>
        </View>
        <View style = {styles.songlist}>
          <View style = {styles.songlist1}>
            <Text style = {styles.text1}>{songs[4].title}</Text>
            <Text style = {styles.text2}>Artist: {songs[4].artist}</Text>
            <Text style = {styles.text2}>Album: {songs[4].album}</Text>
            <Text style = {styles.text2}>Released: {songs[4].released}</Text>
          </View>
          <View style = {styles.songlist2}>
            <Text style = {styles.text2}>{songs[4].in_fav}</Text>
            <TouchableOpacity style = {styles.button2} onPress={() => this.play_song(songs[4].title)}><Text>Play</Text></TouchableOpacity>
          </View>
        </View>
        <View style = {styles.songlist}>
        </View>
        <View style = {styles.songlist}>
        </View>
        <View style = {styles.songlist}>
        </View>
        <View style = {styles.songlist}>
        </View>
        <View style = {styles.songlist}>
        </View>
      </ScrollView>
    );
  }
}

var Width = Dimensions.get('window').width * 0.22;
var Height = Dimensions.get('window').width * 0.13;
var Height2 = Dimensions.get('window').height * 0.18;

var W1 = Dimensions.get('window').width * 0.73;
var W2 = Dimensions.get('window').width * 0.20;

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  topbar: {
    zIndex: 2,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: Height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: Width,
    height: Height,
    backgroundColor: '#E6E6E6',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button2: {
    width: 50,
    height: 30,
    backgroundColor: '#E6E6E6',
    borderRadius: 3,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  songlist: {
    zIndex: 1,
    height: Height2,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    flexDirection: 'row',
  },
  songlist1: {
    flexDirection: 'column', 
    marginLeft: 15,
    width: W1,
  },
  songlist2: {
    flexDirection: 'column', 
    marginLeft: 15,
    width: W2,   
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  text2: {
    fontSize: 14,
    marginBottom: 3,
    color: '#F3F3F3',
  },
  text3: {
    fontSize: 15,
  },
});