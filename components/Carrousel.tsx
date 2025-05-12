import React, { useState, useRef } from "react";
import { StyleSheet, FlatList, View, ViewToken} from "react-native";
import { ImageCarrousel, ImageCarrouselType } from "./elementcarrousel"; 
import CarrouselItem from "./CarrouselItem";
import Animated, { useAnimatedScrollHandler, useReducedMotion, useSharedValue, useAnimatedRef } from "react-native-reanimated";
import Pagination from "./Pagination";


type Props = {

    itemList : ImageCarrouselType[]
}

const Carrousel = ({itemList}: Props) => {

    const scrollX = useSharedValue(0);
    const [paginationPageEtape2, SetpaginationEtape2] = useState(0);
    const [data, setData] = useState(itemList);
    // const ref = useAnimatedRef<Animated.FlatList<any>>();

    const onScrollHandler = useAnimatedScrollHandler({

        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }
    });

    const onViewableItemsChanged = ({viewableItems} : {viewableItems: ViewToken[]  }) => {

        if ( viewableItems[0].index !== undefined && viewableItems[0].index !== null)
            SetpaginationEtape2(viewableItems[0].index % itemList.length );
    };

    const viewabilityConfig = {

        itemVisiblePercentThreshold: 50

    }

    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged},
    ]);

    return (

        <View>

            <Animated.FlatList 
                data={data}
                renderItem={({item, index}) => (
                <CarrouselItem item={item} index={index} scrollX={scrollX}/>
                )} 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScrollHandler}
                scrollEventThrottle={16}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                onEndReached={() => setData([...data, ...itemList])}
                onEndReachedThreshold={0.5}
                />
            <Pagination items={itemList} scrollX={scrollX} paginationPageEtape2={paginationPageEtape2}/>
        </View>

    )
}


const styles = StyleSheet.create({





})

export default Carrousel;