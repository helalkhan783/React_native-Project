import React from 'react';
  import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignIn';
import SignupScreen from '../screens/SignupScreen';
const AuthStack = createStackNavigator();
  
 
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />

      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen