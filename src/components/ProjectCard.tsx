import Image from 'next/image';
import Link from 'next/link';
import { TProject } from '../../public/data';

const ProjectCard = ({ project }: { project: TProject }) => {
    const { title, description, tech, slug, icon } = project;

    return (
        <div className='individual-project'>
            <Link href={`/portfolio/[slug]`} as={`/portfolio/${slug}`}>
                <div className='project-link'>
                    <div className='main-icon'>
                        <Image src={`icons/${icon}.svg`} alt={icon} height={100} width={100} />
                    </div>
                    <div className='project-info'>
                        <h3>{title}</h3>
                        <h4>{description}</h4>
                        <div className='project-icons'>
                            {tech.map((el) => (
                                <Image src={`icons/${el}.svg`} key={el} alt={el} height={100} width={100} />
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProjectCard;
