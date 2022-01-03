import React from "react";
import bg1 from "../utils/images/couple-1.jpg";
import bg2 from "../utils/images/couple-2.jpg";
import bg3 from "../utils/images/couple-3.jpg";
import bg4 from "../utils/images/couple-4.jpg";
import Slide from "react-reveal";
import Title from "../components/Title";
import TimelineBadge from "../components/LoveStory/TimelineBadge";
const LoveStory = () => {
  return (
    <section className="ftco-section" id="lovestory-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <Slide Bottom>
          <Title title={'Love Story'} subtitle={'Love  Story'} /> 
          </Slide>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul className="timeline animate-box">
              <Slide bottom>
              <li className="animate-box"> 
                <TimelineBadge bg={bg1} date={'June 10, 2017'} title={'First We Meet'} description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in '}/>
              </li>
              </Slide>
              <Slide bottom>
              <li className="timeline-inverted animate-box"> 
                <TimelineBadge bg={bg2} date={'June 10, 2017'} title={'First Date'} description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.'}/>
              </li>
              </Slide>
              <Slide bottom>
              <li className="animate-box"> 
                <TimelineBadge bg={bg3} date={'June 14, 2017'} title={'In A Relationship'} description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.'}/> 
              </li>
              </Slide>
              <Slide bottom cascade>
              <li className="timeline-inverted animate-box"> 
                <TimelineBadge bg={bg4} date={'May. 10, 2019'} title={"We're Engaged"} description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in.'}/>
              </li>
              </Slide>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
