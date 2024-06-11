import React, { useContext, useEffect } from "react";
import "../blog/Blog.css";
import Subscribe from "../../subscribe/Subscribe";
import { recent } from "../../data/Data";
import Btn from "../../btn/Btn";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CratContext } from "../../Context/CartContext";

const Blog = () => {
  const navigate=useNavigate();
  const {cartitems}=useContext(CratContext);
  const BlogHendle=(item)=>{
    cartitems.setCartItem(item)
    navigate("/blogsingle")
  }

  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="blog_hero">
        <div className="container">
          <div className="roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="zoom-in-up">Recent News</h1>
          </div>
        </div>
      </section>
      {/* recent */}
      <section>
        <div className="container">
          <div className="weekly">
            <div className="row mb-5">
              {recent.map((items) => (
                <div className="col-lg-6">
                  <div className="weekly_inner my-5 position-relative">
                    <div className="weekly_img">
                      <img src={items.image} alt="weekly img" />
                    </div>
                    <div className="weekly_data bg-white p-xl-5 p-lg-4 p-md-5 p-sm-4 p-3  position-absolute rounded rounded-5"  data-aos="fade-up">
                      <div className="d-flex align-items-center main_green">
                        {items.user}
                        <p className="mb-0 main_blue ms-2">{items.name}</p>
                      </div>
                      <h5 className="main_blue fw-bold">{items.data}</h5>
                      <p>{items.text}</p>
                      <Btn
                        onClick={()=>BlogHendle(items)}
                        name={"Read More"}
                        bgcolor={"white"}
                        color={"#274C5B"}
                        borderHover={"bgblue"}
                        border={"2px solid #274C5B"}
                        icon={<FaCircleArrowRight />}
                      />
                    </div>
                    <div className="weekly_mor bg-white position-absolute main_blue"  data-aos="fade-right">
                      <h5 className="mb-0 fw-bold">25</h5>
                      <h6 className="mb-0 fw-bold">Nov</h6>
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

export default Blog;
