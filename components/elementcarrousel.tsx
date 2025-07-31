import { ImageSourcePropType } from "react-native";

export type ImageCarrouselType = {

    title: string;
    image : ImageSourcePropType;
    description: string;

};

export const ImageCarrousel = [

    {
        title: "Premier",
        image: require('../assets/images/photo_test11.png'),
        description: 'description caroussee'


    },

    {
        title: "deuxieme",
        image: require('../assets/images/photo_test22.png'),
        description: 'description caroussee'


    },

    {
        title: "troisieme",
        image: require('../assets/images/33ckiparle.png'),
        description: 'description caroussee'


    },

    {
        title: "Soirée Post Bac",
        image: require('../assets/images/epsii.png'),
        description: 'description caroussee'


    },


];