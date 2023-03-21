import React from 'react';
import styles from "./styles" ;
import {saveDataUser} from "../../redux/auth/actions" ;
import { connect } from 'react-redux';
import { View } from 'react-native';




class Notification extends React.Component {
    constructor(props){
        super(props)
        this.state={
        }
      };



    render()
    {
        return (
            <View>

                
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Notification);