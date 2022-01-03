import React from "react";
import { Slide, Fade } from "react-reveal";
import OwlCarousel from "react-owl-carousel";
import Title from "../components/Title";
import Item from "../components/People/Item";
import bg11 from "../utils/images/groom-men-1.jpg";
import bg22 from "../utils/images/groom-men-2.jpg";
import bg33 from "../utils/images/groom-men-3.jpg";
import bg44 from "../utils/images/groom-men-4.jpg";
import bg1 from "../utils/images/bridesmaid-1.jpg";
import bg2 from "../utils/images/bridesmaid-2.jpg";
import bg3 from "../utils/images/bridesmaid-3.jpg";
import bg4 from "../utils/images/bridesmaid-4.jpg";

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
      items: 5,
    },
  },
};

const People = () => {
  return (
    <>
      <section className="ftco-section" id="people-section">
        <div className="container-fluid px-md-5">
          <Slide bottom>
            <div className="row justify-content-center pb-5"> 
              <Title title={'People'} subtitle={'Family & Friends'}/>
            </div>
          </Slide>
          <div className="row">
            <div className="col-md-12">
              <Fade bottom>
                <OwlCarousel
                  className="carousel-friends owl-carousel"
                  {...options}
                > 
                  <Item bg={bg11} name={'Mark Tomy'} position={'Groomsmen'}/> 
                  <Item bg={bg22} name={'John Henceworth'} position={'Groomsmen'}/> 
                  <Item bg={bg33} name={'Rey Cooper'} position={'Groomsmen'}/> 
                  <Item bg={bg44} name={'Robert Chan'} position={'Groomsmen'}/> 
                  <Item bg={bg1} name={'Rose Jones'} position={'Bridesmaid'}/> 
                  <Item bg={bg2} name={'Alicia Brean'} position={'Bridesmaid'}/> 
                  <Item bg={bg3} name={'Mary Dell'} position={'Bridesmaid'}/> 
                  <Item bg={bg4} name={'Angel Worth'} position={'Bridesmaid'}/> 
                </OwlCarousel>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default People;
