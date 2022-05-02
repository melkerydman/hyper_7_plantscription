import { Main, Title, Titles, Container, Wrapper, Left, Image, Details, ProductDetail, Center, Quantity, Input, SubTotal, ShippingCost, Total, Button, Right } from './styled';
import { useEffect, useState } from 'react';

const Carts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCarts = async () => {
      try{
        const res = await fetch(`http://localhost:8080/carts/getCart`)
        const data = await res.json();
        console.log(data.data);
      }catch(error){
console.log(error);
      }
    } 
    getCarts();
  }, []);



 return (
  <Main>
  <Title>ORDER SUMMARY</Title>
  <Wrapper>
  
    <Left>
    <Image src=""/>
  



  <Details>
    <Titles>A DEMO PLANT</Titles>
    <ProductDetail></ProductDetail>
  </Details>
</Left>

    
  
    <Center>
      <Quantity>
        Quantity
        <Input type="number"></Input>
      </Quantity>
    </Center>
    <Right>
      <SubTotal>Subtotal: £30</SubTotal>
      
    </Right>

  </Wrapper>
  <Container>
  <ShippingCost>Shipping Cost: £6.50</ShippingCost>
      
      <Total>Total: £36.50</Total>
        <Button>CHECKOUT NOW</Button>
  </Container>
  </Main>
  )
        
}

export default Carts;