import React, {useEffect,useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import {FontAwesome, Feather, AntDesign} from '@expo/vector-icons';
import {AuthContext} from '../providers/AuthProvider';
import { getStoreDataJson } from '../functions/AsyncStorageFunction';
const SignInScreen = ({navigation}) => {
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  return (
    <AuthContext.Consumer>
      {auth => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#4bacb8',
          }}>
          <Card>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Welcome to AuthApp
              </Text>
            </View>

            <Card.Divider />

            <Input
              placeholder="E-Mail Address"
              onChangeText={currentInput => {
                setEmail(currentInput);
              }}
            />

            <Input
              placeholder="Password"
              onChangeText={currentInput => {
                setPassword(currentInput);
              }}
              secureTextEntry={true}
            />

            <Button
              type="solid"
              title={'Login'}
              onPress={async () => {
                let UserData = await getStoreDataJson(Email);
                if (UserData.password == Password && UserData.email == Email) {
                  auth.setIsLoggedIn(true);
                  auth.setCurrentUser(UserData);
                } else {
                  alert('Login Failed');
                  console.log(UserData);
                }
              }}
            />

            <Button
              onPress={() => {
                navigation.navigate('Signup', {name: 'Signup'});
              }}
              type="clear"
              title={'  Do not have an Account?'}
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

export default SignInScreen;
