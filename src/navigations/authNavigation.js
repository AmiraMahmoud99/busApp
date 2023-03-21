import React from "react" ;
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../Screens/Login/Login" ;
import SignUp from "../Screens/SignUp/SignUp" ;
import ForgotPassword from "../Screens/ForgotPassword/ForgotPassword";

const Stack = createNativeStackNavigator();
 
export default class AuthNavigation extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
       return (
        <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{
                headerShown: false
            }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown: false
            }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
                headerShown: false
            }} />            
        </Stack.Navigator>
        )
    }
}