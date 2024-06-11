import React, { useEffect } from "react";
import Subscribe from "../../subscribe/Subscribe";
import protect from "../../images/protected.png";
import Btn from "../../btn/Btn";
import { FaCircleArrowRight } from "react-icons/fa6";

const Protected = () => {
  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="licenses_hero">
        <div className="container">
          <div className="roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="fade-up">Protected Page</h1>
          </div>
        </div>
      </section>
      {/* changelog */}
      <section>
        <div className="container">
          <div className="protect">
            <div className="row mt-5">
              <div className="col-lg-6 mx-auto">
                <div className="row protect_inner p-3 rounded-4 align-items-center">
                  <div className="col-sm-4 col-6 mx-auto mx-sm-0">
                    <img src={protect} alt="" className="w-100" />
                  </div>
                  <div className="col-sm-8">
                    <h6 className="main_blue fw-bold ">Password</h6>
                    <input
                      type="password"
                      className="p-3 my-4 w-100 rounded-3 protect_input"
                      placeholder="Enter Your Password"
                    />
                    <Btn
                    name={"Send Now"}
                    bgcolor={"#274C5B"}
                    color={"white"}
                    border={"0px"}
                    borderHover={"borderblue"}
                    icon={<FaCircleArrowRight />}
                  />
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

export default Protected;
