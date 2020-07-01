import React from 'react';

const AddToCart = ()=> (
  <button type="button" id="add-to-cart" onClick={()=>{
    if (window.checkout >=1){
      window.checkout++
    }else{
      window.checkout=1
    }
    console.log(window.checkout)}}>
    <img id="cart" src="https://i.ibb.co/MkrbHwc/cart.jpg" />
     Add to Cart

  </button>
)
export default AddToCart;