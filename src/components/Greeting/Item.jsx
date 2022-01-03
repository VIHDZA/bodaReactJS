import React from "react";

const Item = ({description, image, name, position}) => {
  return (
    <>
      <div className="item">
        <div className="testimony-wrap py-4">
          <div className="text">
            <p className="mb-4">{description}</p>
            <div className="d-flex align-items-center">
              <div className="user-img">
                <img src={image} className="user-img1" alt="foto de perfil" />
              </div>
              <div className="pl-3">
                <p className="name">{name}</p>
                <span className="position">{position}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
