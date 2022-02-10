import React from "react";
import "./Testimonial.css";
import quoteBg from "../../../images/qoute-bg.png";
import people1 from "../../../images/people-1.png";
import people2 from "../../../images/people-2.png";
import people3 from "../../../images/people-3.png";

const Testimonial = () => {
  return (
    <div className="container my-5 py-5 text-start testimonial">
      <div className="testimonial-header">
        <div className="row">
          <div className="col-md-10 col-sm-12">
            <h4 style={{color:'#15d1c3'}}>TESTIMONIAL</h4>
            <h1>
              What's Our Patient <br />
              Says
            </h1>
          </div>
          <div className="col-md-2 d-sm-none d-md-block">
            <img style={{height:'130px'}} src={quoteBg} alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial-content mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="card border-0">
              <p>
                It's long established fact by that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu of using `Content here, content.
              </p>
              <div className="card-f d-flex align-items-end justify-content-evenly mt-5">
                <img src={people1} alt="" />
                <div className="info">
                  <h4>Winson Herry</h4>
                  <p>Califonnia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card">
              <p>
                It's long established fact by that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu of using `Content here, content.
              </p>
              <div className="card-f d-flex align-items-end justify-content-evenly mt-5">
                <img src={people2} alt="" />
                <div className="info">
                  <h4>Winson Herry</h4>
                  <p>Califonnia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card">
              <p>
                It's long established fact by that by the readable content of a
                lot layout. The point of using Lorem a more-or-less normal
                distribu of using `Content here, content.
              </p>
              <div className="card-f d-flex align-items-end justify-content-evenly mt-5">
                <img src={people3} alt="" />
                <div className="info">
                  <div>
                  <h4>Winson Herry</h4>
                  <p>Califonnia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
