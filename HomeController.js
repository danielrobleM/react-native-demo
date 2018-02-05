
'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import FlatListBasics from './components/FlatListBasics';

export default class HomeController extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy! (Again!)
        </Text>
        <FlatListBasics />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:65
  }, container: {
    flex: 1,
    backgroundColor: 'white',
  }
});