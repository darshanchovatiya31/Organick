import React, { useEffect } from "react";
import "../service single/Servicesingle.css";
import Subscribe from "../../subscribe/Subscribe";
import servicesingle1 from "../../images/servicesingle1.jpg";
import servicesingle2 from "../../images/servicesingle2.png";
import servicesingle3 from "../../images/servicesingle3.png";

const Servicesingle = () => {
  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="servicesingle_hero">
        <div className="container">
          <div className=" roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="zoom-in-up">Quality Standard</h1>
          </div>
        </div>
      </section>
      {/* organic */}
      <section>
        <div className="container">
          <div className="organic my-5">
            <div className="row">
              <div className="col-md-11 mx-auto my-lg-5 mb-5">
                <img src={servicesingle1} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="fw-bold main_blue mb-3"  data-aos="fade-up">
                  Organic Store Services
                </h2>
                <p data-aos="fade-up">
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <p data-aos="fade-up">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and auncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years
                </p>
                <div className="row mt-4 ">
                  <div className="col-sm-5">
                    <img src={servicesingle2} alt=""  data-aos="fade-right"/>
                  </div>
                  <div  data-aos="fade-left" className="col-sm-7 bg_dark_white rounded-4 py-sm-0 py-3 ps-4 d-flex flex-column justify-content-center">
                    <h4 className="main_blue">Why Organic</h4>
                    <p className="mb-0 ">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptat. page editors now use Lorem Ipsum as their
                      default model text, and auncover.
                    </p>
                  </div>
                </div>
                <div className="row mt-4 ">
                  <div  data-aos="fade-right" className="col-sm-7 mb-2 bg_dark_white rounded-4 py-sm-0 py-3 ps-4 d-flex flex-column justify-content-center">
                    <h4 className="main_blue">Speciality Produce</h4>
                    <p className="mb-0 ">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptat. page editors now use Lorem Ipsum as their
                      default model text, and auncover.
                    </p>
                  </div>
                  <div className="col-sm-5">
                    <img src={servicesingle3} alt=""  data-aos="fade-left"/>
                  </div>
                </div>
                <h3 className="fw-bold main_blue mb-3 mt-4" data-aos="fade-up">
                  We farm your land
                </h3>
                <p data-aos="fade-up">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <div className="d-md-flex gap-4 mt-5">
                  <div className="d-flex align-items-center bg_dark_white p-2 pe-sm-5 gap-3 rounded-5"  data-aos="fade-up">
                    <div className="organic_icon bg_main_green text-white d-flex justify-content-center align-items-center">
                      <h5 className="mb-0">01</h5>
                    </div>
                    <h5 className="mb-0 main_blue fw-bold roboto">Best quality support</h5>
                  </div>
                  <div className="d-flex align-items-center bg_dark_white p-2 pe-sm-5 gap-3 rounded-5 mt-4 mt-md-0" data-aos="fade-up">
                    <div className="organic_icon bg_main_green text-white d-flex justify-content-center align-items-center">
                      <h5 className="mb-0">02</h5>
                    </div>
                    <h5 className="mb-0 main_blue fw-bold roboto">Money back guarantee</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Servicesingle;
