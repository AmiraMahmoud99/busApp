import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Screens/Home/HomePage"
import Serach from "../Screens/Home/Search"
import Profil from "../Screens/Home/Profil"
import UpdateProfil from "../Screens/Home/UpdateProfile";
import Categories from "../Screens/Home/Categories";
import Details from "../Screens/Home/Details";
import BuyTicket from "../Screens/Home/BuyTicket";
import AboutUs from "../Screens/Home/AboutUs";
import Notification from "../Screens/Home/Notification";
import TermeCondition from "../Screens/Home/TermeCondition";
import Ticket from "../Screens/Home/Ticket";


const Stack = createNativeStackNavigator();
 
export default class HomeNavigation extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
       return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}  options={{
                headerShown: false
                 }} />
                 <Stack.Screen name="Details" component={Details} options={{
                headerShown: false
                 }} />
                
                 <Stack.Screen name="Categories" component={Categories} options={{
                headerShown: false
                 }} />
                
                <Stack.Screen name="Profil" component={Profil} options={{
                headerShown: false
                 }} />
                 <Stack.Screen name="Serach" component={Serach} options={{
                headerShown: false
                 }} />
                <Stack.Screen name="UpdateProfil" component={UpdateProfil} options={{
                headerShown: false
                 }} />
                 <Stack.Screen name="BuyTicket" component={BuyTicket} options={{
                headerShown: false
                 }} />
                
                 <Stack.Screen name="AboutUs" component={AboutUs} options={{
                headerShown: false
                 }} />
                 <Stack.Screen name="Notification" component={Notification} options={{
                headerShown: false
                 }} /> 
                 <Stack.Screen name="TermeCondition" component={TermeCondition} options={{
                headerShown: false
                 }} /> 
                 <Stack.Screen name="Ticket" component={Ticket} options={{
                headerShown: false
                 }} />   
            </Stack.Navigator>)
    }
}