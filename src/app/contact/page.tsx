'use client';
import ContactLink from '@/components/ContactLink';
import ContactPageStyles from '@/components/styles/ContactPageStyles';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Layout from '../../components/Layout';

const Contact = () => {
    return (
        <Layout>
            <NextSeo title='Theran Brigowatz | Home' description='Get in touch with me about work opportunities' />
            <ContactPageStyles>
                <motion.div
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}
                >
                    <div className='contact'>
                        <div className='contact-title'>
                            <h1>Contact Info</h1>
                            <p>Find me at the following</p>
                        </div>
                        <div className='social-icons'>
                            <ContactLink link='https://www.github.com/theranbrig' icon='github-blue' name='github' />
                            <ContactLink link='https://dev.to/theranbrig' icon='dev' name='dev.to' />
                            <ContactLink link='https://www.linkedin.com/in/theran-brigowatz/' icon='linkedin' name='linkedin' />
                            <ContactLink link='mailTo:theran.brigowatz@gmail.com' icon='mail' name='email' />
                        </div>
                        <div className='bottom-writing'>
                            <p>
                                I am available to discuss freelance, contract, and full-time work opportunities. Check out my{' '}
                                <a
                                    href='https://drive.google.com/file/d/1K-xxStoPKcvy6EF7XDYYskycWUKJttLF/view?usp=sharing'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    resume.
                                </a>{' '}
                                Please get in touch with me, or check out my{' '}
                                <Link href='/blog'>
                                    <span>blog</span>
                                </Link>
                                , with any questions, comments, or biting criticism that you may have.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </ContactPageStyles>
        </Layout>
    );
};

export default Contact;
