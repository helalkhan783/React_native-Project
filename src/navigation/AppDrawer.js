import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import WeatherScreen from '../screens/WeatherScreen';
import Profile from '../screens/Profile';
import HomeTabScreen from './HomeTab';
import { AuthContext } from '../providers/AuthProvider';

const DrawerStack = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}>
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
    <AuthContext.Consumer>
      {auth => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Logout"
            onPress={() => {
              auth.setIsLoggedIn(false);
              auth.setCurrentUser({});
            }}
          />
        </DrawerContentScrollView>
      )}
    </AuthContext.Consumer>
  );
}
export default DrawerScreen;
