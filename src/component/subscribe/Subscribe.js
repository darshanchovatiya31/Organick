import React from "react";
import Btn from "../btn/Btn";

const Subscribe = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="subscribe d-flex px-lg-5 px-4 align-items-center justify-content-md-between justify-content-center flex-column flex-md-row">
            <div>
              <h2 className="text-white fs-1 fw-bold roboto text-center text-md-start" data-aos="fade-right">
                Subscribe to our Newsletter
              </h2>
            </div>
            <div className="align-items-center d-flex gap-1 flex-column flex-sm-row" data-aos="fade-left">
              <input type="text" placeholder="Your Email Address" />
              <Btn
                name={"Subscribe"}
                bgcolor={"#274C5B"}
                color={"white"}
                border={"0px"}
                borderHover={"borderblue"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
