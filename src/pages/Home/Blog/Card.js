import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { name, image, title, date, description, bgColor, bgImage } = data;
  console.log(image);
  return (
    <div class="col-md-4">
      <div
        class="card mb-2"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 380,
        }}
      >
        <div className="p-4 h-100" style={{ background: `${bgColor}` }}>
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
              <div class="icon">
                <img src={image} alt="" />
              </div>
              <div class="ms-2 c-details">
                <h6 class="mb-0">{name}</h6> <span>{date}</span>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <h3 class="heading">{title}</h3>
            <div class="mt-2">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
