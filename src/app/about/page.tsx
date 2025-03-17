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
                            I’m a Web and Mobile Developer with an eye for design and a passion for building great products. After over a decade in the
                            education industry, I made the transition to software development, and for the past five-plus years, I’ve been creating web and
                            mobile applications that are both functional and visually engaging. I thrive on solving complex problems, continuously learning new
                            technologies, and collaborating with teams to bring ideas to life.
                        </p>
                        <p>
                            Before coding, I spent years teaching in South Korea, navigating energetic classrooms and endless stacks of essays. That experience
                            honed my ability to break down complex concepts—something I now apply to development. My love for creating started with Lego as a
                            kid and has since expanded to art, food, DIY projects, and, of course, software. When I’m not coding, you’ll find me traveling,
                            cooking, brewing craft beer, playing hockey, or cheering on the Minnesota Golden Gophers.
                        </p>
                        <p>
                            I’m open to remote opportunities with timezone flexibility and always excited for new challenges that push me to grow. Let’s build
                            something amazing together.
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
