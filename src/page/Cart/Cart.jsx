import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { CiHeart, CiCircleRemove } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import {
  incrementquantity,
  decrementquantity,
  removeItem,
} from "../../lib/action/action";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const handleincrement = (id) => {
    dispatch(incrementquantity(id));
  };
  const handledecrement = (id) => {
    dispatch(decrementquantity(id));
  };
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const like = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let carts = cart?.cart?.map((el) => (
    <div className="cart" key={el.id}>
      <div className="cart_img">
        <img src={el.images[0]} alt="" />
        <h2>{el.title}</h2>
        <div className="cart_icon">
          <button onClick={()=> dispatch({type: "TOGLELIKE", payload: el})}>
           {
             like.wishlist.some((item) => item.id === el.id) ? (
               <FaHeart style={{ color: "red" }} />
             ) : (
               <CiHeart />
             )
           }
          </button>
          <button onClick={() => handleRemove(el)}>
            <CiCircleRemove />
          </button>
        </div>
      </div>
      <div className="cart_price">
        <p>${el.price}</p>
        <p>${(el.price * el.quantity).toFixed(2)}</p>
        <div className="cart_count">
          <button disabled={el.quantity === 10} onClick={() => handleincrement(el)}>+</button>

          <button>{el.quantity}</button>
          <button
            disabled={el.quantity === 1}
            onClick={() => handledecrement(el)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  ));

  console.log(cart);
  return (
    <>
      <div className="container">
      <NavLink to="/" style={{ textDecoration: "none" }}>
      <h1 style={{color:"red",textAlign:"center"}}>Go to Home</h1>
      </NavLink>
        <div className="cart_wrapper">{carts}</div>
      </div>
    </>
  );
};

export default Cart;
