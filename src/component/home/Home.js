import React, { useContext, useEffect } from "react";
import "./Home.css";
import herobg from "../images/hero2.png";
import inner_hero1 from "../images/inner_hero1.png";
import inner_hero2 from "../images/inner_hero2.png";
import believe from "../images/believe.png";
import believe_icon1 from "../images/believe_icon1.png";
import believe_icon2 from "../images/believe_icon2.png";
import customer1 from "../images/customer1.png";
import star from "../images/Star.png";
import { FaCircleArrowRight } from "react-icons/fa6";
import Btn from "../btn/Btn";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { customer } from "../data/Data";
import { offer } from "../data/Data";
import { organic } from "../data/Data";
import Productcard from "../card/Productcard";
import { weekly } from "../data/Data";
import Subscribe from "../subscribe/Subscribe";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CratContext } from "../Context/CartContext";

const Home = () => {
  const navigate = useNavigate();
  const { cartitems } = useContext(CratContext);

  const AddCartHendle = (item) => {
    cartitems.setCartItem(item);
    navigate("/shopsingle");
  };
  const BlogHandle = (item) => {
    cartitems.setCartItem(item);
    navigate("/blogsingle");
  };

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    ScrollTop();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* hero */}
      <section>
        <div className="hero_bg position-relative">
          <img src={herobg} alt="" className="w-100 position-absolute" />
          <div className="container ">
            <div className="hero">
              <div>
                <h2 className="main_green yellowtail" data-aos="zoom-out-down">100% Natural Food</h2>
                <h1 className="roboto main_blue" data-aos="fade-right">
                  Choose the best healthier way of life
                </h1>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <div data-aos="fade-up">
                    <Btn
                      name={"Explore Now"}
                      bgcolor={"#EFD372"}
                      color={"#274C5B"}
                      border={"0px"}
                      borderHover={"borderyellow"}
                      icon={<FaCircleArrowRight />}
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>
      {/* inner_hero */}
      <section>
        <div className="container">
          <div className="inner_hero my-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="inner_hero_left" data-aos="fade-right">
                  <img src={inner_hero1} alt="inner_hero img" />
                </div>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <div className="inner_hero_right" data-aos="fade-left">
                  <img src={inner_hero2} alt="inner_hero img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* believe */}
      <section>
        <div className="container">
          <div className="believe my-5">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="believe_left">
                  <img src={believe} alt="believe img" data-aos="zoom-in" data-aos-duration="1500"/>
                </div>
              </div>
              <div className="col-12 col-lg-6 d-flex align-items-center">
                <div className="believe_right" data-aos="zoom-in" data-aos-duration="1500">
                  <h3 className="main_green yellowtail" data-aos="fade-left">About Us</h3>
                  <h2 className="roboto fs-1 main_blue" data-aos="fade-left">
                    We Believe in Working Accredited Farmers
                  </h2>
                  <p data-aos="fade-left">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <div className="believe_inner">
                    <div className="believe_data d-flex align-items-center mb-4" data-aos="fade-up">
                      <div className="believe_icon">
                        <img src={believe_icon1} alt="believe_icon img" />
                      </div>
                      <div className="believe_text">
                        <h5 className="roboto fw-bolder main_blue mb-0">
                          Organic Foods Only
                        </h5>
                        <p className="mb-0">
                          Simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum
                        </p>
                      </div>
                    </div>
                    <div className="believe_data d-flex align-items-center mb-4" data-aos="fade-up">
                      <div className="believe_icon">
                        <img src={believe_icon2} alt="believe_icon img" />
                      </div>
                      <div className="believe_text">
                        <h5 className="roboto fw-bolder main_blue mb-0">
                          Quality Standards
                        </h5>
                        <p className="mb-0">
                          Simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to="/service" style={{ textDecoration: "none" }}>
                    <div data-aos="fade-up">
                    <Btn
                      name={"Shop Now"}
                      bgcolor={"#274C5B"}
                      color={"white"}
                      border={"0px"}
                      borderHover={"borderblue"}
                      icon={<FaCircleArrowRight />}
                    />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* product */}
      <section>
        <div className="container">
          <div className="product">
            <h3 className="text-center main_green yellowtail" data-aos="fade-down">Categories</h3>
            <h2 className="text-center roboto fw-bolder fs-1 main_blue" data-aos="fade-down">
              Our Products
            </h2>
            <div className="row">
              <Productcard />
            </div>
            <div className="d-flex justify-content-center mt-4 mb-5">
              <Link to="/shop" style={{ textDecoration: "none" }}>
                <div data-aos="fade-up">
                <Btn
                  name={"Load More"}
                  bgcolor={"#274C5B"}
                  color={"white"}
                  border={"0px"}
                  borderHover={"borderblue"}
                  icon={<FaCircleArrowRight />}
                />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* customer */}
      <section className="customer_main">
        <div className="container">
          <div className="customer">
            <div className="row mt-5">
              <div className="col text-center my-5">
                <Slider {...settings}>
                  <div>
                    <h3 className=" main_green yellowtail">Testimonial</h3>
                    <h2 className=" roboto fw-bolder fs-1 main_blue">
                      What Our Customer Saying?
                    </h2>
                    <div className="d-flex justify-content-center mt-5 mb-3">
                      <img src={customer1} alt="customer img" />
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                      <img src={star} alt="star img" />
                    </div>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <h5 className="mt-3">Sara Taylor</h5>
                    <p>Consumer</p>
                  </div>
                  <div>
                    <h3 className=" main_green yellowtail">Testimonial</h3>
                    <h2 className=" roboto fw-bolder fs-1 main_blue">
                      What Our Customer Saying?
                    </h2>
                    <div className="d-flex justify-content-center mt-5 mb-3">
                      <img src={customer1} alt="customer img" />
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                      <img src={star} alt="star img" />
                    </div>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <h5 className="mt-3">Sara Taylor</h5>
                    <p>Consumer</p>
                  </div>
                  <div>
                    <h3 className=" main_green yellowtail">Testimonial</h3>
                    <h2 className=" roboto fw-bolder fs-1 main_blue">
                      What Our Customer Saying?
                    </h2>
                    <div className="d-flex justify-content-center mt-5 mb-3">
                      <img src={customer1} alt="customer img" />
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                      <img src={star} alt="star img" />
                    </div>
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum simply dummy text of the printing
                      and typesetting industry. Lorem Ipsum has been.
                    </p>
                    <h5 className="mt-3">Sara Taylor</h5>
                    <p>Consumer</p>
                  </div>
                </Slider>
              </div>
            </div>
            <hr />
            <div className="row">
              {customer.map((items) => (
                <div className="col-12 col-sm-6 col-xl-3 my-xl-5 ">
                  <div className="customer_vive mx-auto my-xl-5 my-md-4 my-sm-3 my-2" data-aos="zoom-in">
                    <h2 className="main_blue">{items.count}</h2>
                    <h6 className="main_blue">{items.categary}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* offer */}
      <section className="main_bg_blue">
        <div className="container">
          <div className="offer">
            <div className="d-md-flex align-items-center justify-content-between">
              <div data-aos="fade-right">
                <h3 className=" main_green yellowtail">Offer</h3>
                <h2 className=" roboto fw-bolder fs-1 text-white">
                  We Offer Organic For You
                </h2>
              </div>
              <div data-aos="fade-left">
                <Link to="/shop" style={{ textDecoration: "none" }}>
                  <Btn
                    name={"View All Product"}
                    bgcolor={"#EFD372"}
                    color={"#274C5B"}
                    border={"0px"}
                    borderHover={"borderyellow"}
                    icon={<FaCircleArrowRight />}
                  />
                </Link>
              </div>
            </div>
            <div className="row">
              {offer.map((items) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3 my-3 product_col" data-aos="fade-up"
                  onClick={() => AddCartHendle(items)}
                >
                  <div className="product_data p-3 position-relative">
                    <div className="main_bg_blue product_head rounded mb-2"  data-aos="fade-right" data-aos-duration="1000">
                      <p className="text-white mb-0 py-1 px-2">{items.title}</p>
                    </div>
                    <img
                      src={items.image}
                      alt="product img"
                      className="product_data_img"
                    />
                    <h6 className="main_blue fw-bold mt-2">{items.name}</h6>
                    <hr className="mb-0" />
                    <div className="product_data_inner d-flex justify-content-between">
                      <p className="mb-0 main_blue fw-bold">
                        <span>{items.oldprice}</span> {items.newprice}
                      </p>
                      <img src={items.rating} alt="" />
                    </div>
                    <div className="position-absolute shop_hover">
                      <div className="fs-3">
                        <CiHeart />
                      </div>
                      <div className="fs-3">
                        <MdOutlineShoppingCart />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* econis */}
      <section className="econis_main">
        <div className="container-fluid">
          <div className="econis">
            <div className="row">
              <div className="col">
                <div className="econis_right py-5">
                  <h3 className="main_green yellowtail" data-aos="fade-up">Eco Friendly</h3>
                  <h2 className="roboto fw-bolder fs-1 main_blue" data-aos="fade-up">
                    Econis is a Friendly Organic Store
                  </h2>
                  <h4 className="main_blue mt-3" data-aos="fade-up">
                    Start with Our Company First
                  </h4>
                  <p data-aos="fade-up">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                  <h4 className="main_blue" data-aos="fade-up">Learn How to Grow Yourself</h4>
                  <p data-aos="fade-up">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                  <h4 className="main_blue" data-aos="fade-up">Farming Strategies of Today</h4>
                  <p data-aos="fade-up">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* organic */}
      <section>
        <div className="container">
          <div className="organic my-5">
            <div className="row">
              {organic.map((items) => (
                <div className="col-xl-4 col-md-6 mx-auto">
                  <div className="organic_inner position-relative mt-4 ">
                    <div className="organic_img">
                      <img src={items.image} alt="organic img" />
                    </div>
                    <div className="position-absolute organic_btn" data-aos="zoom-in-up">
                      <button className="py-3 px-4 bg-white rounded rounded-4 border-0 main_blue roboto fw-bold fs-5">
                        {items.name}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* weekly */}
      <section>
        <div className="container">
          <div className="weekly">
            <div className="d-md-flex align-items-center justify-content-between weekly_head">
              <div data-aos="fade-right">
                <h3 className=" main_green yellowtail">News</h3>
                <h2 className=" roboto fw-bolder fs-1 main_blue">
                  Discover weekly content about organic food, & more
                </h2>
              </div>
              <div data-aos="fade-left">
                <Link to="/blog" style={{ textDecoration: "none" }}>
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
            <div className="row mb-5">
              {weekly.map((items) => (
                <div className="col-lg-6">
                  <div className="weekly_inner my-5 position-relative">
                    <div className="weekly_img">
                      <img src={items.image} alt="weekly img" />
                    </div>
                    <div className="weekly_data bg-white p-xl-5 p-lg-4 p-md-5 p-sm-4 p-3  position-absolute rounded rounded-5" data-aos="fade-down">
                      <div className="d-flex align-items-center yellow_color">
                        {items.user}
                        <p className="mb-0 main_blue ms-2">{items.name}</p>
                      </div>
                      <h5 className="main_blue fw-bold">{items.data}</h5>
                      <p>{items.text}</p>
                      <Btn
                        onClick={() => BlogHandle(items)}
                        name={"Read More"}
                        bgcolor={"#EFD372"}
                        color={"#274C5B"}
                        border={"0px"}
                        borderHover={"borderyellow"}
                        icon={<FaCircleArrowRight />}
                      />
                    </div>
                    <div className="weekly_mor bg-white position-absolute" data-aos="fade-right">
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

export default Home;
