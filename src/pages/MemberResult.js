import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

function MemberResult({route}){
const {user} = route.params;

    return(
        <SafeAreaView>
            <Text style={styles.label}>Üye Adı: {user.userName} </Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname} </Text>
            <Text style={styles.label}>Üye Yaş: {user.userAge} </Text>
            <Text style={styles.label}>Üye E-posta: {user.userMail} </Text>
            <Text style={styles.label}>Üye Şehir: {user.userHometown} </Text> 
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({

label:{
    fontWeight:'bold',
    fontSize:20,
    margin: 5,
},
});

export default MemberResult;