import React, { useContext, useEffect } from "react";
import "../portfolio/Portfolio.css";
import Subscribe from "../../subscribe/Subscribe";
import { FaChevronRight } from "react-icons/fa";
import { portfolio } from "../../data/Data";
import { useNavigate } from "react-router-dom";
import { CratContext } from "../../Context/CartContext";

const Portfolio = () => {
  const navigate=useNavigate();
  const {cartitems}=useContext(CratContext)

  const PortHandle=(item)=>{
    cartitems.setCartItem(item)
    navigate("/portfoliosingle")
}

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollTop();
  }, []);
  return (
    <>
      {/* hero */}
      <section className="portfolio_hero">
        <div className="container">
          <div className=" roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="fade-up">Portfolio Standard</h1>
          </div>
        </div>
      </section>
      {/* portfolio */}
      <section>
        <div className="container">
          <div className="portfolio">
            <div className="row">
              {portfolio.map((items) => (
                <div className="col-lg-4 col-sm-6 col-12 mt-5 rounded-5" data-aos="fade-up">
                  <div className="portfolio_data rounded-5 mx-5 mx-sm-0">
                    <div className="portfolio_img position-relative">
                      <img src={items.image} alt="portfolio img" />
                        <div className="portfolio_hover position-absolute rounded-5 d-flex align-items-center justify-content-center" onClick={()=>PortHandle(items)}>
                          <div className="bg_main_green text-white d-flex align-items-center justify-content-center">
                            <FaChevronRight />
                          </div>
                        </div>
                    </div>
                    <div className="pt-3">
                      <h4 className="main_blue fw-bold">{items.name}</h4>
                      <h5 className="main_green yellowtail">{items.text}</h5>
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

export default Portfolio;
