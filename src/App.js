import React, { Component } from 'react';
import './App.css';
import Header from './component/header';
import Footer from './component/footer';
import Product from './component/product';
import Cart from './component/cart';
import data from './db.json';
// import axios from 'axios';
import Numberprovider from './contex/numberprovider';


class App extends Component {
  constructor() {
    super();
    this.state = {
      product: data.posts,
      isshow: false,
      data: data
    }
  }
  showcart = () => {
    this.setState({
      isshow: !this.state.isshow
    })
  }
  render() {
    const { product, isshow } = this.state;
    return (
    
      <Numberprovider product={product}>
        <div className="App">
          <Header
            show={this.showcart} />

          {
            isshow && <Cart />
          }
       

          <Product product={product} />
          <Footer />

        </div>
      </Numberprovider>
    );
  }

}

export default App;
