'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts, TBlogPost } from '../../../../public/data';
import Layout from '../../../components/Layout';
import Post from '../../../components/Post';
import BlogPageStyles from '../../../components/styles/BlogPageStyles';

export default function BlogId({}) {
    const params = useParams();

    if (!params || !params.slug) return null;

    const post = blogPosts.find((post) => post.slug === params.slug);
    const { title, image } = post as TBlogPost;

    return (
        <Layout>
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
                        <div className='back-link'>Back</div>
                    </Link>
                    <p style={{ textAlign: 'right' }}>Author: Theran Brigowatz</p>
                    <Post slug={params.slug as string} />
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
                        <div className='back-link'>Back</div>
                    </Link>
                </motion.div>
            </BlogPageStyles>
        </Layout>
    );
}
