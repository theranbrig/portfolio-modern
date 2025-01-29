'use client';

import Layout from '@/components/Layout';
import ProjectLayout from '@/components/ProjectLayout';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { useParams } from 'next/navigation';
import data, { TProject } from '../../../../public/data';
export default function Project() {
    const params = useParams();

    const project = data.find((item) => item.slug === params.slug) as TProject;

    return (
        <Layout>
            <NextSeo
                title={`Theran Brigowatz | ${project.title}`}
                description={project.description}
                openGraph={{
                    url: `https://theran.dev/?name=${project.slug}`,
                    images: [{ url: project?.screenShots?.[0]?.image, alt: `${project.title} screenshot` }],
                }}
            />
            <motion.div
                exit={{ opacity: 0, scale: 0 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}
            >
                <ProjectLayout project={project} />
            </motion.div>
        </Layout>
    );
}
