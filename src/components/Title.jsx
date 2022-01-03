import React from "react";

const Title = ({title, subtitle}) => {
  return (
    <>
      <div className="col-md-12 text-center heading-section">
        <span className="clone">{title}</span>
        <h2 className="mb-3">{subtitle}</h2>
      </div>
    </>
  );
};

export default Title;
