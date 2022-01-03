import React from "react";
import {Slide, Fade} from 'react-reveal'
import bg1 from '../utils/images/place-1.jpg';
import bg2 from '../utils/images/place-2.jpg';
import bg3 from '../utils/images/place-3.jpg';
import Title from "../components/Title";
import CardLocation from "../components/WhenWhere/CardLocation";

const Whenwhere = () => {
  return (
    <>
      <section className="ftco-section bg-light" id="when-where-section">
        <div className="container">
          <Slide bottom>
          <div className="row justify-content-center pb-5"> 
            <Title title={'Place'} subtitle= {'Place & Time'}/>
          </div>
          </Slide>
          <Fade bottom>
          <div className="row"> 
            <CardLocation bg={bg1} title={'The Reception'} date={'Saturday, 28, 2019'} time={'02:00 pm-10:00 pm'} place={'203 Fake St. Mountain View, San Francisco, California, USA'} number={'+0 (123) 456 78 910'} button={'See Map'}/> 
            <CardLocation bg={bg2} title={'The Ceremony'} date={'Saturday, 28, 2019'} time={'02:00 pm-10:00 pm'} place={'203 Fake St. Mountain View, San Francisco, California, USA'} number={'+0 (123) 456 78 910'} button={'See Map'}/> 
            <CardLocation bg={bg3} title={'The Party'} date={'Saturday, 28, 2019'} time={'02:00 pm-10:00 pm'} place={'203 Fake St. Mountain View, San Francisco, California, USA'} number={'+0 (123) 456 78 910'} button={'See Map'}/>
          </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Whenwhere;
