import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';
import { styles } from './styles';



const GlobalStyles = createGlobalStyle`
    ${fonts}
    ${styles}
`;

export const withGlobalStyles = (Component: React.ComponentType) => {
    return (
        <>
            <GlobalStyles/>
            <Component/>
        </>
    )
}