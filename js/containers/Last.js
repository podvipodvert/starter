/**
 * Created by andrew on 13.04.17.
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
    StatusBar
} from 'react-native';

import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'



class Last extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <View>
                <View >
                    <TouchableOpacity style={[styles.brick_button, styles.next_button]} onPress = {()=> Actions.pop()}>
                        <Text style={styles.login_button_text}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    login_button_text: {
        color: '#fff'
    },
    back_button: {
        marginTop: 40
    },
    contentContainerStyle: {
        flex: 1,
    },
    email_input: {
        textAlign: "center",
        height: 40 * 1.2,
        fontSize: 14 * 1.2,
        marginBottom: 5,
        alignSelf: 'stretch'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#08a0d6'
    },
    next_button: {
        height: 40 * 1.2,
        backgroundColor: '#01a4dd',
        alignSelf: 'stretch',
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 3,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
    login_email: {
        borderColor: '#8ec4ce',
    },
    brick_button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        marginTop: 5
    }
});

function mapStateToProps(store) {
    const { email, password} = store.main;
    return {
        email,
        password
    }
}

export default connect(mapStateToProps)(Last)