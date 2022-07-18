import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Input, Button, Card, Header} from 'react-native-elements';
import {HeaderContext} from './providers/HeaderProviders';

const AppHeader = () => {
  return (
    <HeaderContext.Consumer>
      {header => (
        <View>
          <Header
            centerComponent={{
              text: header.Consumer.HeaderText,
              style: {color: '#fff'},
            }}
          />
        </View>
      )}
    </HeaderContext.Consumer>
  );
};

export default AppHeader;
