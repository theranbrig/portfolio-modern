'use client';

import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import IconLink from '../components/IconLink';
import Layout from '../components/Layout';
import HomePageStyles from '../components/styles/HomePageStyles';

const Home = () => {
    const strings = ["I'm a Web Developer<br/> and UI Consultant."];

    return (
        <Layout>
            <motion.div
                exit={{ opacity: 0, scale: 0 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}
            >
                <HomePageStyles>
                    <div className='main-content'>
                        <div className='splash-box'>
                            <h1>therAn briGoWAtz</h1>
                            <div className='typed-content'>
                                <ReactTyped strings={strings} typeSpeed={50} backSpeed={50} style={{ whiteSpace: 'pre' }} />
                            </div>
                            <div className='splash-icons'>
                                <IconLink name='Theran Brigowatz Github' link='https://github.com/theranbrig' icon='github-blue' alt='Link to GitHub' />
                                <IconLink name='Theran Brigowatz linked in' link='https://dev.to/theranbrig' icon='dev' alt='Link to Dev.to' />
                                <IconLink
                                    name='Theran Brigowatz Linkedin'
                                    link='https://linkedin.com/in/theran-brigowatz'
                                    icon='linkedin'
                                    alt='Link to Linkedin'
                                />
                            </div>
                        </div>
                    </div>
                </HomePageStyles>
            </motion.div>
        </Layout>
    );
};

export default Home;
