import React, { useContext, useEffect } from "react";
import "../portfoliosingle/Portfoliosingle.css";
import Subscribe from "../../subscribe/Subscribe";
import farm from "../../images/farm.png"
import { CratContext } from "../../Context/CartContext";

const Portfoliosingle = () => {
  const {cartitems}=useContext(CratContext)

  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="portfoliosingle_hero">
        <img src={cartitems.cartItem.image} alt="" className="w-100 portfoliosingle_hero_img" />
        <div className="hero_inner">
          <div className="container">
            <div className="row gap-3 gap-sm-0">
              <div className="col-md-7 p-3 p-sm-5 bg-white hero_left" data-aos="fade-up">
                <h1 className="main_blue fw-bold roboto">{cartitems.cartItem.name}</h1>
                <p>
                  Established fact that a reader will be distracted by the
                  readable content of a page when looking a layout. The point of
                  using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed{" "}
                </p>
              </div>
              <div className="col-md-5 p-3 p-sm-5 hero_right" data-aos="fade-up">
                <p>
                  <span className="main_blue fs-6 fw-bold roboto">Date : </span>{" "}
                  December 4, 2022
                </p>
                <p>
                  <span className="main_blue fs-6 fw-bold roboto">
                    Client :{" "}
                  </span>{" "}
                  Kevin Martin
                </p>
                <p>
                  <span className="main_blue fs-6 fw-bold roboto">
                    Category :{" "}
                  </span>{" "}
                  Agriculture , Eco
                </p>
                <p>
                  <span className="main_blue fs-6 fw-bold roboto">
                    Service :{" "}
                  </span>{" "}
                  Organic Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* farm */}
      <section>
        <div className="container">
            <div className="farm mt-5">
                  <div className="row">
                        <div className="col-lg-8 mx-auto">
                              <h2 className="main_blue fw-bold" data-aos="fade-up">About The Farm:</h2>
                              <p data-aos="fade-up">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                              <p data-aos="fade-up">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                              <div className="mt-4 mb-2">
                                    <img src={farm} alt="" className="w-100"/>
                              </div>
                              <p className="text-center">The Organic Products</p>
                              <h2 className="main_blue fw-bold" data-aos="fade-up">How To Farm:</h2>
                              <p data-aos="fade-up">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                              <p data-aos="fade-up">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                              <h2 className="main_blue fw-bold" data-aos="fade-up">Conclusion:</h2>
                              <p data-aos="fade-up">t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                              <p className="mb-0" data-aos="fade-up">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                        </div>
                  </div>
            </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
};

export default Portfoliosingle;
