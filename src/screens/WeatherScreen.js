import React, { useEffect } from 'react';
import { Text,  View,  } from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import { AuthContext } from '../providers/AuthProvider';

const WeatherScreen = ()=>{
    return(
        <AuthContext.Consumer>
        {(auth)=>(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text>Weather Screen</Text></View>
        )}
        </AuthContext.Consumer>
   
    );
  }
  export default WeatherScreen;