type TContactLink = {
    link: string;
    icon: string;
    name: string;
};

const ContactLink = ({ link, icon, name }: TContactLink) => (
    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={name}>
        <img src={`icons/${icon}.svg`} alt={icon} className='contact-icon' />
    </a>
);

export default ContactLink;
