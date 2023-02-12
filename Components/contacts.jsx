import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import * as Contacts from 'expo-contacts';

const image = {uri : 'https://i.pinimg.com/originals/f7/ff/70/f7ff700d7cd14db67d12fa706dbe7583.jpg'};

export default function AppContacts() {
useEffect(() => {
  (async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Emails],
      });

      if (data.length > 0) {
        const contact = data[0];
        console.log(contact);
      }
    }
  })();
}, []);

return (
<View style={styles.container}>
<ImageBackground source={image} resizeMode='cover' style={styles.image}>
<Text style={styles.txt}>Contacts Module Example</Text>
</ImageBackground>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
},
image: {
    flex: 1,
    justifyContent: 'center',
  },
txt:{
    color:'#333' , 
    fontSize:20 , 
    fontWeight:'bold' , 
    textAlign:'center',
    backgroundColor:'#fff',
    width:300,
    borderRadius:20,
    margin:30}
});