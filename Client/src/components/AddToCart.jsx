import React from 'react';

const AddToCart = ()=> (
  <button type="button" id="add-to-cart" onClick={()=>{
    if (window.cart >=1){
      window.cart++
    }else{
      window.cart=1
    }
    console.log(window.cart)}}>
    <img id="cart" src="https://i.ibb.co/MkrbHwc/cart.jpg" />
     Add to Cart

  </button>
)
export default AddToCart;