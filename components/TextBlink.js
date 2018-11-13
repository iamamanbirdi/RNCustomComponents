import React, {Component} from 'react';
import {Text,View} from 'react-native';


class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {
            key1:"value1",
            key2:"value2",
            showText:true
        };
        var taskToDo = () => {
             this.setState(previousState => {
                return{
                    showText: !previousState.showText 
                }
             });
        }
        const TimeToBlink = 1000;   
        setInterval(taskToDo,TimeToBlink);
    }


    render() {
        let textToDisplay = this.state.showText ? this.props.inputText : "Birdi";
      return (
        <Text>Hello {textToDisplay}, How are you?</Text>
      );
    }
}


export default class TextBlink extends Component {
    render() {
      return (
          <View>
        <Blink inputText="Aman"></Blink>
        
        </View>
      );
    }
}