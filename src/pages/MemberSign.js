import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}){
  const [userName, setUserName] = useState(null);
  const [userSurname, setUserSurname] = useState(null);
  const [userAge, setUserAge] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userHometown, setUserHometown] = useState(null);

  function handleSubmit(){
    if (!userName || !userSurname || !userAge || !userMail || !userHometown) {
        Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!');
        return;
      }  

    const user={
      userName,
      userSurname,
      userMail,
      userAge,
      userHometown
    };
    navigation.navigate('MemberResultScreen', {user});
  }

    return(
      
      <SafeAreaView style={styles.container}>
    <View style={styles.input_container}>
    <Input 
    label="Üye Adı"
    placeholder="İsminiz, giriniz..."
    onChangeText={setUserName} // bu şekilde direk değişen texti alır
    />
      <Input 
    label="Üye Soyadı"
    placeholder="Soyisminiz, giriniz..."
    onChangeText={setUserSurname} 
    />
       <Input 
    label="Üye Yaşı"
    placeholder="Yaşınızı giriniz..."
    onChangeText={setUserAge} 
    />
       <Input 
    label="Üye E-posta"
    placeholder="E-posta adresinizi giriniz..."
    onChangeText={setUserMail} 
    />
       <Input 
    label="Üye Şehir"
    placeholder="Şehir giriniz"
    onChangeText={setUserHometown} 
    />
    </View>
    <Button text="Kaydı Tamamla" onPress={handleSubmit} />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
    
    },
    input_container:{
        width:'90%',
      
    }
});

export default MemberSign;