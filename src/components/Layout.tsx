'use client';

import { ThemeProvider, createGlobalStyle } from 'styled-components';

import React from 'react';
import Nav from './Nav';

const darkTheme = {
    darkBlack: '#131313',
    black: '#181818',
    white: '#fefefe',
    lightBlue: '#ebf5f9',
    blue: '#40a4c8',
    darkBlue: '#2c728c',
    orange: '#ffb86c',
    transparent: '#13131394',
    raleFont: 'Raleway',
    robFont: 'Roboto',
    spaceFont: "'Major Mono Display', monospace",
    firaFont: "'Fira Code', monospace",
    openFont: '"Open Sans", sans-serif',
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    min-height: 100vh;
  }
`;

// later in your app
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={darkTheme}>
            <React.Fragment>
                <GlobalStyle />
                <Nav>{children}</Nav>
            </React.Fragment>
        </ThemeProvider>
    );
};

export default Layout;
