import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { ImageCarrousel } from "./elementcarrousel"; 
import CarrouselItem from "./CarrouselItem";


const Carrousel = () => {



    return (

        <View>

            <FlatList data={ImageCarrousel} renderItem={({item, index}) => (
                <CarrouselItem item={item} index={index} />
                )} 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                />
            
        </View>

    )
}


const styles = StyleSheet.create({





})

export default Carrousel;