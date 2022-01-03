import React from "react";
import { Slide, Fade } from "react-reveal";
import Title from "../components/Title";

const Rsvp = () => {
  return (
    <>
      <section className="ftco-section bg-secon" id="rsvp-section">
        <div className="container">
          <Fade bottom>
            <div className="row justify-content-center pb-5"> 
              <Title title={'RSVP'} subtitle={'Are Your Attending?'}/>
            </div>
          </Fade>
          <div className="row justify-content-center">
            <div className="col-md-7">
              <Slide bottom>
              <form action="#" className="rsvp-form ">
                <div className>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className>
                  <div className="form-group">
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="ion-ios-arrow-down" />
                        </div>
                        <select name id className="form-control">
                          <option value>Guest</option>
                          <option value>1</option>
                          <option value>2</option>
                          <option value>3</option>
                          <option value>4</option>
                          <option value>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className>
                  <div className="form-group">
                    <textarea
                      name
                      id
                      cols={30}
                      rows={2}
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="I am attending"
                      className="btn btn-primary py-3 px-4"
                    />
                  </div>
                </div>
              </form>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rsvp;
