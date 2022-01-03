import React from "react";
import Background from "../utils/images/bg_1.jpg";
/* import coverVideo from '../utils/videos/background.mp4' */

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="inicio video-hero full-height"
        style={{
          backgroundImage: `url(${Background})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        {/* <div className="cover-container">
          <video className="player" src={coverVideo} autoPlay loop muted showControls='false' containment='#home' startAt='0' opacity='1' quality='default' optimizeDisplay='true'/>
        </div>  */}
        <div className="container">
          <div
            className="row full-height justify-content-center d-flex align-items-center"
            style={{
              height: "100vh",
            }}
          > 
              <div className="col-md-12">
                <div className="text text-center">
                  <div className="icon">
                    <span className="flaticon-rose-outline-variant-with-vines-and-leaves" />
                  </div>
                  <span className="subheading">The Wedding of</span>
                  <h1>Francisco &amp; Laura</h1>
                  <div id="timer" className="d-flex">
                    <div className="time" id="days" />
                    <div className="time pl-3" id="hours" />
                    <div className="time pl-3" id="minutes" />
                    <div className="time pl-3" id="seconds" />
                  </div>
                </div>
              </div> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
