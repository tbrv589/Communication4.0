import { Dimensions } from "react-native";

const {width, height} = Dimensions.get('window');

export const wd = (percent: number) => (width * percent ) / 100;
export const hd = (percent: number) => (height * percent ) / 100;