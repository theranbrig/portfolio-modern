import withGA from 'next-ga';
import App from 'next/app';
import Router from 'next/router';
import React from 'react';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return <Component {...pageProps} className={roboto.className} />;
    }
}

export default withGA('UA-127054970-2', Router)(MyApp);
