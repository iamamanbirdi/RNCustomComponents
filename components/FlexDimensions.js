import React, {Component} from 'react';
import {StyleSheet,Text,View} from 'react-native';



export default class FlexDimensions extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.redview}>
            <Text>hello</Text>
            </View>
            <View style={styles.greenview}>
            <Text>hello</Text>
            </View>
            <View style={styles.blueview}>
            <Text>hello</Text>
            </View>
            </View>
      );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'row',
    alignItems: 'center',
    backgroundColor: 'cyan'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  redview: {
    flex:50,
    width:100,
    backgroundColor: 'red'
  },
  greenview: {
    flex:50,
    width:100,
    backgroundColor: 'green'
  },
  blueview: {
    flex:10,
    width:100,
    backgroundColor: 'blue',
    marginBottom:0
  }
});
