'use client';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import data from '../../../public/data';
import Layout from '../../components/Layout';
import PortfolioPageStyles from '../../components/styles/PortfolioPageStyles';

const Portfolio = () => {
    return (
        <Layout>
            <NextSeo title='Theran Brigowatz | Portfolio' description='Check out some of the work that I have done.' />
            <motion.div
                exit={{ opacity: 0, scale: 0 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}
            >
                <PortfolioPageStyles>
                    <h1>Portfolio</h1>
                    <h2>See some code and screenshots.</h2>
                    <div className='project-list'>
                        {data.map((project: any) => (
                            <ProjectCard project={project} key={project.title} />
                        ))}
                        <p>
                            <span>Note:</span> Most of my code since 2020 is in private repos. Snippets or samples are available upon request. I am also willing
                            to show code during interviews.
                        </p>
                    </div>
                </PortfolioPageStyles>
            </motion.div>
        </Layout>
    );
};

export default Portfolio;
