import React from 'react'
import { useSelector } from 'react-redux'
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';

const Like = () => {
    const like = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const products = like?.wishlist?.map((prod) => (
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
          <FiShoppingCart />
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
            <FiShoppingCart /> В корзину
          </button>
        </div>
      </div>
    </div>
    ))
  return (
    <>
      <div className="container">
      <NavLink to="/" style={{ textDecoration: "none" }}>
      <h1 style={{color:"red",textAlign:"center"}}>Go to Home</h1>
      </NavLink>
        <h1 className="title">Wishlist</h1>
        <div className="wrapper_product">
            {products}
        </div>
      </div>
    </>
  )
}

export default Like