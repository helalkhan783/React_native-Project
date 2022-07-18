import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity, Text} from 'react-native';

import HomeScreen from './src/screens/Home';
import Profile from './src/screens/Profile';
import SignupScreen from './src/screens/SignupScreen';
import SignInScreen from './src/screens/SignIn';

import {AuthContext} from './src/providers/AuthProvider';
import {AuthProvider} from './src/providers/AuthProvider';
import {HeaderContext} from './src/providers/HeaderProviders';
import {HeaderProvider} from './src/providers/HeaderProviders';
import NotificationScreen from './src/screens/NotificationScreen';
import WeatherScreen from './src/screens/WeatherScreen';
import ChatScreen from './src/screens/ChatScreen';

const HomeStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const AuthStack = createStackNavigator();
const HomeTab = createMaterialBottomTabNavigator();

const DrawerScreen = () => {
  return (
    <DrawerStack.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <DrawerStack.Screen
        name="Home"
        component={HomeTabScreen}
        options={{headerShown: false}}
      />
      <DrawerStack.Screen name="Profile" component={Profile} />
      <DrawerStack.Screen name="Weather" component={WeatherScreen} />
      
    </DrawerStack.Navigator>
  );
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Logout" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const HomeTabScreen = () => {
  return (
    <HeaderProvider>
      <HeaderContext.Consumer>
        {header => (
          <HomeTab.Navigator
            initialRouteName="Home"
            activeColor="white"
            barStyle={{backgroundColor: '#3695E0'}}>
            <HomeStack.Screen
              name='"Home'
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <MaterialCommunityIcons
                      name="home"
                      color={'yellow'}
                      size={26}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="home"
                      color={'white'}
                      size={22}
                    />
                  ),
              }}
            />
            <HomeStack.Screen
              name='"Notification'
              component={NotificationScreen}
              options={{
                tabBarLabel: 'Notification',

                tabBarIcon: ({focused}) =>
                  focused ? (
                    <MaterialCommunityIcons
                      name="bell"
                      color={'yellow'}
                      size={26}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="bell"
                      color={'white'}
                      size={26}
                    />
                  ),
              }}
            />
            <HomeStack.Screen
              name='"ChatScreen'
              component={ChatScreen}
              options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({focused}) =>
                  focused ? (
                    <MaterialCommunityIcons
                      name="bell"
                      color={'yellow'}
                      size={26}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="bell"
                      color={'white'}
                      size={26}
                    />
                  ),
              }}
            />
          </HomeTab.Navigator>
        )}
      </HeaderContext.Consumer>
    </HeaderProvider>
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
