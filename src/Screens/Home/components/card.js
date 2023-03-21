import React from  "react"
import { View , Text , TouchableOpacity } from 'react-native';
import styles from "../styles" ;
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Card extends React.Component {
    constructor(props){
        super(props)
        this.state={
           
        }
      };

render(){
      return(
<View style = {styles.container2}>
                    <View style = {{flexDirection : 'row' , marginTop : 5,justifyContent:"space-between",paddingHorizontal:10 }}>
                        <View style = {{flexDirection : 'row' ,alignItems:"center" }}>
                        <FontAwesome name ="bus" size = {30} color = '#ff8c00' />
                        <Text style = {styles.b4}>
                            {this.props.data.NameBus}
                        </Text> 
                        </View>
                      
                        <FontAwesome name ="heart" size = {30} color = '#4169e1' />
                    </View>
                    <View style = {{flexDirection : 'row' }}>
                        <Text style = {styles.start}>
                            start : 
                        </Text>
                        <Text  style = {styles.mtorech}>
                        {this.props.data.Stations}
                        </Text>

                    </View>
                    <View style = {{flexDirection : 'row' }}>
                        <Text style = {styles.start}>
                            End   : 
                        </Text>
                        <Text  style = {styles.mtorech}>
                            Manzel
                        </Text>

                    </View>
                    <View style = {{flexDirection : 'row' ,alignItems:"center",justifyContent:'center' }}>
                        <View style = {styles.create}>
                            <Ionicons  name ="radio-button-on" marginLeft = {5} size = {25} color = '#ff8c00'  />
                        
                            <Text  style = {styles.alert}>
                            Create Alert
                            </Text>
                        </View>
                         <TouchableOpacity style = {styles.buy} >
                            <Text style = {styles.ticket} >
                                Buy Ticket 
                            </Text>

                         </TouchableOpacity>
                    </View>
                    </View>
    )
}

}