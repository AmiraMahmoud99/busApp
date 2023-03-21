import React from 'react';
import { View , Image, Text, TextInput , Button , KeyboardAvoidingView , Platform , ScrollView , ActivityIndicator} from 'react-native';
import styles from './styles';


class ForgotPassword extends React.Component {

    constructor(props){
        super(props)
        this.state={}
      };
    render()
    {
        return(
            <KeyboardAvoidingView style ={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <ScrollView>
                <Image
                style = {styles.buss} source = {require('../../assets/buss.png')}/>

                <Text style = {styles.baseText}>
                    Forgot Password ?
                </Text>

                <TextInput style = {styles.TextInput} placeholder ="Phone Number Or E-mail "/>
                <TextInput style = {styles.TextInput} placeholder ="NewPassword " secureTextEntry={true} />
                
                 <View style = {styles.Button}>
                 <Button 
                 title ="OK" color={'#ff8c00'} /> 
                 </View>
                 </ScrollView>
            </KeyboardAvoidingView>

    );
};

};



export default ForgotPassword