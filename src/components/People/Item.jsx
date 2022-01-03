import React from "react";

const Item = ({ bg, name, position }) => {
  return (
    <>
      <div className="item">
        <div className="people text-center">
          <div className="img">
            <img src={bg} className="user-img1" alt="foto de perfil" />
          </div>
          <div className="text">
            <h3>{name}</h3>
            <span>{position}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
