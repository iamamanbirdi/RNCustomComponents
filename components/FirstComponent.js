import React, {Component} from 'react';
import {styles} from './style';
import Moment from 'moment';

import {Text,ScrollView,View,FlatList,Dimensions,Alert} from 'react-native';
import Button from 'react-native-button';

// comments to test git

export default class FirstComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dashaListData : [],
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
        }
        
        this.setState(()=>{
                return{
                dashaListData:newData,
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
                <ScrollView horizontal={true} >
                    <FlatList 
                        data={this.state.dashaListData}
                        renderItem={({item, index})=>{
                            //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                            return (
                            <FlatListItem parentStateData={this.state} item={item} index={index}>

                            </FlatListItem>);
                        }}
                        >
                    </FlatList>
                </ScrollView>
            </View>
        );
    }
}



class FlatListItem extends Component {
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
            yearlyDashaVal = 'Varsh Fal';
        }else{
            for(var i=yrsArr[0]; i<yrsArr[1]; i++){
                
                
                var monthVal = this.props.parentStateData.mm;
                var dateVal = this.props.parentStateData.dd;
                var yearVal = i.toString().substring(2, 4); // 1
                var dob = yearVal + " - " +  monthVal + " - " +  dateVal ;
                var dt = Moment(dob, "YYYY-MM-DD");
                var dayName = dt.format('dddd').toLowerCase();
                var dayValue = dayMap[dayName]; // 3
                //Alert.alert(dayName+" "+dayValue);
                var sum = parseInt(yearVal)+parseInt(dateVal)+parseInt(monthVal)+parseInt(dayValue)
                var yrDasha = this.addTillSingleDigit(sum);
                if (i == yrsArr[1]-1){
                    yearlyDashaVal += i+'['+yrDasha+']';
                }else{
                    yearlyDashaVal += i+'['+yrDasha+']'+' , ';
                }
                
                //yearlyDashaVal += i+' | ';
            }
        } 
        
        return (
                
              <View style={[{flexDirection:'row',backgroundColor: this.props.index % 2 == 0 ? '#becff4': '#dee6f7'  }]}>   
                  <Text style={{width:45,color: '#000', padding: 6, fontSize: 14, borderRightColor: 'gray', borderRightWidth:1}}>{this.props.item.dasha}</Text>
                  <Text style={{width:100,color: '#000', padding: 6, fontSize: 14, borderRightColor: 'gray', borderRightWidth:1}}>{this.props.item.year}</Text>
                  <Text style={{color: '#000', padding: 6, fontSize: 14}}>{yearlyDashaVal}</Text>
               </View>
         
        );
    }
}
