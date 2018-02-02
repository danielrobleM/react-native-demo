
'use strict';

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

import List from './components/listview'

export default class HomeController extends Component<{}> {
  render() {
    return (
      <View>
        <Text style={styles.description}>
          Search for houses to buy! (Again!)
        </Text>
        <List/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  description: {
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:65
  }
});