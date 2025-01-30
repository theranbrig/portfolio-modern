'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '../../../public/data';
import Layout from '../../components/Layout';
import BlogsStyles from '../../components/styles/BlogsStyles';

const Blogs = () => {
    const posts = blogPosts.sort((a, b) => b.unix - a.unix);

    return (
        <Layout>
            <motion.div
                exit={{ opacity: 0, scale: 0 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}
            >
                <BlogsStyles>
                    <h1>Blog</h1>
                    <p className='dev'>
                        All blog posts can also be found over at{' '}
                        <a href='https://dev.to/theranbrig' target='_blank' rel='noopener noreferrer'>
                            dev.to
                        </a>
                    </p>
                    <div className='posts'>
                        {posts.map((post) => (
                            <Link href='/blog/[year]?id=[id]' as={`/blog/${post.slug}`} key={post.slug}>
                                <div className='post-container'>
                                    <img src={post.image} alt={post.title} />
                                    <div className='post-description'>
                                        <h2>{post.title}</h2>
                                        <div>
                                            <p>{post.description}</p>
                                            <p className='date'>{post.dateString}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </BlogsStyles>
            </motion.div>
        </Layout>
    );
};

export default Blogs;
