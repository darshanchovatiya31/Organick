import React, { useContext, useEffect, useState} from "react";
import "../shop/Shop.css";
import { products } from "../../data/Data";
import Subscribe from "../../subscribe/Subscribe";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CratContext } from "../../Context/CartContext";
import { FaHeart } from "react-icons/fa6";

const Shop = () => {

  const navigate = useNavigate()
  const {cartitems} = useContext(CratContext)

  const [heart,setheart] =useState(null);
  const heartiffect =(index)=>{
    setheart(index)
  }

  const AddCartHendle = (item)=>{
    cartitems.setCartItem(item)
    navigate("/shopsingle")
  }
  
  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="shop_hero">
        <div className="container">
          <div className=" roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="fade-up">Shop</h1>
          </div>
        </div>
      </section>
      {/* products */}
      <section>
        <div className="container">
          <div className="row mt-5">
            {products.map((items,index) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3 product_icon_h my-3 product_col position-relative" data-aos="fade-up">
                  <div className="product_data p-3 "  onClick={()=>AddCartHendle(items)}>
                    <div className="main_bg_blue product_head rounded mb-2" data-aos="fade-right">
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
                    
                  </div>
                  <div className="position-absolute shop_hover">
                      <div className="fs-3">
                        <FaHeart className={`${heart===index?"text-danger" : ""}`} onClick={()=>heartiffect(index)}/>
                      </div>
                      <div className="fs-3">
                        <MdOutlineShoppingCart />
                      </div>
                    </div>
              </div>
              
            ))}
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Shop;
