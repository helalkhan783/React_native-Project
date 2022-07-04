import React, { useEffect } from 'react';
import { Button,FlatList, Text,  View,  } from 'react-native';

const ListScreen = ({navigation})=>{
  const list = [{name:'BUET' ,key:'1'},{name:'BUET',key:'2'},{name:'IUT',key:'3'},{name:'DU',key:'4'},{name:'BUET',key:'5'},{name:'RUET',key:'6'},{name:'KUET',key:'7'},{name:'CUET',key:'8'},{name:'SUST',key:'9'},{name:'RU',key:'10'},{name:'AUST',key:'11'},{name:'BRAC',key:'12'},{name:'MUC',key:'13'}];

    return(
    <View style={styles.viewStyle}><Text>List Screen</Text>

    <FileList
    data={list}
    renderItem={({item})=>{ return(<Text style={styles.textStyle}>{item.name}</Text>)}}
    >


    </FileList>
    
     </View>);
  }
  export default ListScreen;

  const styles =StyleSheet.create({
    textStyle:{
        fontsize:30,
        color:'blue',
        marginVertical:30
    },
    viewStyle:{
   borderColor:'red',
   borderWidth:5,

    }
  })