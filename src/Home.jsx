import React, { Component } from 'react'
import Product from './Product';

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            products:[]
        }
    };

    getProducts = async () => {
        const url = BACKEND_URL + '/api/products'
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        if (data.status === 'ok'){
            this.setState({products: data.products})
        }
    };

    showProducts = () => {
        if (this.state.products.length === 0){
            return <h2>Loading...</h2>
        }
        else {
            return this.state.products.map(p => <Product key={p.id} productInfo={p}/>)
        }
    }

    componentDidMount(){
        this.getProducts()
    }

  render() {
    return (
      <div>
        {this.showProducts()}
      </div>
    )
  }
}
