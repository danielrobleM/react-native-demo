
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';


export default class HomeController extends Component<{}> {
  render() {
    return React.createElement(Text, {style: styles.description}, "Search for houses to buy!");
  }
}

const styles = StyleSheet.create({
  description: {
    textAlign: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:65
  }
});