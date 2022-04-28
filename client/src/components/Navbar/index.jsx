import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import logo from '../../public/images/dark_logo.png';
import {
    Nav,
    Img,
    Links,
    StyledLink,
    Left,
    Middle,
    Right,
    Icon2,
} from './styled';
import { FaCartPlus } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Nav>
            <Left>
                <Img src={logo} alt="logo" />
                <Links>
                    <StyledLink>
                        <Link to="/">Subscribe</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/products">Shop</Link>
                    </StyledLink>
                </Links>
            </Left>
            <Middle>
                <SearchBar />
            </Middle>
            <Right>
                <Links>
                    <StyledLink>
                        <Link to="/login">My Page</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/login">Login</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/">
                            {' '}
                            <Icon2>
                                <FaCartPlus />
                            </Icon2>
                        </Link>
                    </StyledLink>
                </Links>
            </Right>
        </Nav>
    );
};

export default Navbar;
