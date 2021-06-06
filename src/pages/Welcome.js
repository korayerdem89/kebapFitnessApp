import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import Button from '../components/Button';

function Welcome({navigation}) {

function goToMemberSign(){
navigation.navigate('MemberSignScreen');
}

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.header}>Kebap fitness Salonu</Text>
      <Button
      text="Üye Kaydı Oluşturun"
      onPress={goToMemberSign}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
header:{
  justifyContent:'center',
  textAlign:'center',
  padding:10,
  fontSize:30,
  fontWeight:'bold'
}
});


export default Welcome;
  