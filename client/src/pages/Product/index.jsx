import { useState } from 'react';
import {
    AddContainer,
    Amount,
    AmountContainer,
    Image,
    Button,
    Container,
    Description,
    Main,
    Price,
    ProductInfoContainer,
    Title,
    Wrapper,
} from './styled';
import { Add, Remove } from '@mui/icons-material';

const Product = (props) => {
    const [product, setProduct] = useState(props ? { ...props } : {});

    if (!product) {
        // Get id param from URL
        // Fetch product data from API with id
        // setProduct() with fetched data
        // Handle case when someone passes non-existing id
    }

    return (
        <Main>
            <Wrapper>
                <Container>
                    <Image src="https://images.unsplash.com/photo-1589944908960-f6c10e05e4b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80" />
                </Container>
                <Container>
                    <ProductInfoContainer>
                        <Title>
                            {product.title ? product.title : 'Product Title'}
                        </Title>
                        <Description>
                            {product.description
                                ? product.description
                                : 'Product Description'}
                        </Description>
                        <Price>
                            Price {product.price ? product.price : '$10.00'}
                        </Price>
                    </ProductInfoContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </Container>
            </Wrapper>
        </Main>
    );
};

export default Product;
