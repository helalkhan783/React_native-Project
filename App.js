import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from './src/providers/AuthProvider';
import {AuthProvider} from './src/providers/AuthProvider';
import AuthStackScreen from './src/navigation/AuthStack';
import DrawerScreen from './src/navigation/AppDrawer';

const App = () => {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {auth => (
          <NavigationContainer>
            {auth.IsLoggedIn ? <DrawerScreen /> : <AuthStackScreen />}
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
