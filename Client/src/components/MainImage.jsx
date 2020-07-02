import React from 'react';
import $ from 'jquery';
import axios from 'axios';
class MainImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: this.props.imageFile,
      thumbnails: [],
      imageData: [],
      dataLoaded: false,
      loaded: false
    }
    this.grabThumbnails = this.grabThumbnails.bind(this);
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

      if (window.id !== undefined) {
        if (window.id !== this.props.id) {
          this.setState({ currentImage: this.props.imageFile })
        }
      }
    })
    this.grabThumbnails();
  }
  grabThumbnails() {

    const thumbs = [];
    axios.get('/images')
      .then((images) => {
        thumbs.push(this.props.imageFile)
        images.data.map((image) => {
          thumbs.push(image.url)
          this.setState({ thumbnails: thumbs, loaded: true })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  };


  render() {
    let imageFile = this.props.imageFile;

    return (
      <div>
        <div className='main-img'>
          <img id='main' src={this.state.currentImage} />
        </div>
        <ul className='thumbnail-list'>
          {this.state.loaded ? this.state.thumbnails.map((thumbnail) => (

            <li className='image-thumbnail'>
              <div className='thumbnail-container'>
                <button className='image-button'>
                  <img onMouseEnter={() => { this.setState({ currentImage: thumbnail }) }} src={thumbnail} className='thumbnail-image' />
                </button>
              </div>
            </li>
          )) : 'Loading...'}
        </ul>
      </div>
    )
  }
}


export default MainImage;
