import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetProducts } from '../actions/ProductActions';
import ProductComponent from './ProductComponent';

function ProductList() {
    const products = useSelector((state) => state);
    //console.log("Products: ",products);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log("Err", err);
        });
        dispatch(SetProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [])


  return (
    <React.Fragment>
        <ProductComponent />
    </React.Fragment>
  )
}

export default ProductList