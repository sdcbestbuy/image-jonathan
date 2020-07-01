import React from 'react';
import $ from 'jquery';
class MainImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: this.props.imageFile
      }
  }

render(){
  let imageFile=this.props.imageFile;
  return (
    <div>
  <div className='main-img'>
    <img id='main' src={this.state.currentImage} />
    </div>
    <ul className='thumbnail-list'>
      <li className='image-thumbnail'>
        <div className='thumbnail-container'>
        <button className='image-button'>
          <img onMouseEnter={() =>{ this.setState({currentImage: imageFile})}} src={imageFile} className='thumbnail-image'/>
        </button>
        </div>
      </li>
      <li className='image-thumbnail'>
        <div className='thumbnail-container'>
        <button className='image-button'>
          <img onMouseEnter={()=>{this.setState({currentImage: 'https://i.ibb.co/PmPSsZM/6393799ld.jpg'})}} src='https://i.ibb.co/PmPSsZM/6393799ld.jpg' className='thumbnail-image'/>
        </button>
        </div>
      </li>
      <li className='image-thumbnail'>
        <div className='thumbnail-container'>
        <button className='image-button'>
          <img onMouseEnter={()=>{this.setState({currentImage: 'https://i.ibb.co/18xBpDR/2.jpg'})}} src='https://i.ibb.co/18xBpDR/2.jpg' className='thumbnail-image'/>
        </button>
        </div>
      </li>
    <li className='image-thumbnail'>
        <div className='thumbnail-container'>
        <button className='image-button'>
          <img onMouseEnter={()=>{this.setState({currentImage: 'https://i.ibb.co/y8G8gg1/3.jpg'})}} src='https://i.ibb.co/y8G8gg1/3.jpg' className='thumbnail-image'/>
        </button>
        </div>
      </li>
      <li className='image-thumbnail'>
        <div className='thumbnail-container'>
        <button className='image-button'>
          <img onMouseEnter={()=>{this.setState({currentImage: 'https://i.imgur.com/OOryx0Y.jpg'})}} src='https://i.imgur.com/OOryx0Y.jpg' className='thumbnail-image'/>
        </button>
        </div>
      </li>
    </ul>

    {/* 'https://i.ibb.co/y8G8gg1/3.jpg'
    <div className='thumbnails'>
  <img {onMouseOver}={this.imageSet({imageFile})} src={imageFile} className='thumbnail' />
  <img onMouseOver={function imageSet(){
    currentImage='https://i.ibb.co/PmPSsZM/6393799ld.jpg'
  }} src='https://i.ibb.co/PmPSsZM/6393799ld.jpg' className='thumbnail' />
  <img onMouseOver={this.imageSet('https://i.ibb.co/18xBpDR/2.jpg').bind(this)} src='https://i.ibb.co/18xBpDR/2.jpg' className='thumbnail' />
  <img  onMouseOver={this.imageSet('https://i.ibb.co/y8G8gg1/3.jpg').bind(this)}  src='https://i.ibb.co/y8G8gg1/3.jpg' className='thumbnail' /> */}



  {/* <img id='main3' src='https://i.ibb.co/18xBpDR/2.jpg' className='img-responsive main-image' />

  <img id='main4' src='https://i.ibb.co/y8G8gg1/3.jpg' className='img-responsive main-image' /> */}
</div>
)
}
}
export default MainImage;