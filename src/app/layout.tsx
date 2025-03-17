import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Fira_Code, Geist, Geist_Mono, Major_Mono_Display, Open_Sans, Raleway, Roboto } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'theran.dev',
    description: 'The life and times of Theran Brigowatz.',
};

const raleway = Raleway({
    weight: '400',
    subsets: ['latin'],
});

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

const firaCode = Fira_Code({
    weight: '400',
    subsets: ['latin'],
});

const openSans = Open_Sans({
    weight: '400',
    subsets: ['latin'],
});

const majorMono = Major_Mono_Display({
    weight: '400',
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} ${openSans.className} ${firaCode.className} ${majorMono.className} ${raleway.className} `}
            >
                <SpeedInsights />
                <Analytics />
                {children}
            </body>
        </html>
    );
}
