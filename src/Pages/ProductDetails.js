import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  RemoveSelectedProduct,
  SelectedProduct,
} from "../actions/ProductActions";
import Button from "../components/Button";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  //console.log(product);

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err:", err);
      });
    dispatch(SelectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(RemoveSelectedProduct());
    };
  }, [productId]);
  return (
    <React.Fragment>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="container product-details mt-4">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="row">
                <div className="col col-lg-6">
                  <div className="card">
                    <img className="product-image" src={image} alt={title} />
                  </div>
                </div>
                <div className="col col-lg-6">
                  <div className="card p-3">
                    <div className="card-body">
                      <h2 className="card-title">{title}</h2>
                      <h3 className="card-text">{category}</h3>
                      <h4 className="product-price">${price}</h4>
                      <p className="product-description">{description}</p>
                    </div>
                    <div className="add-product-cta ps-3">
                    <Button id="primaryBtn" type="button" variant="button-primary" size="lg" isDisabled={false} children="Add to cart" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductDetails;
