import React, {useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import {FontAwesome, Feather, AntDesign} from '@expo/vector-icons';

const SignupScreen = ({navigation}) => {
  return (
    <View
      style={{flex: 1, justifyContent: 'center', backgroundColor: '#4bacb8'}}>
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
        <Input placeholder="Name" />
        <Input placeholder="Student Id" />
        <Input placeholder="E-Mail Address" />
        <Input placeholder="Password"
        secureTextEntry={true} />
        <Button type="solid" title={'  Sign Up'} />
        <Button
          onPress={() => {
            navigation.navigate('SignIn', {name: 'SignIn'});
          }}
          type="clear"
          title={'  Allready have an Account?'}
        />
      </Card>
    </View>
  );
};
export default SignupScreen;
