import Image from 'next/image';

type TContactLink = {
    link: string;
    icon: string;
    name: string;
};

const ContactLink = ({ link, icon, name }: TContactLink) => (
    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={name}>
        <Image src={`icons/${icon}.svg`} alt={icon} className='contact-icon' height={100} width={100} />
    </a>
);

export default ContactLink;
