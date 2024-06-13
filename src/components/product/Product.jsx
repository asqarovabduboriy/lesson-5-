import React from "react";
import "./Product.css";
import { useefekt } from "../../hook/useefekt";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";

const Product = () => {
  const { data } = useefekt("/products?limit=8");

  const dispatch = useDispatch();
  const addToCart = useSelector((state) => state.cart);
  const like = useSelector((state) => state.wishlist);


  const product = data?.products?.map((prod) => (
    <div className="product" key={prod.id}>
      <div className="icons">
        <button onClick={() => dispatch({ type: "TOGLELIKE", payload: prod })}>
          {like.wishlist.some((item) => item.id === prod.id) ? (
            <FaHeart style={{ color: "red" }} />
          ) : (
            <CiHeart />
          )}
        </button>
        <button onClick={() => dispatch({ type: "ADDCART", payload: prod })}>
          <FaCartShopping />
        </button>
      </div>
      <div className="product_img">
        <img src={prod.images[0]} alt="" />
      </div>
      <div className="product_info">
        <h2>{prod.title}</h2>
        <p>{prod.description}</p>
        <div className="line"></div>
        <div className="price">
          <h3>{prod.price}руб</h3>
          <div className="vertikal"></div>
          <button>
            <FaCartShopping /> В корзину
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="flex_elemnt">{product}</div>
      </div>
    </>
  );
};

export default Product;
