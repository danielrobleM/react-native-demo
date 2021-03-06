/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import HomeController from './HomeController';
import FlatListBasics from './components/FlatListBasics';

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Home',
          component: HomeController,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1
  }
});
