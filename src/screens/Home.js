import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Input, Button, Card, Header} from 'react-native-elements';
import {AuthContext} from '../providers/AuthProvider';

const HomeScreen = ({navigation}) => {
  return (
    <AuthContext.Consumer>
      {auth => (
        <View style={{flex: 1}}>
          <Header
            leftComponent={{icon: 'menu', color: '#fff' ,onPress: ()=>{
              navigation.toggleDrawer();
            }}}
            centerComponent={{text: 'My App', style: {color: '#fff'}}}
            rightComponent={{icon: 'home', color: '#fff',onPress: ()=>{
              auth.setIsLoggedIn(false);
              auth.setCurrentUser({});
            }}}
          />

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{fontSize: 24, fontWeight: 'bold'}}
              onPress={() => navigation.navigate('Profile', {name: 'Profile'})}>
              WelCome Mr {auth.CurrentUser.name} !
            </Text>

          
          </View>
        </View>
      )}
    </AuthContext.Consumer>
  );
};
export default HomeScreen;
