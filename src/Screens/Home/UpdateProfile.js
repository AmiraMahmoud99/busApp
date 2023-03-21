import React from 'react';
import { View , Image , TextInput , TouchableOpacity , ActivityIndicator ,  Text }  from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {saveDataUser} from "../../redux/auth/actions" ;
import { connect } from 'react-redux';
import Parse from "parse/react-native.js";
import ImagePicker from 'react-native-image-crop-picker';



class UpdateProfil extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username :"Amira", 
            email :"amira@gmail.com", 
            password : "123456789",
            isLoding: false,
            image:"",
        }
      };
      picker () {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: false,
          includeBase64 : true,
          mediaType: "photo",
        })
        .then(image => {
          this.setState({image:image.path})
          console.log(image);
          this.upload(image)
        })
        .catch(err =>console.log(err)); 
      }; 
      upload(image){
        
        };
      update() {
        this.setState({ isLoding : true})
        const currentUser = Parse.User.current();
        currentUser.set('username',this.state.username);
        currentUser.set('email',this.state.email);
        currentUser.set('password',this.state.password);
        currentUser.save();
        alert("Successfully Updated Information")
        this.setState({ isLoding : false})
    };   
render()
      {
        return (
            <View style = {styles.container3}> 
                <View style = {{flexDirection : 'row' , margin : 15}}>
                <FontAwesome style = {styles.arrowCircle} name ="arrow-circle-left" size = {25} color = '#4169e1'
                onPress={()=>this.props.navigation.navigate("Profil")}/>
                <AntDesign style = {styles.settings} name ="setting" size = {25} color = '#4169e1'/>
                </View>

                <View>
                <Image style = {styles.avatar1} source = {this.state.image.length>0?{uri:this.state.image}: require('../../assets/avatar.png')}/>
                <AntDesign name="camera" size={20} style={styles.edit} onPress={()=>this.picker()}/>
                </View>

                <View style = {{ marginTop :150 }}>
                <TextInput onChangeText={(text)=>this.setState({username:text})} value={this.state.username} style={styles.input} placeholder="Full Name"/>
                <TextInput onChangeText={(text)=>this.setState({email:text})}    value={this.state.email} style={styles.input} placeholder="E-mail"/>
                <TextInput onChangeText={(text)=>this.setState({password:text})} value={this.state.password} style={styles.input} placeholder="Password" secureTextEntry={true}/>
                </View>
                <View style = {{flexDirection : 'row' , margin : 15}}>
                    <TouchableOpacity style = {styles.profil} onPress={()=>this.update()}>
                    {this.state.isLoding ? (
                  <ActivityIndicator color={'#4169e1'} size="large" animating={this.state.isLoding}/>
                    ) : (
                        <Text style = {styles.save} >
                        Save
                        </Text>
                    )
                    }
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.profil}>
                        <Text style = {styles.cancel} >
                                 cancel
                        </Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    };
};
const mapStateToProps = state => {
    return {
       
    };
  
  };
  const mapDispatchToProps = {
    saveDataUser
    
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(UpdateProfil);