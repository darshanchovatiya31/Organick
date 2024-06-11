import React, { useContext, useEffect, useState } from "react";
import "../shop single/Shopsingle.css";
// import health from "../../images/health.png";
import star from "../../images/Star.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import Btn from "../../btn/Btn";
import { related } from "../../data/Data";
import Subscribe from "../../subscribe/Subscribe";
import { CratContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Shopsingle = () => {
  const [cartValue, setCartValue] = useState(1);
  const [cartOldValue, setCartOldValue] = useState([]);
  const { cart, cartitems } = useContext(CratContext);

  useEffect(() => {
    const value = localStorage.getItem("cart");
    if (value) {
      setCartOldValue(JSON.parse(value));
    }
  }, []);

  const handleAdd = () => {
    // cartOldValue.map((item) => console.log(item.name));
    // console.log(cartitems.cartItem.name,"============");

    const newCartValue =
      cartValue === 1 ? cart.cart + 1 : cart.cart + parseInt(cartValue);
    cart.setCart(newCartValue);
    localStorage.setItem("cartnumber", newCartValue);

    const newCartItem = { ...cartitems.cartItem, qty: cartValue };
    setCartOldValue([...cartOldValue, newCartItem]);
    localStorage.setItem(
      "cart",
      JSON.stringify([...cartOldValue, newCartItem])
    );
  };

  const navigate = useNavigate();
  const moreCartHandle = (item) => {
    cartitems.setCartItem(item);
    navigate("/shopsingle");
    window.scrollTo(0, 0);
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <>
      {/* hero */}
      <section className="shopsingle_hero">
        <div className="container">
          <div className="roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="fade-up">
              Shop Single
            </h1>
          </div>
        </div>
      </section>
      {/* health */}
      <section>
        <div className="container">
          <div className="health">
            <div className="row my-5 justify-content-between align-items-center">
              <div className="col-md-5 col-12 " data-aos="fade-right">
                <div className="health_left position-relative bg_dark_white">
                  <img src={cartitems.cartItem.image} alt="" />
                  <div className="main_bg_blue health_head rounded mb-2 position-absolute">
                    <p className="text-white mb-0 py-1 px-2">
                      {cartitems.cartItem.title}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 col-md-7 col-12 mt-4 mt-md-0"
                data-aos="fade-left"
              >
                <h3 className="main_blue fw-medium">
                  {cartitems.cartItem.name}
                </h3>
                <img src={star} alt="" />
                <p className="mb-0 main_blue fw-bold">
                  <span>{cartitems.cartItem.oldprice}</span>
                  {cartitems.cartItem.newprice}
                </p>
                <p className="my-sm-4 my-3">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                <div className="d-flex align-items-center gap-sm-3 gap-1">
                  <h6 className="main_blue">Quantity :</h6>
                  <input
                    type="number"
                    placeholder="1"
                    className="py-3 px-sm-4 px-2 bg-white rounded-3 main_blue fw-bold shop_input"
                    onChange={(e) => setCartValue(parseInt(e.target.value))}
                  />
                  <Btn
                    onClick={handleAdd}
                    name={"Add To Cart"}
                    bgcolor={"#274C5B"}
                    color={"white"}
                    border={"0px"}
                    borderHover={"borderblue"}
                    icon={<FaCircleArrowRight />}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-12 my-5 text-center mx-auto">
                <div className="gap-3 d-md-flex d-block justify-content-center">
                  <button
                    className="main_bg_blue text-white fw-bold fs-5 py-3 px-5 roboto border-0 rounded-4 mt-3"
                    data-aos="fade-up"
                  >
                    Product Description
                  </button>
                  <button
                    className="main_blue fw-bold fs-5 py-3 px-5 roboto border-0 rounded-4 mt-3"
                    data-aos="fade-down"
                  >
                    Additional Info
                  </button>
                </div>
                <p className="mt-4">
                  Welcome to the world of natural and organic. Here you can
                  discover the bounty of nature. We have grown on the principles
                  of health, ecology, and care. We aim to give our customers a
                  healthy chemical-free meal for perfect nutrition. It offers
                  about 8–10% carbs. Simple sugars — such as glucose and
                  fructose — make up 70% and 80% of the carbs in raw.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* related */}
      <section>
        <div className="container">
          <div className="related my-5">
            <h2 className="fw-bold main_blue roboto text-center">
              Related Products
            </h2>
            <div className="row">
              {related.map((items) => (
                <div
                  key={items.id}
                  className="col-12 col-sm-6 col-lg-4 col-xl-3 my-3 product_col"
                  data-aos="fade-up"
                  onClick={() => moreCartHandle(items)}
                >
                  <div className="product_data p-3 position-relative">
                    <div
                      className="main_bg_blue product_head rounded mb-2"
                      data-aos="fade-right"
                    >
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
            </div>
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};
export default Shopsingle;
