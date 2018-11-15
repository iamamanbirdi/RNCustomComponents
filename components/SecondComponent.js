import React, {Component} from 'react';
import {styles} from './style';

import {Text,TextInput,View,Keyboard,Alert,Image,ImageBackground,FlatList} from "react-native";
import DatePicker from "react-native-datepicker";
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from "react-native-button";


export default class SecondComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View style={styles.container}>
            
            <Text style={[styles.welcome,{color:'tomato'}]}>Coming Soon !</Text>
            
            </View>
        );
    }
}