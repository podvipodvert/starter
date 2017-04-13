/**
 * Created by andrew on 11.04.17.
 */
'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    AppState,
    Navigator,
    TouchableHighlight,
    TouchableOpacity,
    Image,
    Linking,
    NetInfo,
    Alert,
    StatusBar
} from 'react-native';

import { connect } from 'react-redux';

var Platform = require('Platform');


class Main extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <View><Text>TEXT</Text></View>
        )
    }
}


export default Main;