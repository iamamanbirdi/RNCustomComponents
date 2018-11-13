import React, {Component} from 'react';
import {styles} from './style';

import {Text,TextInput,View,Keyboard,Alert,Image,ImageBackground} from 'react-native';
import Button from 'react-native-button';


export default class FirstComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View style={styles.container}>
            
            <Text style={[styles.welcome,{color:'tomato'}]}>screen 1</Text>
            
            </View>
        );
    }
}