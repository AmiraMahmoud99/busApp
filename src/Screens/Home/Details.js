import React from 'react';
import styles from "./styles" ;
import {saveDataUser} from "../../redux/auth/actions" ;
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



class Details extends React.Component {
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
                <View style = {{flexDirection : 'row' }}>
                <FontAwesome  name ="arrow-circle-left" size = {30} color = '#FFF' marginTop = {8} 
                onPress={()=>this.props.navigation.navigate("Categories")}/>
              <Text style = {styles.Detail}>
                Details
              </Text> 
              </View>      
            </View>
            <View style = {{flexDirection : 'row' , marginTop:30}}>
                <Text style = {styles.starte}>
                    Start   : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Mtorech
                </Text>
             </View>
             <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.starte}>
                     Nearst Station : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Bathaa el ma3ahed
                </Text>
             </View>
             <View style={styles.hairline} />
             


             <View style = {{flexDirection : 'row' , marginTop:30}}>
                <Text style = {styles.starte}>
                    End   : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Zrig
                </Text>
             </View>
             <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.starte}>
                     Nearst Station : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Sidi Boulbeba
                </Text>
             </View>
             <View>
             <View style = {{flexDirection : 'row' , marginTop:30 }}>
                  <Text style= {styles.time}>
                    15:00h
                  </Text>
                  <View style = {{flexDirection : 'row' , marginLeft :200}}>
                  <FontAwesome5 name ="walking" size = {20} color = '#4169e1'/>
                  <Text style= {styles.time}>
                    10 min
                  </Text>

                  </View>
             </View>
             </View>
             <View style = {{marginTop:30}}>
             <View style={styles.hairline} />
             </View>
            
             <View style ={{flexDirection : 'row' , marginTop:30 }}>
             <Text style = {styles.starte}>
                     Car : 
                </Text>
                <Text  style = {styles.mtorech}>
                    B5
                </Text>
             </View>


            <View style = {{marginTop : 200}}>
                        <FontAwesome.Button  name ="cart-plus" size = {35} color = '#4169e1' backgroundColor= "#dcdcdc" 
                         onPress={()=>this.props.navigation.navigate("Ticket")} >
                          Ticket : 500
                        </FontAwesome.Button>
                </View>

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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Details);