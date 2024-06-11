import React, { useState, useEffect } from "react";
import star from "../../images/Star.png";
import Btn from "../../btn/Btn";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Shopeditem = () => {
  const [cartOldValue, setCartOldValue] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartOldValue(parsedCart);
      setQuantities(parsedCart.map((item) => item.qty));
    }
  }, []);

  const handleQuantityChange = (index, change) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(0, newQuantities[index] + change);
      // Update the cartOldValue to reflect the new quantities
      const updatedCart = [...cartOldValue];
      updatedCart[index].qty = newQuantities[index];
      setCartOldValue(updatedCart);
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return newQuantities;
    });
  };

  const handleRemoveItem = (index) => {
    setCartOldValue((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities.splice(index, 1);
      return newQuantities;
    });
  };

  const calculateTotal = () => {
    return cartOldValue.reduce((total, item, index) => {
      const price = parseFloat(item.newprice.replace("$", ""));
      return total + price * quantities[index];
    }, 0);
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div className="shopitem">
            {cartOldValue.map((item, index) => (
              <div className="row my-4 my-lg-5 justify-content-between align-items-center" key={index}>
                <div className="col-lg-4 col-md-6 col-12 ">
                  <div className="shopitem_left position-relative bg_dark_white">
                    <img src={item.image} alt="" className="w-100 h-100" />
                    <div className="main_bg_blue health_head rounded mb-2 position-absolute">
                      <p className="text-white mb-0 py-1 px-2">{item.title}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 mt-2 mt-md-0">
                  <h3 className="main_blue fw-medium">{item.name}</h3>
                  <img src={star} alt="" />
                  <p className="mb-0 main_blue fw-bold"> <span>{item.oldprice}</span>{item.newprice}</p>
                  <p className="my-md-4 my-2">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
                <div className="col-lg-4 col-12 d-flex flex-column align-items-center align-items-lg-start">
                  <div className="d-flex gap-3 mt-2 mt-lg-0 mb-3 align-items-center fs-3">
                    <button className="px-3 rounded"
                      onClick={() => handleQuantityChange(index, -1)}>-</button>
                    <div>{quantities[index]}</div>
                    <button className="px-3 rounded"
                      onClick={() => handleQuantityChange(index, 1)}>+</button>
                  </div>
                  <button className="py-3 mt-lg-4 px-5 fs-4 rounded bg-danger text-white"
                    onClick={() => handleRemoveItem(index)}>Remove</button>
                </div>
                <hr className="mt-4"/>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Link to="/shop">
                <Btn
                  name={"Add More Product"}
                  bgcolor={"#274C5B"}
                  color={"white"}
                  border={"0px"}
                  borderHover={"borderblue"}
                  icon={<FaCircleArrowRight />}
                />
              </Link>
            </div>
          </div>
          <hr />
          <div className="row fs-2 fw-bold">
            <div className="col d-flex justify-content-center">
              <p>Total</p>
            </div>
            <div className="col d-flex justify-content-center">
              <p>${calculateTotal().toFixed(2)}</p>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};
export default Shopeditem;