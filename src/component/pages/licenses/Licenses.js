import React, { useEffect } from "react";
import Subscribe from "../../subscribe/Subscribe";

const Licenses = () => {
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
            <h1 className="fw-bold" data-aos="fade-up">Licenses</h1>
          </div>
        </div>
      </section>
      {/* licenses */}
      <section>
        <div className="container">
          <div className="licenses mt-5">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-up">
                <h2 className="main_blue fw-bold roboto">Icon & Graphics</h2>
              </div>
              <div className="col-lg-8" data-aos="fade-up">
                <p>
                  Icons and Graphics are manually designed by the
                  <span className="main_green fw-bold">VictorFlow</span>
                  Templates team. You may download these and edit them to fit
                  your website without asking for permission or providing
                  credit.
                </p>
                <p>
                  Upon purchasing Software UI Kit Template our team grants you a
                  nonexclusive, worldwide copyright license to download, copy,
                  modify, and use the icons.
                </p>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-lg-4" data-aos="fade-up">
                <h2 className="main_blue fw-bold roboto">Photography</h2>
              </div>
              <div className="col-lg-8" data-aos="fade-up">
                <p>
                  All images used in the Organick Webflow Template are licensed
                  for free personal and commercial use. If you'd like to use any
                  specific image, you can check the licenses and download the
                  images for free on Unsplash, Pexels‍. And Freepik.
                </p>
                <h3 className="main_blue fw-bold roboto mt-4">Unsplash</h3>
                <p className="main_blue">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                  Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,
                </p>
                <h3 className="main_blue fw-bold roboto mt-4">Pixcel</h3>
                <p className="main_blue">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17,
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4" data-aos="fade-up">
                <h2 className="main_blue fw-bold roboto">Font</h2>
              </div>
              <div className="col-lg-8" data-aos="fade-up">
                <p>
                  Organick template uses free licensed Google Fonts. Please
                  check <span className="main_blue fw-bold">Roboto, Yellowtail</span> and <span className="main_blue fw-bold">Open Sans</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />
    </>
  );
};

export default Licenses;
