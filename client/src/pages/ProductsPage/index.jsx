

import { Main } from './styled';
import { Products } from '../../ProductData';
import Product from './product';
import { useEffect, useState, } from 'react';



 const AllProducts = () => {
    const [products, setProducts] = useState([]);

    //  const getAllProducts = async () =>{
      
    //     const res = await fetch('http://localhost:8080/products');
    //     console.log(res);         
      
    //  }
    //  getAllProducts();

    useEffect(() => {
      const getProducts = async () => {
        try {
          const res = await fetch('http://localhost:8080/products' );
          const data = await res.json();
         
           console.log(data);
          // setProducts(data);
        } catch (err) {}
      };
      getProducts();
    }, []);
    


    return (

        <Main>
          {Products.map(item=>(
          <Product item={item} key={item.id}/>
          ))}       
        </Main>
               
          
      

    )
};

export default AllProducts;

// we need a picture holder 
// we need the price
// we need the name 
// we have the icons 
