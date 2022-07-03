 
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
 import HomeScreen from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/screens/Profile';

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

 const App = ()=>{
  return( 
  <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home'component={HomeScreen}/>
      <Drawer.Screen name='Profile'component={Profile}/>
    </Drawer.Navigator>
      {/* <Stack.Navigator>
      <Stack.Screen name='Home'component={HomeScreen}/>
      <Stack.Screen name='Profile'component={Profile}/>
    </Stack.Navigator> */}
  </NavigationContainer>
   )
 }
export default App;
