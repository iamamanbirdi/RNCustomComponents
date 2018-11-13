import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor:'#fff'     
    },
    tomato:{
      backgroundColor:'tomato'  
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      margin: 20,
      color:'#fff'
      
    },
    values: {
        fontSize: 10,
        textAlign: 'left',
        margin: 20,
      },
    textInput: {
      height:40,
      marginLeft:40,
      marginRight:40,
      color: '#000',
    },
    textBorder:{
      borderColor: 'gray',
      borderWidth:1,
    },
    gridContainer: {
        marginLeft:40,
      marginTop:30,
      marginRight:40,
      flex:0.5,
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    goBtn:{
      backgroundColor:'green',
      marginLeft:10,
      borderRadius:10,
      width:70,
      padding:5
    },
    goBtn2:{
      backgroundColor:'green',
      borderRadius:5,
      width:130,
      padding:5
    },
    flatListItem: {
      flex:0.5,
      color: 'white',
      padding: 6,
      fontSize: 14,  
      borderColor: 'gray',
      borderWidth:1,
  },
  oddRow:{
    flex: 1,
    flexDirection:'row'   , 
    backgroundColor: 'mediumseagreen'  
  },
  evenRow:{
    flex: 1,
    flexDirection:'row'    ,
    backgroundColor: 'tomato'
  }

  });

export { styles };