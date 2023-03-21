import {StyleSheet} from "react-native"

const styles = StyleSheet.create({


    container : {
        padding : 40 ,
        paddingEnd : 20 , 
        paddingLeft : 20 , 
        backgroundColor:"#FFF"
    },
    buss:{
        width : '100%' , 
        height : 250 , 
    },
    baseText: {
        fontFamily: 'Cochin',
        fontStyle : 'italic',
        fontSize: 30,
        fontWeight: 'bold',
        padding : 30 ,
        color: '#4169e1',
        alignSelf : 'center' , 
      },
      TextInput : {
        borderColor : '#b0c4de' , 
        backgroundColor : '#b0c4de',
        height: 40,
        margin: 20,
        borderWidth: 1,
        padding: 10, 
        borderRadius : 20,
        paddingLeft : 20, 
      } , 
      Button : {
        paddingVertical : 5 , 
        marginVertical :1,
        padding: 10, 
        borderRadius : 50 ,
        width : 150,
        height : 150 ,
        alignSelf : 'center' ,
        justifyContent : 'space-evenly'
      },    
});
export default styles ;