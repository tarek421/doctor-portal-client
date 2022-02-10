import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Banner.css";

const HeaderBottom = () => {
  return (
    <div className="container">
      <div style={{marginTop:"-60px"}} className="row">
        <div className="col-md-4 col-sm-4">
          <div className="card-container d-flex">
            <div className="icon">
              <FontAwesomeIcon className="icon" icon={faClock} />
            </div>
            <div className="content">
              <h6>Opening Hours</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div style={{backgroundColor:"rgb(60 62 70)", color:"white"}} className="card-container d-flex">
            <div className="icon">
              <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
            </div>
            <div className="content">
              <h6>Visit Our Location</h6>
              <p>
                Brooklyn, NY10036, United States
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 d-flex">
          <div className="card-container d-flex">
            <div className="icon">
              <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            </div>
            <div className="content">
              <h6>Contact Us Now</h6>
              <p>
                +000123456789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
