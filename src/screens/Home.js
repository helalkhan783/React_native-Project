import React, { useEffect } from 'react';
import { Button, Text,  View,  } from 'react-native';

const HomeScreen = ({navigation})=>{
  
    return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text  onPress={()=> navigation.navigate('Profile', { name: 'Profile' })}>Home</Text>
    
    <Button title='Go To Screen List'  onPress={()=> {navigation.navigate('List Screen',{name:'ListScreen'})}}></Button>
    <Button title='Go To Signup'  onPress={()=> {navigation.navigate('Signup',{name:'Signup'})}}></Button>
    </View>);
  }
  export default HomeScreen;
  