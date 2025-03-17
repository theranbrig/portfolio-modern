import Image from 'next/image';
import Link from 'next/link';
import { TProject } from '../../public/data';
import ProgressiveImage from './ProgressiveImage';
import ProjectStyles from './styles/ProjectStyles';

const ProjectLayout = ({ project }: { project: TProject }) => {
    const { title, technology, gitLink, created, description, extendedDescription, icon, screenShots, tech, mobile } = project;

    return (
        <ProjectStyles>
            <div className='project-title'>
                <div className='top-title'>
                    <h1>{title}</h1>
                    <Image src={`../icons/${icon}.svg`} alt={icon} height={100} width={100} />
                </div>
                <p>{description}</p>
                <div className='project-links'>
                    {gitLink ? (
                        <a href={gitLink} target='_blank' rel='noopener noreferrer' className='git-link'>
                            <Image src='../icons/github-blue.svg' alt='github' height={100} width={100} />
                            <p>Code</p>
                        </a>
                    ) : (
                        <p className='private'>Code is in private repo.</p>
                    )}
                </div>
                <div className='project-icons'>
                    {tech && tech.map((el) => <Image src={`../icons/${el}.svg`} key={el} alt={`${el} icon`} height={100} width={100} />)}
                </div>
            </div>
            <div className='project-info'>
                <div className='project-left'>
                    <div className='project-writing'>
                        {extendedDescription?.map((description, idx) => (
                            <p key={idx}>{description}</p>
                        ))}
                        <p>
                            Built with: <strong>{technology}</strong>
                        </p>
                        <p>Started in {created}</p>
                    </div>
                </div>
                <div className='project-right'>
                    <div className={`project-images ${mobile ? 'mobile' : ''} ${screenShots?.length === 1 ? 'solo-photo' : ''}`}>
                        {screenShots &&
                            screenShots.map((photo, idx) => (
                                <ProgressiveImage preview={photo.preview} image={photo.image} key={photo.image} alt={`${title} screenshot ${idx}`} />
                            ))}
                    </div>
                </div>
                <Link href='/portfolio'>
                    <span>Back </span>
                </Link>
            </div>
        </ProjectStyles>
    );
};

export default ProjectLayout;
