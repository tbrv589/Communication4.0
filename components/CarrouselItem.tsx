import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, Animated } from "react-native";
import { ImageCarrouselType } from "./elementcarrousel";
import LinearGradient from "react-native-linear-gradient";
import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";

type Props = {
  item: ImageCarrouselType;
  index: number;
  scrollX: SharedValue<number>
};

    const { width } = Dimensions.get("screen");
    const ITEM_WIDTH = width * 0.7;

const CarrouselItem = ({ item, index, scrollX }: Props) => {

    const StyleAnimation = useAnimatedStyle(() => {

        return{

            transform: [

                {
                    translateX: interpolate(
                        scrollX.value,
                        [(index-1) * width, index * width, (index+1) * width ],
                        [-width * 0.25, 0, width* 0.25],
                        Extrapolation.CLAMP
                    ),
                },
                {
                  scale : interpolate(

                    scrollX.value,
                    [(index-1) * width, index * width, (index+1) * width ],
                    [0.9, 1, 0.9],
                    Extrapolation.CLAMP
                  ),
                }
            ]

        }

    })

  return (
    <Animated.View style={[styles.itemContainer, StyleAnimation]}>
      <Image source={item.image} style={styles.image} />

      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={styles.background}
      >
        <Text style={styles.title}>{item.title}</Text>

      </LinearGradient>



    </Animated.View>
  );
};

export default CarrouselItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: ITEM_WIDTH,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    position: "relative",
    gap: 20
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  background: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1.5,
  },
});


