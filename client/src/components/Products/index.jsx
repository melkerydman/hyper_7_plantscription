
import { FavoriteOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import { Container, Image, Title, Icon, Price, Wrapper, TitleWrapper } from './styled';



const Products = () => {
    return (

        <Container>
           <Wrapper> 
           <Image src="https://unsplash.com/photos/FV_PxCqgtwc"/>
           <Icon>
         <ShoppingBagOutlined/>
         <FavoriteOutlined/>
             </Icon> 
           </Wrapper>            
            <TitleWrapper> 
            <Title> Ephrem </Title>
            <Price> 12   </Price >          
          </TitleWrapper>      
           
             
          
        </Container>

    )
};

export default Products;

// we need a picture holder 
// we need the price
// we need the name 
// we have the icons 
