import {  Container, Image, Info, Icon } from './styled';
import {  FavoriteBorderOutlined, ShoppingBagOutlined } from '@mui/icons-material';

const Product = ({item}) => {
  return (
    <Container>
    <Image src={item.img}/>
    <Info>
      <Icon>
        <ShoppingBagOutlined />
      </Icon>
      <Icon>
        <FavoriteBorderOutlined/>
      </Icon>
    </Info>

    </Container>
  )
}

export default Product
