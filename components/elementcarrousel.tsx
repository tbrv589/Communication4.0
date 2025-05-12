import { ImageSourcePropType } from "react-native";

export type ImageCarrouselType = {

    title: string;
    image : ImageSourcePropType;
    description: string;

};

export const ImageCarrousel = [

    {
        title: "Premier",
        image: require('../assets/images/phototest1.png'),
        description: 'donde esta la bibliotheca lol le mec spanish tsais inglish or spanish'


    },

    {
        title: "deuxieme",
        image: require('../assets/images/phototest2.png'),
        description: 'donde esta la bibliotheca lol le mec spanish tsais inglish or spanish'


    },

    {
        title: "troisieme",
        image: require('../assets/images/phototest1.png'),
        description: 'donde esta la bibliotheca lol le mec spanish tsais inglish or spanish'


    },

    {
        title: "quatrieme",
        image: require('../assets/images/phototest2.png'),
        description: 'donde esta la bibliotheca lol le mec spanish tsais inglish or spanish'


    },


];