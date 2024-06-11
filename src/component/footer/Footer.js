import React from "react";
import logo from "../images/Logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer my-5">
            <div className="row">
              <div className="col-md-3 col-12">
                <div className="footer_data text-md-end">
                  <h3 className="main_blue roboto mb-4">Contact Us</h3>
                  <h6 className="mb-0">Email</h6>
                  <p>needhelp@Organia.com</p>
                  <h6 className="mb-0">Phone</h6>
                  <p>666 888 888</p>
                  <h6 className="mb-0">Address</h6>
                  <p>88 road, borklyn street, USA</p>
                </div>
              </div>
              <div className="col-md-6 col-12 my-3 my-md-0">
                <div className="footer_data text-center border-end border-start border-2 px-4 pb-5">
                  <img src={logo} alt="logo img" />
                  <p className="py-3">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing{" "}
                  </p>
                  <div className="d-flex justify-content-center gap-3">
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
              <div className="col-md-3 col-12">
                <div className="footer_data">
                  <h3 className="main_blue roboto mb-4">Utility Pages</h3>
                  <p>Style Guide</p>
                  <Link to="/error" style={{ textDecoration: "none",color:"black" }}>
                  <p>404 Not Found</p>
                  </Link>
                  <Link to="/protected" style={{ textDecoration: "none",color:"black"}}>
                  <p>Password Protected</p>
                  </Link>
                  <Link to="/licenses" style={{ textDecoration: "none",color:"black" }}>
                  <p>Licences</p>
                  </Link>
                  <Link to="/changelog" style={{ textDecoration: "none",color:"black" }}>
                  <p>Changelog</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr />
      <footer>
        <div className="container text-center">
          <p className="footer_bar">
            Copyright © <span className="fw-bold">Organick</span> | Designed by{" "}
            <span className="fw-bold">VictorFlow</span> Templates - Powered by{" "}
            <span className="fw-bold">Webflow</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
