import React from 'react';
import ReactDOM from 'react-dom';
import $, { data } from 'jquery';
import axios from 'axios';
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import ProductView from './components/ProductView.jsx'
import '../dist/style.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      customerLocation: false,
      currentProduct: 101,
      productInfo: [],
      customerLocation: []
    }
    //bind event handler
    this.getAllData = this.getAllData.bind(this);
    this.getZip = this.getZip.bind(this);
    this.setCurrentProduct = this.setCurrentProduct.bind(this);
  };

  componentDidMount() {
    this.getAllData(this.state.productInfo);
    this.getZip();
    //Event listener for carousel change of current item
    window.addEventListener('click', (event) => {
      console.log("id", event.view.id)
      if (event.view.id !== undefined) {
        if (event.view.id !== this.state.currentProduct) {
          this.setCurrentProduct(event.view.id)
        }
      }
    })
    //Event listener for searchbar change of current item
    window.addEventListener('submit', (event) => {
      console.log("id", window.id)
      if (window.id !== undefined) {
        if (window.id !== this.state.currentProduct) {
          this.setCurrentProduct(window.id)
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
      })
      .catch((error) => {
        console.log(error);
      })
  };

  //put data
  putData() {
    axios.put('/display', {
      data: 'test'
    })
    .then((res) => {
      this.setState({
        productInfo: res,
        dataLoaded: true
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //post
  postData() {
    axios.post('/display')
      .then((res) => {
        this.setState({
          productInfo: res,
          dataLoaded: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  //delete
  deleteData(event) {
    const id = event.target.value;
    axios.delete (`/display/${id}`)
      .then((res) => {
        this.setState({
          productInfo: res,
          dataLoaded: true
        })
      })
      .catch (err => {
        console.log(err);
      })
  }

//had to use JQuery for location API, format was off when I tried to convert to axios
  getZip() {
    $.getJSON('http://ip-api.com/json?callback=?', (data) => {
      console.log("data", data)
      this.setState({ customerLocation: data, customerLoaded: true });
    })
      .fail(() => {
        console.log('error')
      })
  }
//function to change the current product
  setCurrentProduct(id) {
    this.setState({ currentProduct: id })
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