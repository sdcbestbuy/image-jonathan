import React from 'react';
let Rating = ({rating, count}) => (
<div id="rating">
<div id="total-reviews">
<img id="stars" src="https://i.ibb.co/F3zgWkv/stars.jpg" />{rating} ({count} reviews)</div>
</div>
)
export default Rating;