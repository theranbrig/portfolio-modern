'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { icons, skills } from '../../../public/data';
import Layout from '../../components/Layout';
import ProgressiveImage from '../../components/ProgressiveImage';
import AboutPageStyles from '../../components/styles/AboutPageStyles';

const About = () => {
    return (
        <Layout>
            <AboutPageStyles>
                <motion.div
                    exit={{ opacity: 0, scale: 0 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}
                >
                    <div className='about-main'>
                        <h1>About Me</h1>
                        <div className='my-face'>
                            <ProgressiveImage
                                preview='https://res.cloudinary.com/dq7uyauun/image/upload/q_2/v1551968239/IMG_1880.jpg'
                                image='https://res.cloudinary.com/dq7uyauun/image/upload/q_auto/v1551968239/IMG_1880.jpg'
                                alt='Theran Brigowatz'
                            />
                        </div>
                        <h2>therAn briGoWAtz</h2>
                        <p>
                            I am a Web Developer with an eye for design who decided to make a career change after more than a decade in the education industry.
                            I work on web and mobile application development platforms. I have a passion and obsession for all things code and development. With
                            over five years of experience as a developer, I know what it takes to build a great product.
                        </p>
                        <p>
                            After a decade of energetic kids and stacks of essays to grade, while teaching in South Korea, coding has given me a new enthusiasm
                            for a career that I love. Since my childhood, starting with Lego, I have had a passion to create, whether it be art, food, or DIY.
                            My interest in new technology is something that I have always had a great curiosity in pursuing and learning. I am constantly
                            pushing myself to learn and grow as programmer. I enjoy spending time with my family, traveling, cooking, brewing craft beer,
                            playing hockey, and the Minnesota Golden Gophers.
                        </p>
                        <p>
                            I am open to work remote opportunities and open to working overlap with any timezone. I am always looking for new challenges and new
                            oppportunities for growth.
                        </p>
                        <div className='skills-box'>
                            <h3>My Tech Stack</h3>
                            <div className='skill-list'>
                                <h3>Daily Use</h3>
                                <ul className='daily-list'>
                                    {icons.map((icon) => (
                                        <li key={icon.icon}>
                                            <Image src={`icons/${icon.icon}.svg`} alt={icon.skill} height={100} width={100} />
                                            <p>{icon.skill}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='skills-i-know'>
                                <h3>No Slouch With</h3>
                                <ul className='secondary-skills'>
                                    {skills.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <h3>Skills In the Pipeline</h3>
                            <div className='skills-to-learn'>
                                <p>Give me your best shot. I will take on anything else you throw at me.*</p>
                                <p>*Also Sausage Making and Charcuterie.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AboutPageStyles>
        </Layout>
    );
};

export default About;
