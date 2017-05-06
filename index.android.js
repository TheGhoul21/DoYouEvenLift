/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import MapView from 'react-native-maps'; 
export default class DoYouEvenLift extends Component {

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markers: []
    };
    var self = this;
    this.onRegionChange = this.onRegionChange.bind(this);

    navigator.geolocation.watchPosition((position) => {
      this.setState({ region: { latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0, longitudeDelta: 0 }});
    })
  }

  onRegionChange(region) {
    // handle region to show marks
    this.setState( { region });
  }

  render() {
    console.log(this.state.region);
    return (
      <View style={styles.container}>
       <MapView
       style={styles.map}
       onRegionChange={this.onRegionChange}
          region={this.state.region}
        />
        <TextInput value="mario" style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: { flex: 1, alignSelf: 'stretch' },
  input: { alignSelf: 'stretch'}
  
});

AppRegistry.registerComponent('DoYouEvenLift', () => DoYouEvenLift);
