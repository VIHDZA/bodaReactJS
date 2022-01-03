import React from "react";
import { Slide, Fade } from "react-reveal";
import bg1 from "../utils/images/top-bg.jpg";
import bg2 from "../utils/images/bottom-bg.jpg";
import bg3 from "../utils/images/groom.jpg";
import bg4 from "../utils/images/bride.jpg";
import CardDescription from "../components/DescriptionSection/CardDescription";
import Title from "../components/Title";
const DescriptionSection = () => {
  return (
    <section className="ftco-section bg-section">
      <div className="overlay-top" style={{ backgroundImage: `url(${bg1})` }} />
      <div
        className="overlay-bottom"
        style={{ backgroundImage: `url(${bg2})` }}
      />
      <div className="container">
        <div className="row justify-content-center pb-5">
          <Slide bottom>
            <Title title={'Bride & Groom'} subtitle={'Bride & Groom'} />
          </Slide>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <Fade bottom>
                <div className="col-md-6 text-center d-flex align-items-stretch">
                  <CardDescription
                    name={"Francisco Fredricksen"}
                    bg={bg3}
                    description={
                      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                    }
                  />
                </div>
              </Fade>
              <Fade bottom>
                <div className="col-md-6 text-center d-flex align-items-stretch">
                  <CardDescription
                    name={"Laura Moorey"}
                    bg={bg4}
                    description={
                      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                    }
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
