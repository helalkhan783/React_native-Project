import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Input, Button, Card,Header} from 'react-native-elements';
import AppHeader from '../Header';

const NotificationScreen = () => {
  return (
    <View style={{flex: 1}}>
          <Header
            centerComponent={{
              text: "Notification",
              style: {color: '#fff'},
            }}
          />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Notification Screen</Text>
      </View>
    </View>
  );
};
export default NotificationScreen;
