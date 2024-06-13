import React, { useState } from "react";
import "./Navbar.css";
import { CiHeart, CiLocationOn, CiPhone, CiShoppingCart } from "react-icons/ci";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/imgs/logo.svg";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [active, setActive] =useState(false);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
          setActive(true);
        } else {
          setActive(false);
        }
      });

      const addToCart = useSelector((state) => state.cart);
      const like = useSelector((state) => state.wishlist);

  return (
    <>
      <header className="header_one">
        <div className="container">
          <div className="samll_header">
            <ul>
              <li>Гарантия свежести</li>
              <li>Доставка и оплата</li>
              <li>Оптовые поставки</li>
              <li>Контакты</li>
            </ul>
            <div className="icons_wrapper">
              <div className="loctaion">
                <CiLocationOn />
                <p>Санкт-Петербург</p>
              </div>

              <div className="phone_number">
                <CiPhone />
                <p>8 (812) 123-45-67</p>
              </div>
              <div className="korzinka">
                <NavLink to="/cart">
                <CiShoppingCart/>
                </NavLink>
                <p>Корзина(<span>{addToCart.cart.length}</span>)</p>
              </div>
              <div className="wishlist">
               <NavLink to="/like">
               <CiHeart/>
               </NavLink>
                <p>Избранное(<span>{JSON.stringify(like.wishlist.length)}</span>)</p>
              </div>
            </div>

            <div className="social_icons">
              <FaInstagram />
              <FaTwitter />
              <FaTelegram />
            </div>
          </div>
        </div>
      </header>

      <header className={`header_two ${active ? "active_header" : ""} `}>
        <div className="container">
          <div className="big_header">
            <ul>
              <li className="active">
                СЛАДКИЕ ДНИ
                <div className="rectangle">
                  <span>%</span>
                </div>
              </li>
              <li>подарочные наборы</li>
              <li>Собрать набор</li>
              <li className={active ? "active_none" : ""}>
                <img src={logo} alt="" />
              </li>
              <li>Создать дизайн</li>
              <li>КОМПАНИЯМ</li>
              <li>ВЕСЬ КАТАЛОГ</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
