import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { ImageCarrouselType } from "./elementcarrousel";
import LinearGradient from "react-native-linear-gradient";


type Props = {

    item: ImageCarrouselType;
    index: number;

}

const {width} = Dimensions.get('screen')

const CarrouselItem = ({item, index}: Props) => {

    return(

        <View style={styles.ItemContainer}>
            <Image source={item.image} style={styles.image}/>
            {/* <LinearGradient colors={['transparent', 'rgba(0,0,0,0']} style={styles.background}> */}

            <Text> {item.title}</Text>

            {/* </LinearGradient> */}
            
        </View>

        

    )

}

export default CarrouselItem

const styles = StyleSheet.create({


    image: {

        width: 150,
        height: 250,
        borderRadius: 20,


    },

    ItemContainer:{

    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    width: width

    },

    background:{

    position: 'absolute',
    height: 150,
    width: 250,
    padding: 20,
    borderRadius: 20,
    }

})