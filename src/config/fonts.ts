//Open_Sans
import * as openSansTtf from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';
//Roboto
import * as robotoTtf from '../assets/fonts/Roboto/Roboto-Regular.ttf';
export const  fonts = `
    @font-face {
        font-family: open-sans;
        src: 
            url(${openSansTtf}) format("truetype");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: roboto;
        src: 
            url(${robotoTtf}) format("truetype");
        font-style: normal;
        font-weight: 400;
    }
`;