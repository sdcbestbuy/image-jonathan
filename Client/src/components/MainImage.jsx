import React from 'react';
import $ from 'jquery';
class MainImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: this.props.imageFile
    }
  }
  componentDidMount() {
    window.addEventListener('click', (event) => {
      console.log("id", event.view.id)
      if (event.view.id !== undefined) {
        if (event.view.id !== this.props.id) {
          this.setState({ currentImage: this.props.imageFile })
        }
      }
    })
  window.addEventListener('submit', (event) => {
    console.log("id", window.id)
    if (window.id !== undefined) {
      if (window.id !== this.props.id) {
        this.setState({ currentImage: this.props.imageFile })
      }
    }
  })
}
  //create a function that
  render() {
    let imageFile = this.props.imageFile;
    return (
      <div>
        <div className='main-img'>
          <img id='main' src={this.state.currentImage} />
        </div>
        <ul className='thumbnail-list'>
          <li className='image-thumbnail'>
            <div className='thumbnail-container'>
              <button className='image-button'>
                <img onMouseEnter={() => { this.setState({ currentImage: imageFile }) }} src={imageFile} className='thumbnail-image' />
              </button>
            </div>
          </li>
          <li className='image-thumbnail'>
            <div className='thumbnail-container'>
              <button className='image-button'>
                <img onMouseEnter={() => { this.setState({ currentImage: 'https://i.ibb.co/PmPSsZM/6393799ld.jpg' }) }} src='https://i.ibb.co/PmPSsZM/6393799ld.jpg' className='thumbnail-image' />
              </button>
            </div>
          </li>
          <li className='image-thumbnail'>
            <div className='thumbnail-container'>
              <button className='image-button'>
                <img onMouseEnter={() => { this.setState({ currentImage: 'https://i.ibb.co/18xBpDR/2.jpg' }) }} src='https://i.ibb.co/18xBpDR/2.jpg' className='thumbnail-image' />
              </button>
            </div>
          </li>
          <li className='image-thumbnail'>
            <div className='thumbnail-container'>
              <button className='image-button'>
                <img onMouseEnter={() => { this.setState({ currentImage: 'https://i.ibb.co/y8G8gg1/3.jpg' }) }} src='https://i.ibb.co/y8G8gg1/3.jpg' className='thumbnail-image' />
              </button>
            </div>
          </li>
          <li className='image-thumbnail'>
            <div className='thumbnail-container'>
              <button className='image-button'>
                <img onMouseEnter={() => { this.setState({ currentImage: 'https://i.imgur.com/OOryx0Y.jpg' }) }} src='https://i.imgur.com/OOryx0Y.jpg' className='thumbnail-image' />
              </button>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default MainImage;