import React, { useEffect } from "react";
import "../404/Error.css";
import Btn from "../../btn/Btn";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Error = () => {
  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="error_hero">
        <div className="container">
          <div className="roboto d-flex justify-content-md-end justify-content-center align-items-center">
            <div className="row">
              <div className="col text-center" data-aos="fade-right">
                <h1 className="main_error mb-0">404</h1>
                <h1 className="fw-bold main_blue">Page not found</h1>
                <p>
                  The page you are looking for doesn't exist or has been moved
                </p>
                <Link to="/">
                <Btn
                    name={"Go to Homepage"}
                    bgcolor={"#274C5B"}
                    color={"white"}
                    border={"0px"}
                    borderHover={"borderblue"}
                    icon={<FaCircleArrowRight />}
                  /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
