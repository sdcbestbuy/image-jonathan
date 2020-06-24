import React from 'react';
let Thumbnails = ({images}) => (
<div id='thumbnails'>
  {images.map(image,index){
    return (
      <div className="image">
      <img className='thumbnail' src={image}/>
      </div>
    )
  }
</div>
)
export default Thumbnails;