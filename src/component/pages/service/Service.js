import React, { useEffect } from "react";
import "../service/Service.css";
import grow from "../../images/grow.png";
import grow1 from "../../images/grow1.png";
import grow2 from "../../images/grow2.png";
import grow3 from "../../images/grow3.png";
import grow4 from "../../images/grow4.png";
import grow5 from "../../images/grow5.png";
import grow6 from "../../images/grow6.png";
import Btn from "../../btn/Btn";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Service = () => {
  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* <Header /> */}
      {/* hero */}
      <section className="service_hero">
        <div className="container">
          <div className="roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold roboto" data-aos="zoom-in-up">Service</h1>
          </div>
        </div>
      </section>
      {/* grow */}
      <section>
        <div className="container">
          <div className="grow my-5 ">
            <div className="row justify-content-center">
              <div className="col-xxl-4 col-lg-5 col-md-6 col-sm-7 px-5 px-sm-0">
                <h3 className="main_green yellowtail text-center"  data-aos="fade-left">
                  What we Grow
                </h3>
                <h2 className="roboto fs-1 main_blue fw-bold text-center mb-3 mb-lg-0"  data-aos="fade-right">
                  Better Agriculture for Better Future
                </h2>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                <div className="text-lg-end text-center">
                  <img src={grow1} alt=""  data-aos="fade-right"/>
                  <h4 className="main_blue" data-aos="fade-right">Dairy Products</h4>
                  <p data-aos="fade-right">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                  <img src={grow2} alt="" data-aos="fade-right"/>
                  <h4 className="main_blue" data-aos="fade-right">Store Services</h4>
                  <p data-aos="fade-right">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                  <img src={grow3} alt="" data-aos="fade-right"/>
                  <h4 className="main_blue" data-aos="fade-right">Delivery Services</h4>
                  <p data-aos="fade-right">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 col-lg-4  d-lg-block d-none">
                <div className="grow_inner">
                  <img src={grow} alt="" />
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                <div className=" text-center">
                  <img src={grow4} alt="" data-aos="fade-left"/>
                  <h4 className="main_blue" data-aos="fade-left">Agricultural Services</h4>
                  <p data-aos="fade-left">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                  <img src={grow5} alt=""  data-aos="fade-left"/>
                  <h4 className="main_blue" data-aos="fade-left">Organic Products</h4>
                  <p data-aos="fade-left">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                  <img src={grow6} alt=""  data-aos="fade-left"/>
                  <h4 className="main_blue" data-aos="fade-left">Fresh Vegetables</h4>
                  <p data-aos="fade-left">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
            <Link to="/servicesingle" style={{ textDecoration: "none" }}>
              <Btn
                name={"More News"}
                bgcolor={"white"}
                color={"#274C5B"}
                borderHover={"bgblue"}
                border={"2px solid #274C5B"}
                icon={<FaCircleArrowRight />}
              />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* fresh */}
      <section className="main_fresh">
        <div className="container">
          <div className="fresh">
            <div className="row justify-content-center">
              <div className="col-xxl-5 col-lg-6 col-md-8 col-sm-12">
                <h3 className="main_green yellowtail text-center"  data-aos="fade-down">
                  Organic Only
                </h3>
                <h2 className="roboto fs-1 main_blue fw-bold text-center mb-3 mb-lg-0"  data-aos="fade-left">
                  Everyday Fresh & Clean
                </h2>
                <p className="text-center mt-3"  data-aos="fade-right">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the{" "}
                </p>
                <div className="text-white bg_main_green fresh_icon"  data-aos="fade-up">
                  <FaPlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
