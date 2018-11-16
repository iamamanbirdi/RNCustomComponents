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
        var dob = this.state.dob;
        var res = '';
        for(var i=0;i<dob.length;i++){
            if(dob[i] == val){
                res += val;
            }
        }
        return res;
    }
    getTextValue(val){
        var dob = this.state.dob+""+this.state.currYearVF+""+this.state.currYearMahaDasha;
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
            
            <View style={[styles.gridContainer,{marginTop:10,flex:0.5}]}>
            <Grid>
              <Col>
                <Row
                  style={{ backgroundColor: "cyan", justifyContent: "center" }}
                >
                  <Text>{item1}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "pink", justifyContent: "center" }}
                >
                  <Text>{item2}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "lightgreen",
                    justifyContent: "center"
                  }}
                >
                  <Text>{item3}</Text>
                </Row>
              </Col>
              <Col>
                <Row
                  style={{ backgroundColor: "gray", justifyContent: "center" }}
                >
                  <Text>{item4}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "lightblue",
                    justifyContent: "center"
                  }}
                >
                  <Text>{item5}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "yellow",
                    justifyContent: "center"
                  }}
                >
                  <Text>{item6}</Text>
                </Row>
              </Col>
              <Col>
                <Row
                  style={{
                    backgroundColor: "magenta",
                    justifyContent: "center"
                  }}
                >
                  <Text>{item7}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "cyan", justifyContent: "center" }}
                >
                  <Text>{item8}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "pink", justifyContent: "center" }}
                >
                  <Text>{item9}</Text>
                </Row>
              </Col>
            </Grid>
          </View>

            <View style={[styles.gridContainer,{marginLeft:20,marginRight:20,marginTop:10,flex:0.2}]}>        
                    <View style={[styles.oddRow]}>   
                        <Text style={[styles.flatListItem]}>Year</Text>
                        <Text style={[styles.flatListItem,{paddingTop:2}]}>Maha Dasha</Text>
                        <Text style={[styles.flatListItem]}>Varsh Fal</Text>
                        <Text style={[styles.flatListItem,{paddingTop:2}]}>Destiny Number</Text>

                    </View>
                    <View style={styles.evenRow}>   
                        <Text style={[styles.flatListItem]}>{this.state.currYear}</Text>
                        <Text style={[styles.flatListItem]}>{this.state.currYearMahaDasha}</Text>
                        <Text style={[styles.flatListItem]}>{this.state.currYearVF}</Text>
                        <Text style={[styles.flatListItem]}>{this.state.destinyNum}</Text>
                    </View>
             </View>
            
          <View style={[styles.gridContainer,{marginTop:10,marginBottom:10,flex:0.5}]}>
            <Grid>
              <Col>
                <Row
                  style={{ backgroundColor: "cyan", justifyContent: "center" }}
                >
                  <Text>{textVal1}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "pink", justifyContent: "center" }}
                >
                  <Text>{textVal2}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "lightgreen",
                    justifyContent: "center"
                  }}
                >
                  <Text>{textVal3}</Text>
                </Row>
              </Col>
              <Col>
                <Row
                  style={{ backgroundColor: "gray", justifyContent: "center" }}
                >
                  <Text>{textVal4}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "lightblue",
                    justifyContent: "center"
                  }}
                >
                  <Text>{textVal5}</Text>
                </Row>
                <Row
                  style={{
                    backgroundColor: "yellow",
                    justifyContent: "center"
                  }}
                >
                  <Text>{textVal6}</Text>
                </Row>
              </Col>
              <Col>
                <Row
                  style={{
                    backgroundColor: "magenta",
                    justifyContent: "center"
                  }}
                >
                  <Text>{textVal7}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "cyan", justifyContent: "center" }}
                >
                  <Text>{textVal8}</Text>
                </Row>
                <Row
                  style={{ backgroundColor: "pink", justifyContent: "center" }}
                >
                  <Text>{textVal9}</Text>
                </Row>
              </Col>
            </Grid>
          </View>
            </View>
        );
    }
}