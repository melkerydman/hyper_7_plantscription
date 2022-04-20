import { Nav, Logo, Links, Link } from './styled';

const Navbar = ({ children }) => {
    return (
        <Nav>
            <Links>
                <Link>
                    <a href="/">Home</a>
                </Link>
                <Link>
                    <a href="/">About</a>
                </Link>
                <Link>
                    <a href="/">Contact</a>
                </Link>
            </Links>
            <Logo>Larry's Cactus Pub</Logo>
            {children}
        </Nav>
    );
};

export default Navbar;
