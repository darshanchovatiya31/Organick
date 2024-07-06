import React, { useEffect } from "react";
import "../contact/Contact.css";
import together from "../../images/together.png";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import location from "../../images/location.png";
import { CiLocationOn } from "react-icons/ci";
import Subscribe from "../../subscribe/Subscribe";
import Btn from "../../btn/Btn";


const Contact = () => {
  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="contact_hero">
        <div className="container">
          <div className="roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="fade-up">Contact Us</h1>
          </div>
        </div>
      </section>
      {/* together */}
      <section>
        <div className="container">
          <div className="together my-5">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 col-sm-9 col-12 mb-4 mb-lg-0 mx-auto">
                <div className="together_left" data-aos="fade-right">
                  <img src={together} alt="" className="w-100" />
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="together_right" data-aos="fade-left">
                  <h2 className="main_blue fw-bold fs-1">
                    We'd love to talk about how we can work together.
                  </h2>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <div className="together_data d-flex border p-2 gap-3 rounded-3" data-aos="fade-up">
                    <div className="together_data_icon d-flex align-items-center justify-content-center rounded-2 main_green fs-3">
                      <MdOutlineEmail />
                    </div>
                    <div>
                      <h5 className="mb-0 main_blue">Massege</h5>
                      <p className="mb-0">support@organic.com</p>
                    </div>
                  </div>
                  <div className="together_data d-flex border p-2 gap-3 rounded-3 mt-3" data-aos="fade-up">
                    <div className="together_data_icon d-flex align-items-center justify-content-center rounded-2 main_green fs-3">
                      <IoCallOutline />
                    </div>
                    <div>
                      <h5 className="mb-0 main_blue">Contact Us</h5>
                      <p className="mb-0">+01 123 456 789</p>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mt-4" data-aos="fade-up">
                    <div className="footer_icon main_blue">
                      <FaInstagram />
                    </div>
                    <div className="footer_icon main_blue">
                      <FaFacebook />
                    </div>
                    <div className="footer_icon main_blue">
                      <FaTwitter />
                    </div>
                    <div className="footer_icon main_blue">
                      <FaPinterest />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* location */}
      <section>
        <div className="container">
          <div className="location position-relative">
            <div className="row">
              <div className="col location_inner_left">
                <img src={location} alt="" className="w-100" />
              </div>
              <div className="col-3 location_inner position-absolute bg-white rounded-4 p-3 p-sm-5">
                <div>
                  <h3 className="main_green yellowtail">Location</h3>
                  <h2 className="main_blue roboto fw-bold">Our Farms</h2>
                  <p>
                    Established fact that a reader will be distracted by the
                    readable content of a page when looking a layout. The point
                    of using.
                  </p>
                  <div className="d-flex">
                    <div className="fs-2 main_green align-items-start d-flex">
                      <CiLocationOn />
                    </div>
                    <div>
                      <h6 className="mb-0">New York, USA:</h6>
                      <p className="mb-2">
                        299 Park Avenue New York, New York 10171
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="fs-2 main_green align-items-start d-flex">
                      <CiLocationOn />
                    </div>
                    <div>
                      <h6 className="mb-0">London, UK:</h6>
                      <p className="mb-0">30 Stamford Street, London SE1 9LQ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* submite_form */}
      <section>
        <div className="container">
          <div className="submite_form my-5">
            <div className="row mb-4">
              <div className="col-sm-6 mb-4 mb-sm-0" data-aos="fade-up">
                <h6 className="roboto main_blue">Full Name*</h6>
                <input
                  className="form_border p-3 w-100 rounded-3"
                  type="text"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="col-sm-6" data-aos="fade-up">
                <h6 className="roboto main_blue">Your Email*</h6>
                <input
                  className="form_border p-3 w-100 rounded-3"
                  type="email"
                  placeholder="example@yourmail.com"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-sm-6 mb-4 mb-sm-0" data-aos="fade-up">
                <h6 className="roboto main_blue">Company*</h6>
                <input
                  className="form_border p-3 w-100 rounded-3"
                  type="text"
                  placeholder="yourcompany name here"
                />
              </div>
              <div className="col-sm-6" data-aos="fade-up">
                <h6 className="roboto main_blue">Subject*</h6>
                <input
                  className="form_border p-3 w-100 rounded-3"
                  type="email"
                  placeholder="how can we help"
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col" data-aos="fade-up">
                <h6 className="roboto main_blue">Message*</h6>
                <textarea name="" className="form_border p-3 w-100 rounded-3" rows={6} placeholder="hello there,i would like to talk about how to..." id=""></textarea>
              </div>
            </div>
            <div>
            <Btn
                name={"Send Message"}
                bgcolor={"#274C5B"}
                color={"white"}
                border={"0px"}
                borderHover={"borderblue"}
              />
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Contact;
