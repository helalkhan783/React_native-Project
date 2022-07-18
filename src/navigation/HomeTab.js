import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ChatScreen from "../screens/ChatScreen";
import HomeScreen from "../screens/Home";
import NotificationScreen from "../screens/NotificationScreen";
import { HeaderContext, HeaderProvider } from '../providers/HeaderProviders';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createStackNavigator} from '@react-navigation/stack';

const HomeTab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

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
  export default HomeTabScreen