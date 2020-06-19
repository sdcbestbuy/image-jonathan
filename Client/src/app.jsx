import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.js'
import '../dist/style.css';
import $ from 'jquery';
import ProductView from '/components/ProductView.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    test: "test",
    currentProduct:1,
    productInfo= []
    }
  //bind event handler
    this.getProductInfo=this.getProductInfo.bind(this);
  }
  //event handlers
getProductInfo() {
  console.log("It WORKED!")
  $.get( "/display", function( data ) {

  });
}


  //render
  render(){

    return (
      <div>
        <div className= "flex-container">
          <ProductView productInfo={this.state.productInfo}/>
          <div className="side"></div>
        </div>
        </div>
    )
  }
};

export default App;