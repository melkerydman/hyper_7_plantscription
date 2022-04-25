import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
    // Grab id param from url
    const { id } = useParams();
    // If props is not an empty object, spread props in product - else set product to empty object
    const [product, setProduct] = useState(
        Object.entries(props).length !== 0 ? { ...props } : {}
    );
    const [quantity, setQuantity] = useState(1);

    // TODO Fix issue with multiple re-renders that causes fetching of product multiple times

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/products/${id}`
                );
                console.log('Fetched product');
                return await response.json();
            } catch (err) {
                console.log(err);
                console.log("Product couldn't be found.");
            }
        };

        // If product is empty, fetch product from API
        if (Object.entries(product).length === 0) {
            getProduct().then((data) => {
                // Update product with fetched data
                setProduct(data);
            });
        }
    }, [id, product]);

    const handleQuantity = (type) => {
        // Function handles increment or decrement based on passed type and current quantity
        // If type = dec - decrement quantity by one
        // If type != dec - increase quantity by one
        // Note: Quantity will never go below 0

        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

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
                            {product.desc
                                ? product.desc
                                : 'Product Description'}
                        </Description>
                        <Price>
                            Price {product.price ? product.price : '$10.00'}
                        </Price>
                    </ProductInfoContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity('dec')} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity('inc')} />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </Container>
            </Wrapper>
        </Main>
    );
};

export default Product;
