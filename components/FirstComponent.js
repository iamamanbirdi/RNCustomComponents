import React, {Component} from 'react';
import {styles} from './style';

import {Text,ScrollView,View,FlatList,Alert,Image,ImageBackground} from 'react-native';
import Button from 'react-native-button';


export default class FirstComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            dashaListData : []
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
            "year": "Year",
            "dasha": "Dasha"
          }];

        while (yy<futureYY){
            var obj = {
                "year": yy+" to "+(yy+ddSum),
                "dasha": ddSum
              }
              ddSum++;
              yy = yy+ddSum-1;
              if(ddSum>9){
                ddSum = 1;
              }
            newData.push(obj)
        }
        
        this.setState(()=>{
                return{
                dashaListData:newData
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
        

        return(
            <View style={styles.container}>
            <ScrollView>
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
            </View>
        );
    }
}



class FlatListItem extends Component {
    render() {          
        return (
                
              <View style={[styles.oddRow,{backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'  }]}>   
                  <Text style={[styles.flatListItem,{flex:0.7}]}>{this.props.item.year}</Text>
                  <Text style={[styles.flatListItem,{flex:0.7}]}>{this.props.item.dasha}</Text>
               </View>
         
        );
    }
  }