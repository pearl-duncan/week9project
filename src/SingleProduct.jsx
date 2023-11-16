import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product2 from './Product2';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function SingleProduct(props) {
    const { productId } = useParams()
    
    const [product, setProduct] = useState(null)

    const showProduct = () => {
        if (!product) {
            return <h2>Loading...</h2>
        }
        else {
            return   <Product2 product2Info={product} />
        }
    };
    const getProduct = async () => {
        const url = BACKEND_URL + `/api/product/${productId}`;
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === 'ok'){
            setProduct(data.product)
        }
    };

    useEffect(()=>{getProduct()}, [])

  return (
    <div>
        {showProduct()}
    </div>
  )
}
