import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderlist = products.map((product) => {
    const { id, title, price, category, image } = product;
    return (
      <div className="card product-card col" key={id}>
        <div className="product-image">
          <img src={image} className="card-img-top product-image" alt={title} />
        </div>
        <div className="card-body text-center">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-text">{category}</h5>
          <span className="product-price">${price}</span>
        </div>
        <div className="add-product-cta text-center">
          <Button
            id="primaryBtn"
            type="button"
            variant="button-primary mb-2"
            size="lg"
            isDisabled={false}
            children="Add to cart"
          />
          <Link to={`/products/product/${id}`}>
            <Button
              id="secondaryBtn"
              type="button"
              variant="button-secondary"
              size="lg"
              isDisabled={false}
              children="View Details"
            />
          </Link>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-12">
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              {renderlist}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductComponent;
