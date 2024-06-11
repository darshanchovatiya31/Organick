import React, { useEffect } from "react";
import "./About.css";
import { FaCircleArrowRight } from "react-icons/fa6";
import Btn from "../../btn/Btn";
import creative from "../../images/creative.png";
import creative1 from "../../images/creative1.png";
import creative2 from "../../images/creative2.png";
import choose1 from "../../images/choose1.png";
import { FaRegCircle } from "react-icons/fa";
import { choose } from "../../data/Data";
import { team } from "../../data/Data";
import { mainoffer } from "../../data/Data";
import Subscribe from "../../subscribe/Subscribe";
import { Link } from "react-router-dom";

const About = () => {
  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="About_hero">
        <div className="container">
          <div className="roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="fade-down">About Us</h1>
          </div>
        </div>
      </section>
      {/* creative */}
      <section>
        <div className="container">
          <div className="creative my-5">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="creative_left">
                  <img src={creative} alt="creative img" data-aos="fade-right"/>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <div className="creative_right" data-aos="fade-left">
                  <h3 className="main_green yellowtail" data-aos="fade-up">About Us</h3>
                  <h2 className="roboto fs-1 main_blue" data-aos="fade-up">
                    We do Creative Things for Success
                  </h2>
                  <p data-aos="fade-up">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <p data-aos="fade-up">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <div className="creative_inner d-flex my-3 justify-content-between flex-column flex-sm-row">
                    <div className="creative_data d-flex align-items-center my-3"  data-aos="fade-up">
                      <div className="creative_icon">
                        <img src={creative1} alt="creative_icon img" />
                      </div>
                      <div className="creative_text">
                        <h5 className="roboto fw-bolder main_blue mb-0 ms-2">
                          Modern Agriculture Equipment
                        </h5>
                      </div>
                    </div>
                    <div className="creative_data d-flex align-items-center my-3"  data-aos="fade-up">
                      <div className="creative_icon">
                        <img src={creative2} alt="creative_icon img" />
                      </div>
                      <div className="creative_text">
                        <h5 className="roboto fw-bolder main_blue mb-0 ms-2">
                          No growth hormones are used
                        </h5>
                      </div>
                    </div>
                  </div>
                  <Link to="/service" style={{ textDecoration: "none" }}>
                    <Btn
                      name={"Shop Now"}
                      bgcolor={"#274C5B"}
                      color={"white"}
                      border={"0px"}
                      borderHover={"borderblue"}
                      icon={<FaCircleArrowRight />}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* choose */}
      <section className="choose_main">
        <div className="container">
          <div className="choose pb-5">
            <div className="row align-items-center py-5 flex-column-reverse flex-lg-row">
              <div className="col-lg-6">
                <div className="choose_left"  data-aos="fade-right">
                  <h3 className="main_green yellowtail" data-aos="fade-up">Why Choose us?</h3>
                  <h2 className="roboto fs-1 main_blue fw-bold" data-aos="fade-up">
                    We do not buy from the open market & traders.
                  </h2>
                  <p data-aos="fade-up">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard the 1500s,
                    when an unknown
                  </p>
                  <div className="d-flex choose_data align-items-center py-3 ps-4 pe-5 rounded-5 gap-2 mt-4" data-aos="fade-up">
                    <FaRegCircle className="main_green" />
                    <h6 className="main_blue mb-0">100% Natural Product</h6>
                  </div>
                  <p className="ps-5 mt-2 mb-0 choose_text" data-aos="fade-up">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                  <div className="d-flex choose_data align-items-center py-3 ps-4 pe-5 rounded-5 gap-2 mt-4"  data-aos="fade-up">
                    <FaRegCircle className="main_green" />
                    <h6 className="main_blue mb-0"> Increases resistance</h6>
                  </div>
                  <p className="ps-5 mt-2 mb-0 choose_text" data-aos="fade-up">
                    Filling, and temptingly healthy, our Biona Organic Granola
                    with Wild Berries is just the thing
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="choose_right mb-4 mb-lg-0">
                  <img src={choose1} alt="choose right img"  data-aos="fade-left"/>
                </div>
              </div>
            </div>
            <div className="row mx-md-5 mx-sm-0 mx-5 py-lg-5 choose_main_inner">
              {choose.map((items) => (
                <div className="col-lg-3 col-sm-6 col-12">
                  <div className="choose_inner bg-white rounded-5 text-center mt-3 py-5 px-2 px-xl-4 px-xxl-5"  data-aos="fade-down">
                    <img src={items.icon} alt="" />
                    <h5 className="main_blue roboto fw-bold mt-3">
                      {items.name}
                    </h5>
                    <p className="mb-0">{items.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* team */}
      <section>
        <div className="container">
          <div className="team my-5">
            <h3 className="main_green yellowtail text-center" data-aos="zoom-in-up">Team</h3>
            <h2 className="roboto fs-1 main_blue fw-bold text-center" data-aos="zoom-in-up">
              Our Organic Experts
            </h2>
            <p className="text-center team_p mx-auto mb-3" data-aos="zoom-in-up">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <Link to="/team" style={{ textDecoration: 'none'}}>
              <div className="row justify-content-center">
                {team.map((items) => (
                  <div className="col-md-4 col-sm-6 col-12 mt-3">
                    <div className="team_data rounded-5 mx-5 mx-sm-0">
                      <div className="team_img">
                        <img src={items.image} alt="" />
                      </div>
                      <div className="p-lg-4 p-3">
                        <h4 className="main_blue fw-bold">{items.name}</h4>
                        <div className="d-flex justify-content-between">
                          <h5 className="main_green yellowtail">
                            {items.text}
                          </h5>
                          <div className="main_blue gap-2 d-flex">
                            {items.icon1}
                            {items.icon2}
                            {items.icon3}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* main_offer */}
      <section className="bg_main_offer py-5">
        <div className="container">
          <div className="main_offer">
            .<h3 className="main_green yellowtail text-center"  data-aos="fade-left">About Us</h3>
            <h2 className="roboto fs-1 text-white fw-bold text-center"  data-aos="fade-right">
              What We Offer for You
            </h2>
            <div className="row">
              {mainoffer.map((items) => (
                <div className="col-lg-3 col-sm-6 mt-4">
                  <div className="main_offer_data px-4 px-sm-0">
                    <div className="mx-auto bg-white rounded-4">
                      <img src={items.image} alt="" />
                    </div>
                    <h5 className="roboto text-white text-center mt-2">
                      {items.name}
                    </h5>
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

export default About;
