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
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class airmap extends Component {
  constructor (props) {
    super (props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: 122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    }
  }

  onRegionChange(region) {
    this.setState({region})
  }

  onMarkerSelect (e) {
    e.target.showCallout()
  }

  render() {
    return (
      <MapView
         style={{flex: 1}}
         region={this.state.region}
         showsUserLocation={true}
         followsUserLocation={true}
         loadingEnabled={true}
         onRegionChange={this.onRegionChange.bind(this)}
       >
         <MapView.Marker
             coordinate={{latitude: 33, longitude: 113}}
             image={require('./assets/pin.png')}
        />
      </MapView>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('airmap', () => airmap);
