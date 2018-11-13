import React, {Component} from 'react';
import {StyleSheet,Text,TextInput,View,Keyboard,Button,Alert} from 'react-native';

export default class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'Please type you text',
            password: '',
            textAreaVal : ''
        }
    }
    componentWillMount(){
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',()=>{
            this.setState(()=>{
                return {username: 'Keyboard is shown'}
            });
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide',()=>{
            this.setState(()=>{
                return {username: 'Keyboard is hidden'}
            });
        });
    }
    componentWillUnmount(){
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    onPressLoginButton = ()=>{
        Alert.alert("You pressed Login button");
    }
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome</Text>

            <TextInput style={styles.textInput}
                keyboardType = 'email-address'
                placeholder = 'Username'
                placeholderTextColor = 'blue'
                autoFocus = {true}
                onChangeText = {
                    (text) => {
                        this.setState(
                            (previousState)=>{
                                return{
                                    username: text
                                }
                            }
                        );
                    }
                }
            ></TextInput>
            <Text style={styles.values}>Username Value : {this.state.username}</Text>
            <TextInput style={styles.textInput}
                keyboardType = 'default'
                secureTextEntry = {true}
                placeholder = 'Password'
                placeholderTextColor = 'blue'
                onChangeText = {
                    (text) => {
                        this.setState(()=>{
                                return{
                                    password: text
                                }
                            }
                        );
                    }
                }
            ></TextInput>
            
            <Text style={styles.values}>Password Value : {this.state.password}</Text>
            <View style={styles.loginBtn}>
            <Button  
                    title="Log In"
                    onPress = {this.onPressLoginButton}
            ></Button>
            </View>
            <View style={styles.loginBtn}>
            <Button  
                    title="Sign Up"
                    onPress = {()=>{
                        Alert.alert("You pressed 'Sign Up' button");
                    }}
            ></Button>
            </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:'cyan'     
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      
    },
    values: {
        fontSize: 10,
        textAlign: 'left',
        margin: 20,
      },
    textInput: {
      height:40,
      padding:10,
      marginLeft:20,
      marginTop:20,
      marginRight:20,
      color: 'red',
      borderColor: 'gray',
      borderWidth:1
    },
    textArea: {
      height:100,
      padding:10,
      marginLeft:20,
      marginTop:10,
      marginRight:20,
      color: 'red',
      borderColor: 'gray',
      borderWidth:1
    },
    loginBtn: {
        margin:20
        
    }
  });
  