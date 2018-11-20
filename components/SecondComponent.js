import React, {Component} from 'react';
import {styles} from './style';

import {Text,TextInput,View,Keyboard,Alert,Image,ImageBackground,FlatList} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import Moment from 'moment';
import Button from "react-native-button";


export default class SecondComponent extends Component {
    constructor(props){
        super(props);
        this.state = {   
            dashaListData : [],           
            dd:"",
            mm:"",
            yy:"",
            dob:"",
            currYear:"",
            currYearMahaDasha:"",
            currYearVF:"",
            destinyNum:""
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
    componentWillMount(){    
        let params = this.props.navigation.state.params;
        this.setDashaData(params);
    }
    setDashaData = (params) => {
        var dd = params.dd;
        var ddSum = parseInt(this.addTillSingleDigit(dd));
        var yy = parseInt(params.yy);//1992
        var futureYY = yy+101; // 2092
        var newData = [];

        var currYrMahaDasha = '';
        var mDate = Moment().format("DD-MM-YYYY");
        mDate = mDate.split('-');
        var currYr = mDate[2];

        while (yy<futureYY){
            var yrs = '';
            for(var j=yy;j<yy+ddSum;j++){
                if(j == currYr){
                    currYrMahaDasha=ddSum;
                }
                if (j == yy+ddSum-1){
                    yrs += j;
                }else{
                    yrs += j +",";
                }
            }
            var obj = {
                "dasha": ddSum,
                "year": yrs
              }
              ddSum++;
              yy = yy+ddSum-1;
              if(ddSum>9){
                ddSum = 1;
              }
            newData.push(obj);
        }
        
        var dob = params.dd+""+params.mm+""+params.yy.substring(2, 4);
        dob = dob.replace(/0/g,'');
        this.setState(()=>{
                return{
                    dashaListData:newData,
                    dd:params.dd,
                    mm:params.mm,
                    yy:params.yy,
                    dob:dob,
                    currYear:currYr,
                    currYearMahaDasha:currYrMahaDasha,
                    destinyNum:params.destinyNum
                }
        });

        // finding current year dasha(vf)
        var dateVal = parseInt(params.dd);
        var monthVal = parseInt(params.mm);
        var yearVal = currYr;
        var yrVal = parseInt(yearVal.substring(2, 4));
        var datebirth = yearVal + " - " +  monthVal + " - " +  dateVal ;
        var personDate = Moment(datebirth,"YYYY-MM-DD");
        var now = Moment();
        //Alert.alert(now.format('DD-MM-YYYY') +" : "+ personDate.format('DD-MM-YYYY'));
        if (now < personDate) {
           yrVal = yrVal-1; // if his bday has been passed or not in the current year
        } 
        var dateob = yrVal + " - " +  monthVal + " - " +  dateVal ;
        var dt = Moment(dateob, "YYYY-MM-DD");
        var dayName = dt.format('dddd').toLowerCase();
        const dayMap = {'sunday':1,'monday':2,'tuesday':9,'wednesday':5,'thursday':3,'friday':6,'saturday':8,}
        var dayValue = dayMap[dayName];       
        var sum = dateVal+monthVal+yrVal+parseInt(dayValue);
        var yrDasha = this.addTillSingleDigit(sum); // value 
        this.setState(()=>{
                return{
                    currYearVF:yrDasha
                }
        });
        

    }
    getItemValue(val){
        var dob = this.state.dob+""+this.state.destinyNum;
        var res = '';
        for(var i=0;i<dob.length;i++){
            if(dob[i] == val){
                res += val;
            }
        }
        return res;
    }
    getTextValue(val){
        var dob = this.state.dob+""+this.state.destinyNum+""+this.state.currYearVF+""+this.state.currYearMahaDasha;
        var res = '';
        for(var i=0;i<dob.length;i++){
            if(dob[i] == val){
                res += val;
            }
        }
        return res;
    }
    
    render() {
        
        var item1 = this.getItemValue('3');
        var item2 = this.getItemValue('6');
        var item3 = this.getItemValue('2');
        var item4 = this.getItemValue('1');
        var item5 = this.getItemValue('7');
        var item6 = this.getItemValue('8');
        var item7 = this.getItemValue('9');
        var item8 = this.getItemValue('5');
        var item9 = this.getItemValue('4');

        var textVal1 = this.getTextValue('3');
        var textVal2 = this.getTextValue('6');
        var textVal3 = this.getTextValue('2');
        var textVal4 = this.getTextValue('1');
        var textVal5 = this.getTextValue('7');
        var textVal6 = this.getTextValue('8');
        var textVal7 = this.getTextValue('9');
        var textVal8 = this.getTextValue('5');
        var textVal9 = this.getTextValue('4');

        return(
            // we will traverse vertically
            
            <View style={styles.container}>
            <Text style={{textAlign:'center',fontSize:16,marginTop:5,fontWeight:'600'}}>Basic Chart</Text>
            <View style={[styles.gridContainer,{marginTop:5,flex:0.5}]}>
            <Grid>
              <Col>
                <Row
                  style={{ backgroundColor: "skyblue", justifyContent: "center" }}
                >
                  <Text style={styles.gridText} >{item1}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "violet", justifyContent: "center" }}
                >
                  <Text style={styles.gridText} >{item2}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "orange",
                    justifyContent: "center"
                  }}
                >
                  <Text style={styles.gridText} >{item3}</Text>
                </Row>
              </Col>
              <Col>
                <Row
                  style={{ backgroundColor: "red", justifyContent: "center" }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]}>{item4}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "gray",
                    justifyContent: "center"
                  }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]} >{item5}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "indigo",
                    justifyContent: "center"
                  }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]}>{item6}</Text>
                </Row>
              </Col>
              <Col>
                <Row
                  style={{
                    backgroundColor: "yellow",
                    justifyContent: "center"
                  }}
                >
                  <Text style={styles.gridText} >{item7}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "green", justifyContent: "center" }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]}>{item8}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "black", justifyContent: "center" }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]}>{item9}</Text>
                </Row>
              </Col>
            </Grid>
          </View>

            <View style={[styles.gridContainer,{marginLeft:40,marginRight:40,marginTop:10,flex:0.2}]}>        
                    <View style={[styles.oddRow]}>   
                        <Text style={[styles.flatListItem,{textAlign:'center'}]}>Year</Text>
                        <Text style={[styles.flatListItem,{textAlign:'center'}]}>Maha Dasha</Text>
                        <Text style={[styles.flatListItem,{textAlign:'center'}]}>Varsh Fal</Text>
                        

                    </View>
                    <View style={styles.evenRow}>   
                        <Text style={[styles.flatListItem,{textAlign:'center'}]}>{this.state.currYear}</Text>
                        <Text style={[styles.flatListItem,{textAlign:'center'}]}>{this.state.currYearMahaDasha}</Text>
                        <Text style={[styles.flatListItem,{textAlign:'center'}]}>{this.state.currYearVF}</Text>
                        
                    </View>
             </View>
             <Text style={{textAlign:'center',fontSize:16,marginTop:5,fontWeight:'600'}}>Current Chart</Text>
          <View style={[styles.gridContainer,{marginTop:5,marginBottom:10,flex:0.5}]}>
            <Grid>
              <Col>
                <Row
                  style={{ backgroundColor: "skyblue", justifyContent: "center" }}
                >
                  <Text style={[styles.gridText]}>{textVal1}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "violet", justifyContent: "center" }}
                >
                  <Text style={[styles.gridText]}>{textVal2}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "orange",
                    justifyContent: "center"
                  }}
                >
                  <Text style={[styles.gridText]}>{textVal3}</Text>
                </Row>
              </Col>
              <Col>
                <Row
                  style={{ backgroundColor: "red", justifyContent: "center" }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]} >{textVal4}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "gray",
                    justifyContent: "center"
                  }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]}>{textVal5}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "indigo",
                    justifyContent: "center"
                  }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]} >{textVal6}</Text>
                </Row>
              </Col>
              <Col>
                <Row
                  style={{
                    backgroundColor: "yellow",
                    justifyContent: "center"
                  }}
                >
                  <Text style={[styles.gridText]}>{textVal7}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "green", justifyContent: "center" }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]} >{textVal8}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "black", justifyContent: "center" }}
                >
                  <Text style={[styles.gridText,{color:'#fff'}]} >{textVal9}</Text>
                </Row>
              </Col>
            </Grid>
          </View>
            </View>
        );
    }
}