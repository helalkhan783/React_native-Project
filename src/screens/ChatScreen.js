import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Input, Button, Card,Header} from 'react-native-elements';
import {AuthContext} from '../providers/AuthProvider';

const ChatScreen = () => {
  return (

    <View  style={{flex: 1}}>
         <Header
            centerComponent={{
              text: "Chat",
              style: {color: '#fff'},
            }}
          />

<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Chat Screen</Text>
    </View>
    </View>
   
  );
};
export default ChatScreen;
