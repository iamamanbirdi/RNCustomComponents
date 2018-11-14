import React, {Component} from 'react';
import {styles} from './style';
import Moment from 'moment';

import {Text,ScrollView,View,FlatList,Dimensions,Alert} from 'react-native';
import Button from 'react-native-button';


export default class FirstComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dashaListData : [],
            yearlyDashaListData : [],
            dd:"",
            mm:"",
            yy:""
        }
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

    setDashaData = (params) => {
        var dd = params.dd;
        var ddSum = parseInt(this.addTillSingleDigit(dd));
        var yy = parseInt(params.yy);//1992
        var futureYY = yy+101; // 2092
        var newData = [{
            "dasha": "M.D.",
            "year": "Years"
          }];

          var newData2 = [{
            "dasha": "M.D.",
            "year": "Year wise Dasha Year wise Dasha"
          }];

        while (yy<futureYY){
            var obj = {
                "dasha": ddSum,
                "year": yy+"-"+(yy+ddSum)
              }
              ddSum++;
              yy = yy+ddSum-1;
              if(ddSum>9){
                ddSum = 1;
              }
            newData.push(obj);
            newData2.push(obj);
            
            
        }
        
        this.setState(()=>{
                return{
                dashaListData:newData,
                yearlyDashaListData:newData2,
                dd:params.dd,
                mm:params.mm,
                yy:params.yy
                }
        });
    }
componentDidMount(){
    console.log("data = "+JSON.stringify(this.props.navigation));
    let params = this.props.navigation.state.params;

    console.log("params = "+JSON.stringify(params));
    this.setDashaData(params);
}
    render() {
        
        const wid = Dimensions.get('window').width;

        return(
            <View style={[styles.container,{flexDirection:'row'}]}>
                <ScrollView style={{width:wid*0.40}}>
                    <FlatList 
                        data={this.state.dashaListData}
                        renderItem={({item, index})=>{
                            //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                            return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>);
                        }}
                        >

                    </FlatList>
                </ScrollView>
                <ScrollView horizontal={true} style={{width:wid*0.60,backgroundColor:'red'}}>
                    <FlatList 
                        data={this.state.yearlyDashaListData}
                        renderItem={({item, index})=>{
                            //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                            return (
                            <FlatListItemTwo parentStateData={this.state} item={item} index={index}>

                            </FlatListItemTwo>);
                        }}
                        >

                    </FlatList>
                </ScrollView>
            </View>
        );
    }
}



class FlatListItem extends Component {
    render() {          
        return (
                
              <View style={[{flexDirection:'row',backgroundColor: this.props.index % 2 == 0 ? '#76a1fc': '#4b82f4'  }]}>   
                  <Text style={{width:45,color: 'white', padding: 6, fontSize: 14, borderColor: 'gray', borderWidth:1,}}>{this.props.item.dasha}</Text>
                  <Text style={{width:135,color: 'white', padding: 6, fontSize: 14, borderColor: 'gray', borderWidth:1,}}>{this.props.item.year}</Text>
               </View>
         
        );
    }
}
class FlatListItemTwo extends Component {
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
render() {  
            const dayMap = {'sunday':1,'monday':2,'tuesday':9,'wednesday':5,'thursday':3,'friday':6,'saturday':8,}
            const yrs=this.props.item.year;
            const yrsArr = yrs.split("-");
            var yearlyDashaVal = '';
            if(this.props.index == 0){
                yearlyDashaVal = 'Year Wise Dasha';
            }else{
                for(var i=yrsArr[0]; i<yrsArr[1]; i++){
                    
                    
                    var monthVal = this.props.parentStateData.mm;
                    var dateVal = this.props.parentStateData.dd;
                    var yearVal = i.toString().substring(2, 4); // 1

                    var datMonSum = this.addTillSingleDigit(parseInt(dateVal)+parseInt(monthVal)); // 2
                    var dob = yearVal + " - " +  monthVal + " - " +  dateVal ;
                    var dt = Moment(dob, "YYYY-MM-DD");
                    var dayName = dt.format('dddd').toLowerCase();
                   
                    var dayValue = dayMap[dayName]; // 3
                    //Alert.alert(dayName+" "+dayValue);
                    var sum = parseInt(yearVal)+parseInt(datMonSum)+parseInt(dayValue)
                    var yrDasha = this.addTillSingleDigit(sum);
                    yearlyDashaVal += i+'['+yrDasha+']'+' , ';
                    //yearlyDashaVal += i+' | ';
                }
            }     
    return (
            
             <View style={[{flexDirection:'row',backgroundColor: this.props.index % 2 == 0 ? '#76a1fc': '#4b82f4'  }]}>   
                <Text style={{width:45,color: 'white', padding: 6, fontSize: 14, borderColor: 'gray', borderWidth:1,}}>{this.props.item.dasha}</Text>
                <Text style={{color: 'white', padding: 6, fontSize: 14, borderColor: 'gray', borderWidth:1,}}>{yearlyDashaVal}</Text>
            </View>
        
    );
}
}