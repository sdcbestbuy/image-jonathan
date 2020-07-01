import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.js'
import '../dist/style.css';
import $ from 'jquery';
import ProductView from './components/ProductView.jsx'
import axios from 'axios';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      customerLocation: false,
      currentProduct: 5,
      productInfo: [],
      customerLocation: []


    }
    //bind event handler
    this.getAllData = this.getAllData.bind(this);
    this.getZip = this.getZip.bind(this);
  };
  componentDidMount() {
    this.getAllData(this.state.productInfo);
    this.getZip();
    window.addEventListener('click', (event) => {
      console.log(event.view.id)
      if (event.view.id !== undefined) {
        if (event.view.id !== this.state.currentProduct && this.state.dataLoaded) {
          this.setState({ currentProduct: event.view.id })
          this.getAllData(this.state.productInfo)
        }
      }
    })
  }


  //event handlers
  getAllData() {
    axios.get('/display')
      .then((data) => {
        this.setState({
          productInfo: data,
          dataLoaded: true
        })
        console.log(this.state.productInfo.data[1])
      })
      .catch((error) => {
        console.log(error);
      })
  };


  getZip() {
    $.getJSON('http://ip-api.com/json?callback=?', (data) => {
      console.log("data", data)
      this.setState({ customerLocation: data, customerLoaded: true });
    })
      .fail(() => {
        console.log('error')
      })
  }

  //render
  render() {
    return (
      <div>
        {(this.state.dataLoaded && this.state.customerLoaded) ? <ProductView customerLocation={this.state.customerLocation} productInfo={this.state.productInfo.data[this.state.currentProduct - 1]} /> : 'Loading...'}
        <div className="side"></div>
      </div>

    )
  }
};

export default App;