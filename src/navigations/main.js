import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from "./authNavigation"
import HomeNavigation from "./homeNavigation"

const Stack = createNativeStackNavigator();
import { connect } from 'react-redux';
 class MainNavigation extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            isLogin:false
        }
    }

    render() {
         return (<Stack.Navigator>
           
            {this.props.user.objectId==undefined?
            <Stack.Screen options={{
                headerShown: false
            }}
                name="AuthNavigation" component={AuthNavigation} />
                :

            <Stack.Screen options={{
                headerShown : false 
            }}
                name="HomeNavigation" component={HomeNavigation} />}
        </Stack.Navigator>)
    }
}

const mapStateToProps = state => {
    return {
      user: state.auth.user,
    };
  
  };


  const mapDispatchToProps = {

  };

  export default connect(mapStateToProps, mapDispatchToProps)(MainNavigation);
  
