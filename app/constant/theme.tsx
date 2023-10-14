import { extendTheme } from 'native-base'
import {Dimensions} from 'react-native'


export const width = Dimensions.get('screen').width
export const height = Dimensions.get('screen').height
// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
};

const newColorTheme = {
    brand: {
        900: "#333333",
        800: "#72ac93",
        700: "#b3bef6",
    },


    primary: {
        50: "#b8d5c9",
        100: "#aacdbe",
        200: "#9cc4b3",
        300: "#8ebca8",
        400: "#80b49d",
        500: "#72ac93",
        600: "#72ac93",
        700: "#669a84",
        800: "#5b8975",
        900: "#4f7866",
      },
      secondary: {
        50: "#efd59a",
        100: "#eccd85",
        200: "#e9c471",
        300: "#e6bc5d",
        400: "#e3b449",
        500: "#e0ac35",
        600: "#e0ac35",
        700: "#c99a2f",
        800: "#b3892a",
        900: "#9c7825",
      },
};
export const COLORS = {
    white:'#ffffff',
    dark:'#000000',
    red:'#F52A2A',
    light:'#F1F1F1',
    gray:'#D3D3D3',
    primary:'#72ac93',
    iconGray:'#555555',
    neutral:"#F9F9F9",
    secondary:"#e0ac35",
    main:"#72ac93"
}


const customizeComponent = {
    Text:{
      baseStyle:{
        rounded:5,
      },
        defaultProps:{
        }

    }
}




// extend the theme
export const theme = extendTheme({ config, colors: newColorTheme, components:customizeComponent });
