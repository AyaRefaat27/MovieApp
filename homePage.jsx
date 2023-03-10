import { Button } from "@react-native-material/core";
import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const image = {uri : 'https://onechelofanadventure.com/wp-content/uploads/2021/01/Tips-on-How-to-Have-the-Best-Movie-Date-Night-At-Home.png'}
export default function HomePage({navigation}) {
  return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <TouchableOpacity>
                <Text 
                    style={styles.btn}
                    onPress={()=>{
                    navigation.navigate('Services');
                    Alert.alert('Welcome To Our Movie APP')
                }}>
                    Get Started
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text:{
    textAlign: "center",
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  btn:{
    textAlign: "center",
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#242222ad',
    width: 200,
    padding:10 ,
    marginLeft:'auto', 
    marginRight:'auto' ,
    marginTop: 20,
    borderRadius: 10,
    elevation: 15,
    shadowColor: '#52006A',
  }
});