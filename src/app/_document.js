import Document, { Head, Main, NextScript } from 'next/document';

import { DefaultSeo } from 'next-seo';
import SEO from '../seo.config';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
            <html lang='en'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta name='theme-color' content='#272727' />
                    <DefaultSeo {...SEO} />
                    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                    <link rel='manifest' href='/manifest.json' />
                    <link rel='icon' type='image/x-icon' href='/favicon.ico' />
                    <link rel='/apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                    {this.props.styleTags}
                    <meta name='description' content='Theran Brigowatz - Web Developer and UI Consultant' />
                    <meta property='og:title' content='Theran Brigowatz - Web Developer and UI Consultant' />
                    <meta property='og:description' content='All about me. A software engineer and UI Consultant.' />
                </Head>
                <body style={{ margin: '0', width: '100%', backgroundColor: '#272727' }}>
                    <Main />
                    <NextScript />
                </body>
                <script></script>
            </html>
        );
    }
}

export default MyDocument;
