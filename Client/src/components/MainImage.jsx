import React from 'react';
// import $ from 'jquery';
import Axios from 'axios';
import Modal from './Modal.js';
class MainImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: this.props.imageFile,
      thumbnails: [],
      loaded: false,
      id: this.props.id,
      show: false
    };
    this.grabThumbnails = this.grabThumbnails.bind(this);
  };
  componentDidMount() {
    this.grabThumbnails(this.state.id);
  }
  listenForChange() {
    window.addEventListener('click', (event) => {
      if (event.view.id !== undefined && event.view.id !== this.props.id) {
        this.setState({ currentImage: this.props.imageFile })
        this.grabThumbnails(event.view.id)
      }
    })
    window.addEventListener('submit', (event) => {
      if (window.id !== undefined && window.id !== this.props.id) {
        this.setState({ currentImage: this.props.imageFile })
        this.grabThumbnails(window.id)
      }
    })
  }
  showModal = (e) => {
    this.setState({
      show: !this.state.show
    });
  };
  grabThumbnails(id) {
    const thumbnailImages = [];

    Axios.get(`/images/${id}`)
      .then((images) => {
        thumbnailImages.push(this.props.imageFile)
        images.data.map((image) => {
          thumbnailImages.push(image.url)
          this.setState({ thumbnails: thumbnailImages, loaded: true })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  renderModal() {
    return(
    <Modal show={this.state.show} thumbnails={this.state.thumbnails} onClose={this.showModal}/>
  )
    }

  render() {
    return (
      <div>

        {this.state.loaded
          ? <div>
            <div className='main-img'>
              <img id='main' src={this.state.currentImage} />
            </div>
            <ul className='thumbnail-list'>
            {this.state.thumbnails.slice(0, 4).map((thumbnail) => (
              <li className='image-thumbnail'>
                <div className='thumbnail-container'>
                  <button className='image-button'>
                    <img onMouseEnter={() => { this.setState({ currentImage: thumbnail }) }} src={thumbnail} className='thumbnail-image' />
                  </button>
                </div>
              </li>
            ))
            }
          {this.state.loaded ? this.renderModal() : null}
            <li className='image-thumbnail'>
              <div className='thumbnail-containter'>
                <button className='gallery-button'

                onClick={e => {
                  this.showModal(e);
                }}>
                  {this.state.thumbnails.length} images
                </button>
              </div>
            </li>
            </ul>

          </div>
          : <div>loading...</div>

        }
      </div >
    )
  }
}


export default MainImage;
