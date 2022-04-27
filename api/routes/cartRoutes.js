import express from 'express';
import Cart from '../models/cartModel.js';
import Product from '../models/productModel.js'

const addItemtoCart= async (req,res)=>{
  let {userId, productId }= req.body;
  userId="62569e8410538b9f7ecf1aee"
  productId="6257ea5c4dabb30c8ac49069"
  const quantity = req.body.quantity*1;
  console.log(quantity, "🧨🧨🧨"); 
  try{
    // changes the quanity to number

    // get users Cart-- 
  
    let cart = await Cart.findOne({userId:userId}); 
   
   
    const prodcutDetails= await Product.findOne ({productId:productId})
    
    // check if the cart exists 
    if(cart){
      console.log("hello")
      let indexFound = cart.items.findIndex(item=>item.prodctId === productId)
      // checks if the product exists 
     
      if(indexFound!=-1){
        console.log("hello")
        //  find the item and increase the quanity 
        cart.items[indexFound].quanity= cart.items[index].quanity+ quantity; 
        // find the time with that index and update the total price 
        cart.items[indexFound].total = cart.items[indexFound].quanity*price;
        // set the price of the product 
        cart.items[indexFound].price = prodcutDetails.price
        // loop through  the prodcut item and get the item toal of eac item , and then reduce to ge the total  
        cart.subTotal = cart.items.map(item=>item.total).reduce((acc,curr)=>acc+curr);

        // if quanity exists, add the item in the arrary
      }else if (quantity>0 ){
        
        
        cart.items.push({
          productId:productId,
          quantity : quantity,
          price:prodcutDetails.price,
          total: parseInt(prodcutDetails.price*quantity)
        })
       
        cart.subTotal = cart.items.map(item=>item.total).reduce((acc,curr)=>acc+curr);
      }else {
       
        return res.status(400).json({
          code:400, 
          message:"invalid request "
        })
      }
      var data = await cart.save();
    }else {
      
      const cartData= {
        userId:userId, 
        items:[{
          productId:productId,  
          quantity: quantity, 
          total:parseInt(prodcutDetails.price*quantity), 
          price:prodcutDetails.price,
        }],
        subTotal:parseInt(prodcutDetails.price*quantity)
      }
      cart = new Cart(cartData); 
      data= await cart.save()
     
    }
    res.status(200).json({
      status:"scuess",
      data:data
      
    })
  }catch(err){
    console.log(err)
    res.status(400).json({
      type:"invalid", 
      message:err.message, 
      err:err
    })
  }
  

}
const getCart = async (req,res)=>{
try {
  const cart = await Cart.find()
  res.status(200).json({
    status:"sucess", 
    data:cart
  })
  
}catch(err){console.log(err)
    res.status(400).json({
      status:"failed",
      message:err.message, 
      err:err
    })
}
}

const cartRoutes = express.Router()
cartRoutes.get('/getCart', getCart)
cartRoutes.post('/addtocart', addItemtoCart)

export default cartRoutes