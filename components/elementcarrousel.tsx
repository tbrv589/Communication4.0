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
        description: 'description caroussee'


    },

    {
        title: "deuxieme",
        image: require('../assets/images/phototest2.png'),
        description: 'description caroussee'


    },

    {
        title: "troisieme",
        image: require('../assets/images/3ckiparle.png'),
        description: 'description caroussee'


    },

    {
        title: "quatrieme",
        image: require('../assets/images/epsi.png'),
        description: 'description caroussee'


    },


];