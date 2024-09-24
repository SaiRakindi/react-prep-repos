// src/components/HomePage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchProducts,
  selectAllProducts,
  selectProductStatus,
  selectProductError,
} from "../store/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(selectProductStatus);
  const error = useSelector(selectProductError);

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  let content;
  if (productStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (productStatus === "succeeded") {
    content = (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link> - $
            {product.price}
          </li>
        ))}
      </ul>
    );
  } else if (productStatus === "failed") {
    content = <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>
      {content}
    </div>
  );
};

export default HomePage;
