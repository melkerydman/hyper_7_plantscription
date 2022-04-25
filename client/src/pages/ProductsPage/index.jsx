

import { Main } from './styled';
import { Products } from '../../ProductData';
import Product from './product';
// import { useState, } from 'react';



 const AllProducts = () => {
//   //  const [products, setProducts] = useState([]);

//      const getAllProducts = async () =>{
      
//         const res = await fetch('http://localhost:8080/products');
//         console.log(res);         
      
//      }
//      getAllProducts();


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
