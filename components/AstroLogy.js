import React, {Component} from 'react';
import {StyleSheet,Text,TextInput,View,Keyboard,Button,Alert,Image,ImageBackground} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class AstroLogy extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'Please type you text',
            password: '',
            textAreaVal : ''
        }
    }
    render() {
        const resizeMode = 'contain';
        return (
            <View style={styles.container}>
            <ImageBackground source={require('./space.png')}
                  style={styles.backgroundImage}>
                    
<Text style={styles.welcome}>Welcome Astrologer !</Text>


<View style={styles.textInput}>
<DatePicker
style={{width: 250}}
date={this.state.date}
mode="date"
placeholder="Select your DOB"
format="DD-MM-YYYY"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
customStyles={{
dateIcon: {
position: 'relative',
left: 0,
top: 0,
marginLeft: 0
},
dateInput: {
marginLeft:0
}
// ... You can check the source to find the other keys.
}}
onDateChange={(date) => {this.setState({date: date})}}
/>
</View>
  <View style={styles.gridContainer}>
  <Grid>
       <Col>
          <Row style={{backgroundColor:'cyan',justifyContent:'center'}}>
              <Text>1</Text>
          </Row>
          <Row style={{backgroundColor:'pink',justifyContent:'center'}}>
              <Text>2</Text>
          </Row>
          <Row style={{backgroundColor:'lightgreen',justifyContent:'center'}}>
              <Text>3</Text>
          </Row>
      </Col>
      <Col>
          <Row style={{backgroundColor:'gray',justifyContent:'center'}}>
              <Text>4</Text>
          </Row>
          <Row style={{backgroundColor:'lightblue',justifyContent:'center'}}>
              <Text>5</Text>
          </Row>
          <Row style={{backgroundColor:'yellow',justifyContent:'center'}}>
              <Text>6</Text>
          </Row>
      </Col>
      <Col>
          <Row style={{backgroundColor:'magenta',justifyContent:'center'}}>
              <Text>7</Text>
          </Row>
          <Row style={{backgroundColor:'cyan',justifyContent:'center'}}>
              <Text>8</Text>
          </Row>
          <Row style={{backgroundColor:'pink',justifyContent:'center'}}>
              <Text>9</Text>
          </Row>
      </Col>
  </Grid>

  </View>

         </ImageBackground>
         </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:'#fff'     
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 30,
      color:'#fff'
      
    },
    values: {
        fontSize: 10,
        textAlign: 'left',
        margin: 20,
      },
    textInput: {
      height:40,
      marginLeft:60,
      marginTop:20,
      marginRight:20,
      color: 'red',
      
    },
    gridContainer: {
        marginLeft:40,
      marginTop:50,
      marginRight:40,
      borderColor: 'gray',
      borderWidth:1,
      flex:0.5,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

  });

