import Image from 'next/image';

type TIconLink = {
    link: string;
    icon: string;
    name: string;
    alt: string;
};

const IconLink = ({ link, icon, name, alt }: TIconLink) => (
    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={name}>
        <Image src={`icons/${icon}.svg`} alt={alt} width={100} height={100} />
    </a>
);

export default IconLink;
