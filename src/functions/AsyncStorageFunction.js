import React from 'react';
import {AsyncStorage} from 'react-native';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    alert('Data stored Successfully!');
  } catch (error) {
    alert(error);
  }
};

const getStoreData = async key => {
  let data = await AsyncStorage.getItem(key);
  if (data != null) {
    return data;
  } else {
    alert('NO Data Found!');
  }
};

const storeDataJson = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await  AsyncStorage.setItem(key, jsonValue);
    alert('Data stored Successfully!');
  } catch (error) {
    alert(error);
  }
};

const getStoreDataJson = async (key) => {
  try {
    let data = await AsyncStorage.getItem(key);
    if (data != null) {
      const jsonValue = JSON.parse(data);
      return jsonValue;
    }
  } catch (error) {
    alert(error);
  }
};

const removeData = (key)=>{

    try {
           AsyncStorage.removeItem(key);
        alert('Data Stored Successfully!');
    } catch (error) {
        alert(error)
    }
}


export {storeData,storeDataJson,getStoreData,getStoreDataJson,removeData}