
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text
} from 'react-native';


export default class FlatListBasics extends Component {
    render (){
        return (        
            <FlatList 
                data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'a1'}, {key: 'b2'},{key: 'c3'}]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        )
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});