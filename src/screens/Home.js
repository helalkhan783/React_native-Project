import React, { useEffect } from 'react';
import { Text,  View,  } from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import { AuthContext } from '../providers/AuthProvider';

const HomeScreen = ({navigation})=>{
    return(
    <AuthContext.Consumer>
     {(auth)=>( 
     <View style={{flex:1,justifyContent:'center',alignItems:'center',}}><Text style={{fontSize:24,fontWeight:'bold'}}  onPress={()=> navigation.navigate('Profile', { name: 'Profile' })}>WelCome Mr {auth.CurrentUser.name} !</Text>
    
     <Button type='outlline' title='Log Out'  onPress={()=> { 
      auth.setIsLoggedIn(false);
      auth.setCurrentUser({})
     }}/>
   
    </View>
               )}
    </AuthContext.Consumer>
    
      );
  }
  export default HomeScreen;
  