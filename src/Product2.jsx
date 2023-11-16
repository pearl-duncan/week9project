import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Product2 extends Component {
  render() {
    const p = this.props.productInfo
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4"style={{display: 'flex'}}>
        <div className="card-group"style={{ width: '18rem'}}>
            <img src={p.img_url} className="card-img-top" alt={p.title}/>
            <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <h6 className='card-subtitle mb-2 text-body-secondary'>{p.price}</h6>
                <p className="card-text">{p.description}</p>
                <Link to={'/add-to-cart'} className="btn btn-success">Add to Cart</Link>
            </div>
        </div>
        </div>
    )
  }
}
