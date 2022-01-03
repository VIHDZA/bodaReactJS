import React, { useState } from "react";
import { Slide, Fade } from "react-reveal";
import Close from "@material-ui/icons/Close";
import "../utils/css/gallery.css"; 
import Title from "../components/Title";
import photo1 from "../utils/images/gallery-1.jpg";
import photo2 from "../utils/images/gallery-2.jpg";
import photo3 from "../utils/images/gallery-3.jpg";
import photo4 from "../utils/images/gallery-4.jpg";
import photo5 from "../utils/images/gallery-5.jpg";
import photo6 from "../utils/images/gallery-6.jpg";
import photo7 from "../utils/images/gallery-7.jpg";
import photo8 from "../utils/images/gallery-8.jpg";

const GallerySec = () => {
  let data = [
    {
      id: 1,
      imgSrc: photo1,
    },
    {
      id: 2,
      imgSrc: photo2,
    },
    {
      id: 3,
      imgSrc: photo3,
    },
    {
      id: 4,
      imgSrc: photo4,
    },
    {
      id: 5,
      imgSrc: photo5,
    },
    {
      id: 6,
      imgSrc: photo6,
    },
    {
      id: 7,
      imgSrc: photo7,
    },
    {
      id: 7,
      imgSrc: photo8,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <section className="ftco-section" id="gallery-section">
        <div className="container-fluid px-md-4">
          <Slide bottom>
            <div className="row justify-content-center pb-5"> 
              <Title title={'Photos'} subtitle={'Gallery'}/>
            </div>
          </Slide> 
            <div className={model ? "model open" : "model"}>
              <img src={tempimgSrc} alt="" />
              <Close onClick={() => setModel(false)} />
            </div>

            <div className="galeria">
              {data.map((item, index) => {
                return (
                  <div
                    className="pics"
                    key={index}
                    onClick={() => getImg(item.imgSrc)}
                  >
                    <div className="overlay">
                      <img
                        src={item.imgSrc}
                        style={{ width: "100%" }}
                        className="img"
                        alt=""
                      />
                    </div>
                  </div>
                );
              })}
            </div> 
        </div>
      </section>
    </>
  );
};

export default GallerySec;
