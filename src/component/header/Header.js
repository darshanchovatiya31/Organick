import React, { useContext, useState } from "react";
import logo from "../images/Logo.png";
import { navbar } from "../data/Data";
import { CiSearch } from "react-icons/ci";
import { SlBasketLoaded } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { CratContext } from "../Context/CartContext";

const Header = () => {
  const [Visible, setVisible] = useState(false);
  const {cart} = useContext(CratContext)
  const toggleSearch = () => {
    setVisible(!Visible);
  };
  
  const navigate=useNavigate();
  const shopeditem=()=>{
    navigate("/shopeditem")
  }
  
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg py-4 header_main">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="web logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navbar.map((items) => (
                  <li className="nav-item position-relative head_nav mx-2 mx-lg-0 mx-xl-2">
                    <Link
                      className="nav-link active main_blue fw-bold main_link"
                      aria-current="page"
                      to={items.url}
                    >
                      {items.name}
                      {items.icon}
                    </Link>
                    <ul className="head_submenu p-0 text-center fw-semibold">
                      {items?.submenu?.map((item) => (
                        <li className="head_submenu_li py-1">
                          <Link
                            to={item.url}
                            className="text-decoration-none text-white head_sublink"
                          >
                            {item.subname}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="hello">
              <div className="header_serach p-1 justify-content-between mx-1 mb-2 mb-lg-0">
                <input type="text" className={`border-0 ps-3 ${Visible ? 'd-block' : 'd-none'}`}/>
                <div className="search_icon d-flex align-items-center justify-content-center" onClick={toggleSearch}>
                  <CiSearch className="fs-5 text-white fw-bold" />
                </div>
              </div>
              </div>
              <div className="header_serach border p-1 d-flex align-items-center mx-1" onClick={shopeditem}>
                <div className="search_icon2 d-flex align-items-center justify-content-center">
                  <SlBasketLoaded className="fs-5 text-white fw-bold" />
                </div>
                <p className="main_blue fw-bold mb-0 px-2">Cart({cart.cart})</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
