import SearchBar from '../SearchBar';
import { Nav, Logo, Links, Link, Left, Middle, Right } from './styled';

const Navbar = () => {
    return (
        <Nav>
            <Left>
                <Logo>Larry's Cactus Pub</Logo>
                <Links>
                    <Link>
                        <a href="/">Subscribe</a>
                    </Link>
                    <Link>
                        <a href="/">Shop</a>
                    </Link>
                </Links>
            </Left>
            <Middle>
                <SearchBar />
            </Middle>
            <Right>
                <Links>
                    <Link>
                        <a href="/">Login</a>
                    </Link>
                    <Link>
                        <a href="/">Cart</a>
                    </Link>
                </Links>
            </Right>
        </Nav>
    );
};

export default Navbar;
