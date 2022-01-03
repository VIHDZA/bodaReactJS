import React from "react";

const CardDescription = ({name, bg, description}) => {
  return (
    <>
      
        <div className="bride-groom">
          <div className="img" style={{ backgroundImage: `url(${bg})` }} />
          <div className="text mt-4 px-4">
            <h2>{name}</h2>
            <p>
              {description}
            </p>
          </div>
        </div> 
    </>
  );
};

export default CardDescription;
