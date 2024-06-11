import React, { useContext } from "react";
import { product } from "../data/Data";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CratContext } from "../Context/CartContext";

const Productcard = () => {
  const navigate = useNavigate()
  const {cartitems} = useContext(CratContext)

  const AddCartHendle = (item)=>{
    cartitems.setCartItem(item)
    navigate("/shopsingle")
  }
  return (
    <>
      {product.map((items) => (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-3 product_col" onClick={()=>AddCartHendle(items)}>
          <div className="product_data p-3 position-relative" data-aos="fade-up">
            <div className="main_bg_blue product_head rounded mb-2" data-aos="fade-right" data-aos-duration="1000">
              <p className="text-white mb-0 py-1 px-2">{items.title}</p>
            </div>
            <img
              src={items.image}
              alt="product img"
              className="product_data_img"
            />
            <h6 className="main_blue fw-bold mt-2">{items.name}</h6>
            <hr className="mb-0" />
            <div className="product_data_inner d-flex justify-content-between">
              <p className="mb-0 main_blue fw-bold">
                <span>{items.oldprice}</span> {items.newprice}
              </p>
              <img src={items.rating} alt="" />
            </div>
            <div className="position-absolute shop_hover">
              <div className="fs-3">
                <CiHeart />
              </div>
              <div className="fs-3">
                <MdOutlineShoppingCart />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Productcard;
