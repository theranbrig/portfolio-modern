import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';
import NavStyles from './styles/NavStyles';

const Nav = ({ children }: { children: React.ReactNode }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 100);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    if (loading) {
        return null;
    }

    return (
        <NavStyles>
            {children}
            <div className='navigation'>
                <NavLinks />
            </div>
        </NavStyles>
    );
};

export default Nav;
