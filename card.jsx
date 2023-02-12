import { Avatar } from "@react-native-material/core"
import { Image, StyleSheet, Text, View } from "react-native"


export default function ImgCard(props){
    return(
        <View style={styles.container}>
                <Avatar
                    style={{ marginTop: 10}}
                    image = {{
                        uri: props.imgLink
                    }}
                >
                </Avatar>
                <Text style={styles.text}>
                    {props.mvName}
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        backgroundColor:"#fff",
        margin:20,
        padding : 10,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 10,
        elevation: 15,
        shadowColor: '#52006A',
    },
    text:{
        marginTop: 15 , 
        padding:10 , 
        fontSize: 15 , 
    }
})