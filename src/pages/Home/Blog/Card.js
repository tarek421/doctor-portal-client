import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { name, image, title, date, description, bgColor, bgImage } = data;
  return (
    <div className="col-md-4">
      <div
        className="card mb-2"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 380,
        }}
      >
        <div className="p-4 h-100" style={{ background: `${bgColor}` }}>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div className="icon">
                <img src={image} alt="" />
              </div>
              <div className="ms-2 c-details">
                <h6 className="mb-0">{name}</h6> <span>{date}</span>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="heading">{title}</h3>
            <div className="mt-2">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
