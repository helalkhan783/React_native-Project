import React, {useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import {FontAwesome, Feather, AntDesign} from '@expo/vector-icons';

const SignInScreen = ({navigation}) => {
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
            Welcome to AuthApp
          </Text>
        </View>

        <Card.Divider />

        <Input placeholder="E-Mail Address" secureTextEntry={true} />

        <Input placeholder="Password"  secureTextEntry={true} />

        <Button type="solid" title={'Login'} />

        <Button
          onPress={() => {
            navigation.navigate('Signup', {name: 'Signup'});
          }}
          type="clear"
          title={'  Do not have an Account?'}
        />
      </Card>
    </View>
  );
};


 

export default SignInScreen;
