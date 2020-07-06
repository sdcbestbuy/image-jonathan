import React from 'react';

const Delivery = ({ zip, city }) => (
  <div>
    <div id="free-delivery">
      FREE Delivery as soon as Sat, Jul 10
</div>
    <div id="installation">
      Need it installed? Delivery + Installation as soon as Tue, Jul 14 in {zip}.
Want it today? Available at a store 13 miles away from {city}.
</div>
  </div>
)

export default Delivery;