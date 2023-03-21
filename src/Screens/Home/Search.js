import React from 'react';
import { View  , TextInput , FlatList , Text } from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class Serach extends React.Component {

    constructor(props){
        super(props)
        this.state={
            data : [
                {name : 'mtorech'}
                
            ]
      
        }
      };

    render()
    {
        return (
            <View style = {styles.container}>
                <FontAwesome style= {styles.left} name ="arrow-circle-left" size = {30} color = '#FFF' 
                onPress={()=>this.props.navigation.navigate("Home")}/>
            <View style = {styles.searchBar}> 
                <FontAwesome style = {styles.searchIcon} name ="search" size = {20} color = '#000000' />  
                <TextInput style = {styles.TextInputSearch} placeholder ="Search ..." placeholderTextColor={'#ff8c00'}  />
                <FontAwesome style = {styles.searchIcon}  name ="close" size = {20} color = '#000000' />   
            </View>
            <View style = {styles.container1}>
                <FlatList>
                    data= {this.state.data}
                    renderItem = {({item})=><Text>{item.name}</Text>} 
                </FlatList>
            
           
            </View>
            </View>
        );
    }
}


export default Serach