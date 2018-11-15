/** @format */

import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
//import App from './App';
//import Robot from './components/Robot';
//import MultipleGreetings from './components/MultipleGreetings';
//import TextBlink from './components/TextBlink';
//import FlexDimensions from './components/FlexDimensions';
//import LoginPage from './components/LoginPage';
//import AstroLogy from './components/AstroLogy';
import { createStackNavigator } from 'react-navigation';
// components
import MainComponent from './components/MainComponent';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import Splash from './components/Splash'
 

const App = createStackNavigator({
    MainScreen: {
        screen : MainComponent,
        navigationOptions: {
           header:null
        }
    },
    FirstScreen: {
        screen : FirstComponent,
        navigationOptions: {
            headerTitle : 'Maha Dasha & Varsh Fal',
            headerStyle: {
                backgroundColor: '#dee6f7',
                color:'#000'
            }
        }
    },
    SecondScreen: {
        screen : SecondComponent,
        navigationOptions: {
            headerTitle : 'Charts'
        }
    }
});

class SplashDecider extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        console.log('Start doing some tasks for about 3 seconds')
        setTimeout(()=>{
            console.log('Done some tasks for about 3 seconds')
            this.setState({ currentScreen: 'App' })
        }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <App />
        return mainScreen
    }
}



import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);