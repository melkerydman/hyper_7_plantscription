import {
     Main, 
     Left, Center, Right, Logo, Links, StyledLink, SocialMediaContainer, SocialMediaIcon } from  './styled'
import {Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Main>
        <Left><Logo>Larry's Cactus Pub</Logo></Left>
        <Center>
             <Links>
                  <StyledLink>
                      <Link to="/">Subscribe</Link>
                  </StyledLink>
                   <StyledLink>
                      <Link to="/">Shop</Link>
                  </StyledLink>
                  <StyledLink>
                        <Link to="/">Cart</Link>
                    </StyledLink>
            </Links>
        </Center>
        <Right>
            <SocialMediaContainer>
                <SocialMediaIcon color="3b599">
                    <Facebook />
                </SocialMediaIcon>
                <SocialMediaIcon color="3b599">
                    <Instagram />
                </SocialMediaIcon>
                <SocialMediaIcon color="3b599">
                    <Twitter />
                </SocialMediaIcon>
                              
            </SocialMediaContainer>
        </Right>
    </Main>
  )
}

export default Footer;