import React from 'react';
import styles from "./styles" ;
import {saveDataUser} from "../../redux/auth/actions" ;
import { connect } from 'react-redux';
import { View , Text , TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


class Categories extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }  
      };
     
    render()
    {
        return (
            <ScrollView>
             <TouchableOpacity onPress={()=>this.props.navigation.navigate("Details")}>
            <View style = {styles.container2}>
            <View style = {{flexDirection : 'row' , alignSelf : 'center' , marginTop : 5 }}>
            <FontAwesome name ="bus" size = {30} color = '#ff8c00' />
                <Text style = {styles.b4}>
                    B5
                </Text> 
                <FontAwesome marginLeft = {160} name ="heart" size = {30} color = '#4169e1'onPress={()=>this.props.navigation.navigate("Home")} />
            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    start : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Mtorech
                </Text>

            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    End   : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Zrig
                </Text>

            </View>
            <View style = {{flexDirection : 'row' ,  alignSelf : 'flex-start' }}>
                <View style = {styles.create}>
                 <Ionicons  name ="radio-button-on" marginLeft = {5} size = {25} color = '#ff8c00'  />
                
                 <Text  style = {styles.alert}>
                 Create Alert
                 </Text>
                 </View>
                 <TouchableOpacity style = {styles.buy}onPress={()=>this.props.navigation.navigate("Ticket")} >
                    <Text style = {styles.ticket} >
                        Buy Ticket 
                    </Text>
                 </TouchableOpacity>
            </View>
            
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style = {styles.container2}>
            <View style = {{flexDirection : 'row' , alignSelf : 'center' , marginTop : 5 }}>
            <FontAwesome name ="bus" size = {30} color = '#ff8c00' />
                <Text style = {styles.b4}>
                    B4
                </Text> 
                <FontAwesome marginLeft = {160} name ="heart" size = {30} color = '#4169e1' />
            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    start : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Beb Bhar
                </Text>

            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    End   : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Zrig
                </Text>

            </View>
            <View style = {{flexDirection : 'row' ,  alignSelf : 'flex-start' }}>
                <View style = {styles.create}>
                 <Ionicons  name ="radio-button-on" marginLeft = {5} size = {25} color = '#ff8c00'  />
                
                 <Text  style = {styles.alert}>
                 Create Alert
                 </Text>
                 </View>
                 <TouchableOpacity style = {styles.buy}>
                    <Text style = {styles.ticket} >
                        Buy Ticket 
                    </Text>
                 </TouchableOpacity>
            </View>
            </View>
            </TouchableOpacity>
            <View style = {styles.container2}>
            <View style = {{flexDirection : 'row' , alignSelf : 'center' , marginTop : 5 }}>
            <FontAwesome name ="bus" size = {30} color = '#ff8c00' />
                <Text style = {styles.b4}>
                    B1
                </Text> 
                <FontAwesome marginLeft = {160} name ="heart" size = {30} color = '#4169e1' />
            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    start : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Zrig
                </Text>

            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    End   : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Sidi Marzoug
                </Text>

            </View>
            <View style = {{flexDirection : 'row' ,  alignSelf : 'flex-start' }}>
                <View style = {styles.create}>
                 <Ionicons  name ="radio-button-on" marginLeft = {5} size = {25} color = '#ff8c00'  />
                
                 <Text  style = {styles.alert}>
                 Create Alert
                 </Text>
                 </View>
                 <TouchableOpacity style = {styles.buy}>
                    <Text style = {styles.ticket} >
                        Buy Ticket 
                    </Text>
                 </TouchableOpacity>
            </View>
            
            </View>
            <View style = {styles.container2}>
            <View style = {{flexDirection : 'row' , alignSelf : 'center' , marginTop : 5 }}>
            <FontAwesome name ="bus" size = {30} color = '#ff8c00' />
                <Text style = {styles.b4}>
                    B2
                </Text> 
                <FontAwesome marginLeft = {160} name ="heart" size = {30} color = '#4169e1' />
            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    start : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Beb Bhar
                </Text>

            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    End   : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Menzel
                </Text>

            </View>
            <View style = {{flexDirection : 'row' ,  alignSelf : 'flex-start' }}>
                <View style = {styles.create}>
                 <Ionicons  name ="radio-button-on" marginLeft = {5} size = {25} color = '#ff8c00'  />
                
                 <Text  style = {styles.alert}>
                 Create Alert
                 </Text>
                 </View>
                 <TouchableOpacity style = {styles.buy}>
                    <Text style = {styles.ticket} >
                        Buy Ticket 
                    </Text>
                 </TouchableOpacity>
            </View>
            
            </View>
            <View style = {styles.container2}>
            <View style = {{flexDirection : 'row' , alignSelf : 'center' , marginTop : 5 }}>
            <FontAwesome name ="bus" size = {30} color = '#ff8c00' />
                <Text style = {styles.b4}>
                    B6
                </Text> 
                <FontAwesome marginLeft = {160} name ="heart" size = {30} color = '#4169e1' />
            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    start : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Mtorech
                </Text>

            </View>
            <View style = {{flexDirection : 'row' }}>
                <Text style = {styles.start}>
                    End   : 
                </Text>
                <Text  style = {styles.mtorech}>
                    Sidi Marzoug
                </Text>

            </View>
            <View style = {{flexDirection : 'row' ,  alignSelf : 'flex-start' }}>
                <View style = {styles.create}>
                 <Ionicons  name ="radio-button-on" marginLeft = {5} size = {25} color = '#ff8c00'  />
                
                 <Text  style = {styles.alert}>
                 Create Alert
                 </Text>
                 </View>
                 <TouchableOpacity style = {styles.buy}>
                    <Text style = {styles.ticket} >
                        Buy Ticket 
                    </Text>
                 </TouchableOpacity>
            </View>
            
            </View>
            </ScrollView>





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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Categories);