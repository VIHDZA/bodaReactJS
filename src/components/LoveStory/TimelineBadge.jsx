import React from "react";

const TimelineBadge = ({bg, date, title, description }) => {
  return (
    <>
      <div
        className="timeline-badge"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="timeline-panel  text-md-right">
        <div className="overlay" />
        <div className="timeline-heading">
          <span className="date">{date}</span>
          <h3 className="timeline-title">{title}</h3>
        </div>
        <div className="timeline-body">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default TimelineBadge;
