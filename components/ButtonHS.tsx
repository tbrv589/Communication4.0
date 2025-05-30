import React from "react";
import { StyleSheet, SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";




const ButtonHS = () => {

const navigation = useNavigation<any>()

    return(

        <TouchableOpacity style = {styles.Button} onPress={() => navigation.navigate(HomeScreen) }>

        <Image style = {styles.image} source={require('../assets/images/design figma/legoicone.png')}/> 


        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({

Button:{

    position: 'absolute',
    pointerEvents: 'box-none',
    zIndex: 100,

},


image:{

    height: 200,
    width: 200,
    alignContent: 'center',
    top: 50,
    
},




})


export default ButtonHS