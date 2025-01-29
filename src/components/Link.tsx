import { usePathname } from 'next/navigation';
import * as React from 'react';

interface ActiveLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    children: React.ReactElement<{ className?: string }>;
    activeClassName: string;
    href: string;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, activeClassName, href, ...props }) => {
    const pathname = usePathname();
    let className = children.props.className || '';
    if ((pathname === href && activeClassName) || (pathname && pathname.includes(href) && href !== '/')) {
        className = `${className} ${activeClassName}`.trim();
    }
    return (
        <a href={href} {...props}>
            {React.cloneElement(children, { className })}
        </a>
    );
};

export default ActiveLink;
