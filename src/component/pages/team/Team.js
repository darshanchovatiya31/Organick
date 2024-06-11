import React, { useEffect } from 'react'
import "../team/Team.css"
import Subscribe from '../../subscribe/Subscribe'
import { ourteam } from '../../data/Data'

const Team = () => {
  const ScrollTop = ()=>{
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    ScrollTop();
  }, [])
  return (
    <>
     {/* hero */}
     <section className="team_hero">
        <div className="container">
          <div className="roboto d-flex justify-content-center align-items-center main_blue">
            <h1 className="fw-bold" data-aos="zoom-in-up">Our Team</h1>
          </div>
        </div>
      </section>
      {/* our team */}
      <section>
        <div className="container">
          <div className="team my-5">
            <h3 className="main_green yellowtail text-center"  data-aos="fade-down">Team</h3>
            <h2 className="roboto fs-1 main_blue fw-bold text-center"  data-aos="fade-left">
              Our Organic Experts
            </h2>
            <p className="text-center team_p mx-auto mb-3"  data-aos="fade-up">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="row justify-content-center">
              {ourteam.map((items) => (
                <div className="col-md-4 col-sm-6 col-12 mt-3">
                  <div className="team_data rounded-5 mx-5 mx-sm-0">
                    <div className="team_img">
                      <img src={items.image} alt="" />
                    </div>
                    <div className="p-lg-4 p-3">
                      <h4 className="main_blue fw-bold">{items.name}</h4>
                      <div className="d-flex justify-content-between">
                        <h5 className="main_green yellowtail">{items.text}</h5>
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
          </div>
        </div>
      </section>

     <Subscribe/>
    </>
  )
}

export default Team