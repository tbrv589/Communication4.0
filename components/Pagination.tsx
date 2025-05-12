import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from 'react'
import { ImageCarrouselType } from "./elementcarrousel";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { scriptable } from "three/tsl";


type Props = {

    items: ImageCarrouselType[];
    paginationPageEtape2: number;
    scrollX: SharedValue<number>;
}

const { width } = Dimensions.get("screen");

const Pagination = ({items, paginationPageEtape2, scrollX }: Props) => {

    return (
        <View style = {styles.container}> 
            {items.map((_,index) => {
               
                const pgAnimationStyle = useAnimatedStyle(() => {
                    const doWith = interpolate(
                        scrollX.value,
                        [(index-1) * width, index * width, (index+1) * width ],
                        [8, 20, 8],
                        Extrapolation.CLAMP
                    );

                    return{
                        width: doWith,
                    }
                });
                return (
                    <Animated.View key={index} 
                          style = {[
                        styles.point,
                        // pgAnimationStyle,
                        { backgroundColor: paginationPageEtape2 === index ? "#222" : "#aaa"},
                     ]}
                />
                );
            } )}
        </View>
    )

}

const styles = StyleSheet.create({

    container: {

        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',


    },

    point: {

        backgroundColor: '#aaa',
        height: 8,
        width: 8,
        marginHorizontal: 2,
        borderRadius: 8,

    },
})

export default Pagination;