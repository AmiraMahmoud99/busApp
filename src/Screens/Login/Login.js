import React from 'react';
import { View , Image, Text, TextInput,Button,TouchableOpacity , KeyboardAvoidingView ,Platform, ScrollView , ActivityIndicator} from 'react-native';
import styles from "./styles" ;
import Parse from "parse/react-native.js";
import {saveDataUser} from "../../redux/auth/actions" ;
import { connect } from 'react-redux';


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={    
           username : "" ,
           password : "",
           error:"",
           isLoding: false,
        }
      };
  login() {
    const usernameValue = this.state.username;
    const passwordValue = this.state.password;
    if(usernameValue.length>3&&passwordValue.length>3)
  { 
    this.setState({ isLoding : true})

    Parse.User.logIn(usernameValue, passwordValue)
    .then(async (loggedInUser) => {
       this.props.saveDataUser(JSON.parse(JSON.stringify(loggedInUser)))
    })
    .catch((error) => {
      console.log(error);
      this.setState({error:error.message})
       return false;
    });
  }
};
    render()
    { 
      
        return(
          <KeyboardAvoidingView style ={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <ScrollView>
                 <Image
                style = {styles.buss} source = {require('../../assets/buss.png')}/>
                <Text style = {styles.baseText}>
                    Login
                </Text>
                <TextInput onChangeText={(text)=>this.setState({username:text})} value={this.state.username} style = {styles.TextInput} placeholder ="UserName "/>
                <TextInput onChangeText={(text)=>this.setState({password:text})} value={this.state.password} style = {styles.TextInput} placeholder ="Password " secureTextEntry={true} />
               {this.state.error!=""&&(<Text style = {styles.errors}>{this.state.error}</Text>)}
               <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ForgotPassword")}}>
                 <Text style = {styles.text}>
                    Forgot Password ?
                 </Text>
               </TouchableOpacity>
                  <View style = {styles.Button}>
                    {this.state.isLoding ? (
                  <ActivityIndicator color={'#4169e1'} size="large" animating={this.state.isLoding}/>
                  ) : ( 
                    <Button  
                   title ="Login" color={'#ff8c00'} onPress={()=>this.login()}/> 
                   )
                   }
                   <Button
                   title ="SingUp" 
                   onPress={()=>this.props.navigation.navigate("SignUp")}
                   color={'#ff8c00'} /> 
                  </View>  
            </ScrollView>
            </KeyboardAvoidingView>
    );
 } 
}

const mapStateToProps = state => {
  return {
     
  };

};
const mapDispatchToProps = {
  saveDataUser
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


 