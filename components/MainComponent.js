import React, { Component } from "react";
import { styles } from "./style";

import {
  Text,TextInput,View,Keyboard,Alert,Image,ImageBackground,FlatList
} from "react-native";
import DatePicker from "react-native-datepicker";
import Button from "react-native-button";
import Moment from 'moment';
import { FirstScreen, SecondScreen } from "./ScreenNames";
let alphabetMatrix = {
    'a' :1 , 'b' :2 , 'c' :3 , 'd' :4 , 'e' :5 , 'f' :6 , 'g' :7 , 'h' :8 , 'i' :9 , 'j' :1 , 'k' :2 , 'l' :3 , 'm' :4 , 'n' :5 , 'o' :6 , 'p' :7 , 'q' :8 , 'r' :9 , 's' :1 , 't' :2 , 'u' :3 , 'v' :4 , 'w' :5 , 'x' :6 , 'y' :7 , 'z' :8
}
export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: "11-03-1994",
      name:"",
      flatListData : [{
        "nameNum": "",
        "birthNum": "",               
        "cardinalNum": "",
        "destinyNum": "",
        "dayNumber":"",
        "monthNumber":"",
        "mahaDasha":"",
        "thisVarshFal":""
      }]
    };
    
  }
  
   addTillSingleDigit = (num)=>{
    console.log("num = "+num);
    num = num.toString();
    
    while(num.length > 1){
      var sum = 0;
      for(var i=0;i<num.length;i++){
        sum+= parseInt(num[i]);
      }
      num = sum.toString();
    }
    return num;
  }
  
  onPressGoBtn = ()=>{
    const dayMap = {'sunday':1,'monday':2,'tuesday':9,'wednesday':5,'thursday':3,'friday':6,'saturday':8};
      
      if(this.state.name == ""){
        Alert.alert("Please enter your name");
      }else if(this.state.dob == ""){
        Alert.alert("Please enter your DOB");
      }else{
        var name = this.state.name;
        name = name.replace(/\s/g,'');
        name = name.toLowerCase();
        var nameValArr = [];
        var nameSum=0;
        for(var i=0;i<name.length;i++){
          nameValArr.push(alphabetMatrix[name[i]]);
          nameSum += alphabetMatrix[name[i]];
        }
        nameSum = this.addTillSingleDigit(nameSum);// value 1

        var dob = this.state.dob;
        var dobArr = dob.split("-");
        var dd = dobArr[0];
        var mm = dobArr[1];
        var yy = dobArr[2];
        var birthSum = this.addTillSingleDigit(dd);// value 2

        var dobDigits = dob.replace(/-/g,'');
        var dobSum=0;
        for(var i=0;i<dobDigits.length;i++){
          dobSum += parseInt(dobDigits[i]);
        }
        var destinySum = this.addTillSingleDigit(dobSum);// value 4

        
        var tDate = Moment().format("DD-MM-YY");
        tDate = tDate.split('-');
        var tdd = parseInt(tDate[0]);
        var tmm = parseInt(tDate[1]);
        var tyy = parseInt(tDate[2]);
        var dayName = Moment().format('dddd').toLowerCase();
        var dayValue = dayMap[dayName]; // 3
        var daySum = this.addTillSingleDigit(tdd+tmm+tyy+dayValue);// value 5

        
        var mDate = Moment().format("DD-MM-YYYY");
        mDate = mDate.split('-');
        var mdd = parseInt(dobArr[0]);
        var mmm = parseInt(mDate[1]);
        var myyyy = parseInt(mDate[2]);
        var mdate = myyyy + " - " +  mmm + " - " +  mdd ;
        var dt = Moment(mdate, "YYYY-MM-DD");
        var mdayName = dt.format('dddd').toLowerCase();
        var monthDayValue = dayMap[mdayName]; // 3
        var monthSum = this.addTillSingleDigit(mdd+mmm+tyy+monthDayValue);// value 6

        var dateVal = parseInt(dobArr[0]);
        var monthVal = parseInt(dobArr[1]);
        var yearVal = parseInt(tDate[2]);
        var dob = yearVal + " - " +  monthVal + " - " +  dateVal ;
        var dt = Moment(dob, "YYYY-MM-DD");
        var dayName = dt.format('dddd').toLowerCase();
        var dayValue = dayMap[dayName];       
        var sum = dateVal+monthVal+yearVal+parseInt(dayValue);
        var yrDasha = this.addTillSingleDigit(sum); // value 8

        var newData = [{
          "nameNum": nameSum,
          "birthNum": birthSum,               
          "cardinalNum": dd[0]+" | "+dd[1],
          "destinyNum": destinySum,
          "dayNumber": daySum,
          "monthNumber":monthSum,
          "mahaDasha":"",
          "thisVarshFal":yrDasha
        }];
        
        this.setState(()=>{
                return{
                  flatListData:newData
                }
        });

        Keyboard.dismiss();
      }
  }

  componentDidMount(){
      /*setTimeout(() => {
          
      }, 3000);*/
  }

  render() {  
    
    return (
      <View style={[styles.container]}>
        <ImageBackground
          source={require("./images/space.png")}
          style={styles.backgroundImage}
        >
          <Text style={styles.welcome}>Welcome Astrologer !</Text>
          
        <TextInput style={[styles.textInput,styles.textBorder,{paddingLeft:30,marginTop:20}]}
            placeholder = 'Enter your Name'
            placeholderTextColor = '#fff'
            onChangeText = {
                (text) => {
                    this.setState(()=>{
                            return{
                                name: text
                            }
                    });
                }
            }
        ></TextInput>
        
          <View style={[styles.textInput,{marginTop:20,flexDirection:'row'}]}>
            <DatePicker
              style={[{ width: 200,backgroundColor:"#fff" }]}
              date={this.state.dob}
              mode="date"
              placeholder="Date of birth"
              format="DD-MM-YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "relative",left: 0,top: 0,marginLeft: 0
                },
                dateInput: {
                  marginLeft: 0,
                  placeholderTextColor : "#fff",
                  backgroundColor:'#fff'
                }
              }}
              onDateChange={date => {
                this.setState({ dob: date });
              }}
            />
            <Button
              containerStyle={styles.goBtn}
              style={{color:'#000'}}
              onPress={this.onPressGoBtn}
            >
              Go 
            </Button>
          </View>
          
          <View style={[styles.gridContainer]}>

            <FlatList 
                data={this.state.flatListData}
                renderItem={({item, index})=>{
                    //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                    return (
                    <FlatListItem item={item} index={index}>

                    </FlatListItem>);
                }}
                >

            </FlatList>

          </View>
          <View style={[styles.gridContainer,{flexDirection:'row',marginTop:30}]}>
                <Button
                  containerStyle={styles.goBtn2}
                  style={{color:'#000'}}
                  onPress={() => {
                    if(this.state.name == ""){
                      Alert.alert("Please enter your name");
                    }else if(this.state.dob == ""){
                      Alert.alert("Please enter your DOB");
                    }else{
                      var dob = this.state.dob;
                      var dobArr = dob.split("-");
                      var dd = dobArr[0];
                      var mm = dobArr[1];
                      var yy = dobArr[2];
                      var dataToSend = {
                        dd:dd,
                        mm:mm,
                        yy:yy
                      }
                      this.props.navigation.navigate(FirstScreen,dataToSend);
                    }
                  }}
                  >
                  Maha Dasha
                </Button>
                <Button
                  containerStyle={[styles.goBtn2,{marginLeft:15}]}
                  style={{color:'#000'}}
                  onPress={() => {
                    if(this.state.name == ""){
                      Alert.alert("Please enter your name");
                    }else if(this.state.dob == ""){
                      Alert.alert("Please enter your DOB");
                    }else{
                      var dob = this.state.dob;
                      var dobArr = dob.split("-");
                      var dd = dobArr[0];
                      var mm = dobArr[1];
                      var yy = dobArr[2];
                      var dataToSend = {
                        dd:dd,
                        mm:mm,
                        yy:yy
                      }
                      this.props.navigation.navigate(SecondScreen,dataToSend);
                    }
                  }}
                  >
                  See Charts
                </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}



class FlatListItem extends Component {
  render() {          
      return (
        <View style={{
              flex: 1,
              flexDirection:'column'              
        }}>         
            <View style={styles.oddRow}>   
                <Text style={[styles.flatListItem]}>Name No.</Text>
                <Text style={[styles.flatListItem]}>{this.props.item.nameNum}</Text>
             </View>
             <View style={styles.evenRow}>   
                <Text style={[styles.flatListItem]}>Birth No.</Text>
                <Text style={[styles.flatListItem]}>{this.props.item.birthNum}</Text>
             </View>
             <View style={styles.oddRow}>  
                <Text style={[styles.flatListItem]}>Cardinal No.</Text>
                <Text style={[styles.flatListItem]}>{this.props.item.cardinalNum}</Text>
             </View>
             <View style={styles.evenRow}>    
                <Text style={[styles.flatListItem]}>Destiny No.</Text>
                <Text style={[styles.flatListItem]}>{this.props.item.destinyNum}</Text>
             </View>
             <View style={styles.oddRow}>  
                <Text style={[styles.flatListItem]}>Day No.</Text>
                <Text style={[styles.flatListItem]}>{this.props.item.dayNumber}</Text>
             </View>
             <View style={styles.evenRow}>    
                <Text style={[styles.flatListItem]}>Month No.</Text>
                <Text style={[styles.flatListItem]}>{this.props.item.monthNumber}</Text>
             </View>
             <View style={styles.oddRow}>  
                <Text style={[styles.flatListItem]}>This year Varsh Fal</Text>
                <Text style={[styles.flatListItem]}>{this.props.item.thisVarshFal}</Text>
             </View>
             
        </View>
      );
  }
}
