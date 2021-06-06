import React from 'react';
import { SafeAreaView, View, Text, StyleSheet} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign(){

    return(

<SafeAreaView style={styles.container}>
    <View style={styles.input_container}>
    <Input 
    label="Üye Adı"
    placeholder="İsminiz, giriniz..."
    />
      <Input 
    label="Üye Soyadı"
    placeholder="Soyisminiz, giriniz..."
    />
       <Input 
    label="Üye Yaşı"
    placeholder="Yaşınızı giriniz..."
    />
       <Input 
    label="Üye E-posta"
    placeholder="E-posta adresinizi giriniz..."
    />
       <Input 
    label="Üye Şehir"
    placeholder="Şehir giriniz"
    />
    </View>
    <Button text="Kaydı Tamamla" onPress={null} />
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