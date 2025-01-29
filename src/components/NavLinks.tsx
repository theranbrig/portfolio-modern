import Link from './Link';

const NavLinks = () => {
    return (
        <>
            <Link activeClassName='active' href='/'>
                <p>Home</p>
            </Link>
            <Link activeClassName='active' href='/blog'>
                <p>Blog</p>
            </Link>
            <Link activeClassName='active' href='/portfolio'>
                <p>Work</p>
            </Link>
            <Link activeClassName='active' href='/about'>
                <p> About</p>
            </Link>
            <Link activeClassName='active' href='/contact'>
                <p>Contact</p>
            </Link>
        </>
    );
};
export default NavLinks;
