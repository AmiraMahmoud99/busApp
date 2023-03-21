
import React from 'react';
import { View ,Image, ScrollView,Text, TextInput , KeyboardAvoidingView ,Platform,Button} from 'react-native';
import styles from './styles';

class SignUp extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    };

    signUp() {
        let user = new Parse.User();
        user.set("username", "amira");
        user.set("password", "amiraa");
        user.set("email", "amira@gmail.com");
        try {
          user.signUp();
        } catch (error) {
          alert("Error: " + error.code + " " + error.message); 
        }
      };
    render()
    {
        return(
            <KeyboardAvoidingView style = {styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <ScrollView>
                <Image
                style = {styles.buss} source = {require('../../assets/buss.png')}/>
                <Text style = {styles.baseText}>
                    Create Account
                </Text>

                <TextInput style = {styles.TextInput} placeholder ="UserName "/>
                <TextInput style = {styles.TextInput} placeholder ="Password " secureTextEntry={true} />
                <TextInput style = {styles.TextInput} placeholder ="Phone Number Or E-mail "/>
                
                <View style = {styles.Button}>
                   <Button 
                   title ="Login" color={'#ff8c00'} /> 
                   
                </View>  
                </ScrollView>    
            </KeyboardAvoidingView>

        );
    };

};
export default SignUp