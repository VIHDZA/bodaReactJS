import React from 'react'
import background from '../utils/images/about.jpg' 
import Slide from "react-reveal";
const GroomAndBride = () => {
    return (
        <section className="ftco-section ftco-about ftco-no-pt ftco-no-pb" id="groom-bride-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="wrap">
                  <div className="row d-flex">
                    <div className="col-md-6 d-flex">
                      <div className="img d-flex align-self-stretch align-items-center" style={{backgroundImage: `url(${background}`}}>
                      </div>
                    </div>
                    <Slide bottom>
                      <div className="col-md-6 py-md-5 text">
                        <div className="py-md-4">
                          <div className="row justify-content-start pb-3">
                            <div className="col-md-12  p-4 p-lg-5 text-center"> 
                              <span className="subheading mb-4">Join us to celebrate <br />the wedding day of</span>
                              <h2 className="mb-4">Francisco <span>&amp;</span> Laura</h2>
                              <span className="icon flaticon-rose-variant-outline-with-vines" />
                              <span className="subheading">Which is celebration on</span>
                              <p className="time mb-4"><span>Dec | 28 | 2019</span></p>
                              <span className="subheading mb-5">Starting at 2:00 <br /> in the afternoon</span>
                              <span className="subheading mb-5">Saint John Paul Church <br /> in YorkNew.in</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slide>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default GroomAndBride
