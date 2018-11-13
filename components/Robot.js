import React, {Component} from 'react';
import {Image} from 'react-native';


export default class Robot extends Component {
    render() {
      return (
        <Image source={ {"uri":"https://upload.wikimedia.org/wikipedia/commons/0/05/HONDA_ASIMO.jpg"} }
        style={ {width:200,height:300}}
        
        ></Image>
      );
    }
  }