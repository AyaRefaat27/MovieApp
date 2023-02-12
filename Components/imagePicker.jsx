import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, ImageBackground, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const imageBack = {uri : 'https://i.pinimg.com/originals/f7/ff/70/f7ff700d7cd14db67d12fa706dbe7583.jpg'}


export default function ImagePickerApp() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={imageBack} resizeMode='cover' style={styles.image}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200,margin:50 }} />}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({

    image: {
      flex: 1,
      justifyContent: 'center',
    }
})
