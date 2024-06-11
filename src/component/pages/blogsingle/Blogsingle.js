import React, { useContext, useEffect } from "react";
import "../blogsingle/Blogsingle.css";
import Subscribe from "../../subscribe/Subscribe";
// import hero from "../../images/blogsingle.png";
import { FaUser } from "react-icons/fa";
import { CratContext } from "../../Context/CartContext";

const Blogsingle = () => {
  const {cartitems} = useContext(CratContext)

  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
      {/* hero */}
      <section className="blogsingle_hero">
        <img src={cartitems.cartItem.image} alt="" className="w-100 blogsingle_hero_img" />
        <div className="blogsingle_inner">
          <div className="container">
            <div className="row gap-3 gap-sm-0">
              <div className="col p-3 p-sm-5 bg-white hero_left rounded-4" data-aos="fade-up">
                <p className="main_blue align-items-center"><b>Posted On: </b>January 6, 2022 <FaUser className="main_green"/> By Rachi Card</p>
                <h1 className="main_blue fw-bold roboto">
                  {cartitems.cartItem.data}
                </h1>
                <p className="blogsingle_hero_inner">
                  Established fact that a reader will be distracted by the
                  readable content of a page when looking a layout. The point of
                  using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* farm */}
      <section>
        <div className="container">
          <div className="farm mt-5">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p data-aos="fade-up">
                  Uniquely matrix economically sound value through cooperative
                  technology. Competently parallel task fully researched data
                  and enterprise process improvements. Collaboratively expedite
                  quality manufactured products via client-focused results
                  quickly communicate enabled technology and turnkey leadership
                  skills. Uniquely enable accurate supply chains rather than
                  friction technology.
                </p>
                <h2 className="main_blue fw-bold mb-4" data-aos="fade-up">
                  Preferred Form of Vitamin D?
                </h2>
                <p data-aos="fade-up">
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
                <p data-aos="fade-up">
                  . Publishing packages and web pageLorem Ipsum as their default
                </p>
                <p data-aos="fade-up">
                  . Content here, content here', making it look like readable
                </p>
                <p data-aos="fade-up">. Packages and web pageLorem Ipsum as their default</p>
                <div className="text-center blogsingle_text fw-bold main_blue p-sm-5 p-4 rounded-5 my-sm-5 my-4" data-aos="fade-down">
                “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
                </div>
                <h2 className="main_blue fw-bold mb-4" data-aos="fade-up">
                  Make perfect organic product with us
                </h2>
                <p data-aos="fade-up">
                  it is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
                <p data-aos="fade-up"> 1. Publishing packages and web pageLorem Ipsum as their default</p>
                <p data-aos="fade-up"> 2. Content here, content here', making it look like readable</p>
                <p data-aos="fade-up"> 3. Packages and web pageLorem Ipsum as their default</p>
                <p data-aos="fade-up"> 4. more-or-less normal distribution of letters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Blogsingle;
