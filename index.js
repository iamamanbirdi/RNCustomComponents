/** @format */

import {AppRegistry} from 'react-native';
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
 
const App = createStackNavigator({
    MainScreen: {
        screen : MainComponent,
        navigationOptions: {
            headerTitle : 'Welcome to Numerology !'
        }
    },
    FirstScreen: {
        screen : FirstComponent,
        navigationOptions: {
            headerTitle : 'Maha Dasha'
        }
    },
    SecondScreen: {
        screen : SecondComponent,
        navigationOptions: {
            headerTitle : 'Varsh Fal'
        }
    }
});
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);