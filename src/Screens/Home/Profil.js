import React from 'react';
import { View ,Text , Image , TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {logOut} from "../../redux/auth/actions" ;


class Profil extends React.Component {

    
    constructor(props){
        super(props)
        this.state={     

        }
      };
    Logout () {
         this.props.logOut()
    };
   


    render()
    {
        return (
            <View style = {styles.container}>
                <View style = {{flexDirection : 'row' , marginTop :25 , marginRight : 50}}>
                    <View>
                       <Image style = {styles.avatar} source = {require('../../assets/avatar.png')}/> 
                    </View>
                    <View style = {styles.programmer}>
                        <Text style = {styles.text1} >
                        {this.props.user.username}  
                        </Text>
                        <Text style = {styles.text}>
                        {this.props.user.email}
                            
                        </Text>  
                    </View>
                </View>
                <View style = {styles.container1}>
                    <View style = {{flexDirection : 'row' , marginTop :50 , marginLeft : 35}}>
                    <FontAwesome name ="user" size = {30} color = '#4169e1'/>
                    <TouchableOpacity onPress={()=>{this.props.navigation.navigate("UpdateProfil")}}>
                    <Text style = {styles.notif} >
                        Update Profile
                    </Text>  
                    </TouchableOpacity> 
                    </View>
                    <View style = {{flexDirection : 'row' , marginTop :50 , marginLeft : 35}}>
                    <FontAwesome name ="bell" size = {30} color = '#4169e1'/>
                    <Text style = {styles.notif}>
                        Notification</Text>   
                    </View>
                    <View style = {{flexDirection : 'row' , marginTop :50 , marginLeft : 35}}>
                    <FontAwesome name ="ticket" size = {30} color = '#4169e1'/>
                    <Text style = {styles.notif}>
                        Ticket </Text>   
                    </View>
                    <View style = {{flexDirection : 'row' , marginTop :50 , marginLeft : 35}}>
                    <FontAwesome name ="users" size = {30} color = '#4169e1'/>
                    <Text style = {styles.notif}>
                        About-Us </Text>   
                    </View>
                    <View style = {{flexDirection : 'row' , marginTop :50 , marginLeft : 35}}>
                    <FontAwesome name ="phone" size = {30} color = '#4169e1'/>
                    <Text style = {styles.notif}>
                    Terms & Condition </Text>   
                    </View>
                    <View style = {{marginTop : 161}}>
                        <FontAwesome.Button  name ="sign-out" size = {35} color = '#4169e1' backgroundColor= "#dcdcdc" 
                         onPress={()=>this.Logout()} >
                          Log-Out
                        </FontAwesome.Button>
                    </View>

                       
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
    logOut
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profil);