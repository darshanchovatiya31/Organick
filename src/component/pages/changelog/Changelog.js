import React, { useEffect } from 'react'
import changelog from "../../images/changelog.png"
import Subscribe from '../../subscribe/Subscribe'

const Changelog = () => {
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
            <h1 className="fw-bold" data-aos="fade-up">Changelog</h1>
          </div>
        </div>
      </section>
      {/* changelog */}
      <section>
            <div className="container">
                  <div className="changelog">
                        <div className="row mt-5">
                              <div className="col-lg-6  mx-auto" data-aos="fade-up">
                                    <div className="changelog_inner d-flex p-3 rounded-4">
                                          <div className="changelog_img">
                                                <img src={changelog} alt="" className='w-100'/>
                                          </div>
                                          <p className="ms-3 align-items-center d-flex mb-0"><span className="me-2 fw-bold fs-2 main_blue">V.1</span> Initial Organick Webflow Template Release</p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </section>

      <Subscribe />
    </>
  )
}

export default Changelog