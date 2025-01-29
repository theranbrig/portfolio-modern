import NavLinks from './NavLinks';
import NavStyles from './styles/NavStyles';

const Nav = ({ children }: { children: React.ReactNode }) => {
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
