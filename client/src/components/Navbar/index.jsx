import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import { Nav, Logo, Links, StyledLink, Left, Middle, Right } from './styled';

const Navbar = () => {
    return (
        <Nav>
            <Left>
                <Logo>Larry's Cactus Pub</Logo>
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
                        <Link to="/login">Login</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="/">Cart</Link>
                    </StyledLink>
                </Links>
            </Right>
        </Nav>
    );
};

export default Navbar;
