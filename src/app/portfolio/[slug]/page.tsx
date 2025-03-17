'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import data, { TProject } from '../../../../public/data';
import Layout from '../../../components/Layout';
import ProjectLayout from '../../../components/ProjectLayout';
import { ToTop } from '@/components/ToTop';

export default function Project() {
    const params = useParams();

    if (!params || !params.slug) return null;

    const project = data.find((item) => item.slug === params.slug) as TProject;

    return (
        <Layout>
            <motion.div
                exit={{ opacity: 0, scale: 0 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', ease: 'easeIn', duration: 1, mass: 0.5 }}
            >
                <ProjectLayout project={project} />
                <ToTop />
            </motion.div>
        </Layout>
    );
}
