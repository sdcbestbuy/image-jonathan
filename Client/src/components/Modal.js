import React from "react";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      currentImage: this.props.thumbnails[0]
    }
    this.onClose = this.onClose.bind(this);
  }
  // A function to minimize the modal
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='modal'>
        {/* Nav bar */}
        <div className='top-bar'>
          <button className='product-images'>Product Images</button>
        </div>
        <div className="content">
          <div className='image-tab-content-wrapper row'>
          <div className='image-thumbnail-wrapper col-xs-3'>
            <div className='scroll-container'>
              <div className='vertical-touch-events'>
 {/* map all the thumbnails to the gallery */}
                    {this.props.thumbnails.map((thumbnail)=>{
                      return(
                <div className='thumbnail-gallery'>
                  <div className='gallery-content'>
                  <ul className='thumbnail-indicate'>
                    <li className='thumbnail-content'>
                      <div className='thumbnail-container-gallery'>
                        <button className='image-gallery-button'>
                          <img className='gallery-image' src={thumbnail} onClick={() => { this.setState({ currentImage: thumbnail }) }}/>
                        </button>
                      </div>
                    </li>
                  </ul>
              </div>
              </div>
                      )
                    })
                    }
            </div>
          </div>
          <div>
          </div>

          </div>
          {/* Main view */}
          <div className='gallery-viewer'>
                    <img src={this.state.currentImage}/>
                    <div className='close-button'>
      <button className="toggle-button" onClick={this.onClose}>
              Close
            </button>
            </div>
          </div>

        </div>
      </div>

      </div>
    );
  }
}
export default Modal;
