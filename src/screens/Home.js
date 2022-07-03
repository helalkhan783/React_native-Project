import React, { useEffect } from 'react';
import { Text,  View,  } from 'react-native';

const HomeScreen = ({navigation})=>{
  
    return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text  onPress={()=> navigation.navigate('Profile', { name: 'Profile' })}>Home</Text></View>);
  }
  export default HomeScreen;
  