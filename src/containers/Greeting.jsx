import React from "react";
import { Slide, Fade } from "react-reveal";
import OwlCarousel from "react-owl-carousel";
import Title from "../components/Title";
import Item from "../components/Greeting/Item"; 
import bg1 from "../utils/images/person_1.jpg";
import bg2 from "../utils/images/person_2.jpg";
import bg3 from "../utils/images/person_3.jpg";
 
const options = {
  margin: 50,
  responsiveClass: true,
  dots: true,
  rewind: true,
  autoplay: true,
  smartSpeed: 1000,
  loop: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

const Greeting = () => {
  return (
    <>
      <section className="ftco-section bg-light" id="greeting-section">
        <div className="container"> 
            <div className="row justify-content-center pb-5">
              <Slide bottom> 
                <Title title={'Testimony'} subtitle={'Sweet Messages'}/>
              </Slide>
            </div> 
          <div className="row ">
            <div className="col-md-12">
              <Fade bottom>
                <OwlCarousel className="slider-items owl-carousel" {...options}> 
                  <Item description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'} image={bg1} name={'Roger Scott'} position={'Marketing Manager'}/> 
                  <Item description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'} image={bg2} name={'Roger Scott'} position={'Marketing Manager'}/> 
                  <Item description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'} image={bg3} name={'Roger Scott'} position={'Marketing Manager'}/> 
                  <Item description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'} image={bg1} name={'Roger Scott'} position={'Marketing Manager'}/> 
                  <Item description={'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'} image={bg2} name={'Roger Scott'} position={'Marketing Manager'}/> 
                </OwlCarousel>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Greeting;
