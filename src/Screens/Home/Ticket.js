import React from 'react';
import styles from "./styles" ;
import {saveDataUser} from "../../redux/auth/actions" ;
import { connect } from 'react-redux';
import { View , Text, TouchableOpacity  } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import QRCode from 'react-native-qrcode-svg';



class Ticket extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
      };
    render()
    {
        return (
        <View >
          <View style = {styles.container4}>
            <View style = {{flexDirection : 'row'  }}>
             <FontAwesome  name ="arrow-circle-left" size = {30} color = '#FFF' marginTop = {8} 
             onPress={()=>this.props.navigation.navigate("Details")}/>
              <Text style = {styles.Detail}>
             Ticket
              </Text> 
            </View>      
          </View>
          
             <View style = {styles.container5}>
                <View style = {{flexDirection : 'row'}}>
                         <Text style = {styles.first}>
                            Date : 
                         </Text>
                         <Text  style = {styles.second}>
                            17/01/23
                         </Text>
                </View>
                <View style = {{flexDirection : 'row'}}>
                         <Text style = {styles.first}>
                         Bus Number : 
                         </Text>
                         <Text  style = {styles.second}>
                            5
                         </Text>
                </View>
                <View style = {{flexDirection : 'row'}}>
                         <Text style = {styles.first}>
                         price : 
                         </Text>
                         <Text  style = {styles.second}>
                            500
                         </Text>
                </View>
                <View style = {{marginTop:40 , alignSelf:'center'}}>
                  <QRCode 
                   value="http://awesome.link.qr" 
                  />

                </View>        
             </View>
             <TouchableOpacity style ={styles.touchable}>

              <View style = {{flexDirection : 'row'  }}>
              <AntDesign name ="download" size = {25} color = '#000000' />
              <Text style = {styles.download}>
                download Ticket

              </Text>
              

              </View>
               
             </TouchableOpacity>
          
             

        </View>








        

     




        );
    
    }
}

const mapStateToProps = state => {
    return {
       user:state.auth.user
    };
  
  };
  const mapDispatchToProps = {
    saveDataUser
    
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Ticket);