//Open_Sans
import * as openSansLightTtf from '../assets/fonts/Open_Sans/OpenSans-Light.ttf';
import * as openSansRegularTtf from '../assets/fonts/Open_Sans/OpenSans-Regular.ttf';
import * as openSansSemiBoldTtf from '../assets/fonts/Open_Sans/OpenSans-SemiBold.ttf';
import * as openSansBoldTtf from '../assets/fonts/Open_Sans/OpenSans-Bold.ttf';
//Roboto
import * as robotoLightTtf from '../assets/fonts/Roboto/Roboto-Light.ttf';
import * as robotoRegularTtf from '../assets/fonts/Roboto/Roboto-Regular.ttf';
import * as robotoMediumTtf from '../assets/fonts/Roboto/Roboto-Medium.ttf';
import * as robotoBoldTtf from '../assets/fonts/Roboto/Roboto-Bold.ttf';

export const  fonts = `
    @font-face {
        font-family: open-sans-light;
        src: 
            url(${openSansLightTtf}) format("ttf");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: open-sans;
        src: 
            url(${openSansRegularTtf}) format("ttf");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: open-sans-semibold;
        src: 
            url(${openSansSemiBoldTtf}) format("ttf");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: open-sans-bold;
        src: 
            url(${openSansBoldTtf}) format("ttf");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: roboto-light;
        src: 
            url(${robotoLightTtf}) format("ttf");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: roboto;
        src: 
            url(${robotoRegularTtf}) format("ttf");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: roboto-medium;
        src: 
            url(${robotoMediumTtf}) format("ttf");
        font-style: normal;
        font-weight: 400;
    }
    @font-face {
        font-family: roboto-bold;
        src: 
            url(${robotoBoldTtf}) format("ttf");
        font-style: normal;
        font-weight: 400;
    }
`;