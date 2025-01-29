'use client';

import BlogPageStyles from '@/components/styles/BlogPageStyles';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { blogPosts } from '../../../../public/data';
import Layout from '../../../components/Layout';

export async function getProps(slug: string) {
    // const { year, id } = params;

    const post = await import(`../../content/${slug}.mdx`);
    return post.default;
}

const blogId = async ({}) => {
    const params = useParams();
    const Post = await getProps(params.slug as any);

    const post = blogPosts.find((post) => post.slug === params.slug);
    const { title, image, alt, description, year, slug } = post as any;

    const codeBlock = (props: { children: string; className?: string }) => {
        console.log(props);
        return (
            <SyntaxHighlighter
                language={props.className}
                style={atomOneDark}
                useInlineStyles
                customStyle={{ fontFamily: "'Fira Code', monospace", width: 'auto', display: 'inline-block' }}
                class={props.className ? 'language' : 'no-language'}
            >
                {props.children}
            </SyntaxHighlighter>
        );
    };

    const overrideComponents = {
        code: codeBlock,
    };

    return (
        <Layout>
            <NextSeo
                title={`Theran Brigowatz | ${title}`}
                description={description}
                openGraph={{
                    url: `https://theran.dev/blog/${slug}`,
                    images: [{ url: image, alt }],
                }}
            />
            <BlogPageStyles>
                <motion.div
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}
                >
                    <div className='hero-section'>
                        <div className='hero-image-container'>
                            <img className='hero-image' src={image} alt={`${title} background`} />
                        </div>
                        <div className='hero-text-container'>
                            <h1 className='hero-text'>{title}</h1>
                        </div>
                    </div>
                    <Link href='/blog'>
                        <div className='back-link'>
                            {/* <img src={Return} alt='back arrow' /> */}
                            Back
                        </div>
                    </Link>
                    <p style={{ textAlign: 'right' }}>Author: Theran Brigowatz</p>
                    <Post components={overrideComponents} />
                    <p>
                        Check out more of my articles, projects, and other content at{' '}
                        <Link href='/blog'>
                            <span>theran.dev</span>
                        </Link>{' '}
                        or on{' '}
                        <a href='https://twitter.com/wellBuilt' target='_blank' rel='noopener noreferrer'>
                            twitter
                        </a>
                        .
                    </p>
                    <Link href='/blog'>
                        <div className='back-link'>
                            {/* <Image src={`/public/return`} alt='back arrow' /> */}
                            Back
                        </div>
                    </Link>
                </motion.div>
            </BlogPageStyles>
        </Layout>
    );
};

export default blogId;
