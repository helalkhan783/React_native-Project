import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import {FontAwesome, Feather, AntDesign} from '@expo/vector-icons';
import {AuthContext} from '../providers/AuthProvider';
import {
  storeDataJson,
  removeData,
  getStoreDataJson,
} from '../functions/AsyncStorageFunction';

const SignupScreen = ({navigation}) => {
  const [NAME, setName] = useState('');
  const [SID, setStudenId] = useState('');
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
                Welcome to Sign Up
              </Text>
            </View>
            <Card.Divider />
            <Input
              placeholder="Name"
              onChangeText={currentInput => {
                setName(currentInput);
              }}
            />
            <Input
              placeholder="Student Id"
              onChangeText={currentInput => {
                setStudenId(currentInput);
              }}
            />
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
              title={'Sign Up'}
              onPress={() => {
                let currentUser = {
                  name: NAME,
                  studentId: SID,
                  email: Email,
                  password: Password,
                };

                console.log('ok', currentUser);

                storeDataJson(Email, currentUser);
                navigation.navigate('SignIn', {name: 'SignIn'});
              }}
            />
            <Button
              onPress={() => {
                navigation.navigate('SignIn', {name: 'SignIn'});
              }}
              type="clear"
              title={'  Allready have an Account?'}
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};
export default SignupScreen;
