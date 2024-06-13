import React, { useEffect, useState } from "react";
import "./Product.css";
import { useefekt } from "../../hook/useefekt";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import {
  useLocation,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import axios from "axios";
import Modal from '../../components/modal/Modal'

const Product = () => {
  const API = 'https://dummyjson.com/'
  const { data } = useefekt("/products?limit=8");
  const [searchParams, setSearchParams] = useSearchParams();
  const [detaildata, setDetaildata] = useState(null);

useEffect(() => {
  let id = searchParams.get("detail");
  if (id) {
    axios
      .get(`${API}products/${id}`)
      .then((response) => {
        setDetaildata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [searchParams]);

console.log(detaildata);

  const dispatch = useDispatch();
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
        <img
          onClick={() => setSearchParams({ detail: prod.id })}
          src={prod.images[0]}
          alt=""
        />
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
         <Modal>
            {
              detaildata ? (
                 <div className="overlay" onClick={() => setDetaildata(null)}> 
                <div className="modal">
                  <div className="modal_close">
                    <button onClick={() => setDetaildata(null)}>x</button>
                  </div>
                  <div className="modal_img">
                    <img src={detaildata.images[0]} alt="" />
                  </div>
                  <div className="modal_info">
                    <h2>{detaildata.title}</h2>
                    <p>{detaildata.description}</p>
                    <div className="modal_price">
                      <h3>{detaildata.price}руб</h3>
                      <button onClick={() => dispatch({ type: "ADDCART", payload: detaildata })}>
                        <FaCartShopping /> В корзину
                      </button>
                    </div>
                  </div>
                </div>
                </div>
              ) : null
            }
         </Modal>
      </div>
    </>
  );
};

export default Product;
