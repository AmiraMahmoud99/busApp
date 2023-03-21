import React from 'react';
import { View , Text , Image ,TextInput  , ScrollView , TouchableOpacity } from 'react-native';
import styles from "./styles" ;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {saveDataUser} from "../../redux/auth/actions" ;
import { connect } from 'react-redux';
import Parse from "parse/react-native.js";
import Card from "./components/card"

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data :[],
            direction : [],
            likes_dir:''
        }
      };


      componentDidMount(){
        this.Categorie()
      }
          Categorie() {
            try {
            
            const CurrentUser =  Parse.User.current();
            const objectId=CurrentUser.get('likes_dir')
             const direction = Parse.Object.extend("Direction");
            const query=  new Parse.Query(direction)
            query.containedIn('objectId',objectId)
            query.find().then(res=>{
                let temp=res.map(x=>JSON.parse(JSON.stringify(x)))
                this.setState({data:temp})})

            }
           catch (error) {
              console.log(error)
            }
          };
    render()
    {
        return (
            
            <View style = {styles.container}>
                
                <View style = {{flexDirection : 'row' , marginTop :25 , marginRight : 50}}>
                    <View>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Profil")}>
                       <Image style = {styles.avatar} source = {require('../../assets/avatar.png')} /> 
                       </TouchableOpacity>
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
                <ScrollView style = {styles.container1}>
                    
                    <View style = {{flexDirection : 'row' , marginTop :50 , marginLeft : 50 }}>
                        <FontAwesome name ="bus" size = {40} color = '#4169e1'/>
                        <TextInput style = {styles.TextInput} placeholder ="Departure Station" placeholderTextColor='#FFF' />
                    </View>
                    <View style = {{flexDirection : 'row' , marginTop :50 , marginLeft : 50}}>
                        <FontAwesome name ="bus" size = {40} color = '#4169e1' />
                        <TextInput style = {styles.TextInput} placeholder ="Your Destination"  placeholderTextColor='#FFF'/>
                    </View>
                    <View  style = {{ flexDirection : 'row' , marginTop :50 , justifyContent : 'space-around' , margin :30 }}>
                    <TouchableOpacity style = {styles.buy1} onPress={()=>this.props.navigation.navigate("Categories")}>
                            <Text style = {styles.search} >
                                Search 
                            </Text>
                    </TouchableOpacity>      
                    <TouchableOpacity style = {styles.buy1} >
                            <Text style = {styles.search} >
                                Reset 
                            </Text>
                    </TouchableOpacity>
                    </View> 
                    <View style = {{flexDirection : 'row' , alignSelf : 'center' , }}>
                        <Text style = {styles.favorite}>
                            Favorite Station
                        </Text> 
                        <FontAwesome marginLeft = {30} name ="heart" size = {30} color = '#4169e1' />
                    </View>
                   
            
                    

                    {this.state.data.map(x=><Card data={x}/>)}
                </ScrollView>  
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
  