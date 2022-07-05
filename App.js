import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile';
import SignupScreen from './src/screens/SignupScreen';
import SignInScreen from './src/screens/SignIn';
 import { AuthContext } from './src/providers/AuthProvider';
import { AuthProvider } from './src/providers/AuthProvider';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Signup" component={SignupScreen} />
    </HomeStack.Navigator>
  );
};

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

const App = () => {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
     {auth => (
          <NavigationContainer>
         {auth.IsLoggedIn ? <HomeStackScreen/> : <AuthStackScreen />} 
            
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
};
export default App;
//  {  <Drawer.Navigator initialRouteName='Home'>
// <Drawer.Screen name='Home'component={HomeScreen}/>
 
// </Drawer.Navigator>  }

//  { <HomeStackScreen /> }


//note: // Firstly Authprovider provide data / info then authContext get info by consumer and here navigation container child of authprovider,that initial
    // with function in a object
    // here auth indicates 4 variables of authprovider's.
    // if isloggedIn true than load HomestackScreen, otherwise AuthstackScreen 