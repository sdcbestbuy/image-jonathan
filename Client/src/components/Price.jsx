import React from 'react';

const Price = ({price})=> (
  <div>
    <div id="guarantee">
      <img id="guarantee-badge" src="https://i.ibb.co/WsqfhT6/guarantee-Icon.jpg"></img>
      Price Match Guarantee
    </div>
    <div id="price">
    ${price}
  </div>
  <div id="or">
    or
  </div>
  <div id="payment-plan">
    ${Math.floor(price / 18)}/mo.*
  </div>
  </div>
)
export default Price;