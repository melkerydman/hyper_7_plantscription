import styled from 'styled-components';

export const Main = styled.main`
    width: 100vw; ;
`;
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
`;
export const Container = styled.div`
    padding: 2.4rem;
    flex: 1;
`;
export const Image = styled.img`
    width: 100%;
    max-height: 350px;
    object-fit: cover;
`;
export const ProductInfoContainer = styled.div``;
export const Title = styled.h1``;
export const Description = styled.h3``;
export const Price = styled.div``;

export const AddContainer = styled.div``;
export const AmountContainer = styled.div``;
export const Amount = styled.span``;
export const Button = styled.button``;

// <Wrapper>
// <Container>
// 	<Image src={product.img} />
// </Container>
// <Container>
// 	<ProductInfoContainer>
// 		<Title></Title>
// 		<Description></Description>
// 		<Price></Price>
// 	</ProductInfoContainer>
// 	<AddContainer>
// 		<AmountContainer>
// 			<Remove onClick={() => handleQuantity('dec')} />
// 			<Amount>{quantity}</Amount>
// 			<Add onClick={() => handleQuantity('inc')} />
// 		</AmountContainer>
// 		<Button onClick={handleClick}>ADD TO CART</Button>
// 	</AddContainer>
// </Container>
// </Wrapper>;
