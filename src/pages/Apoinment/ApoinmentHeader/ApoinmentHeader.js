import React from "react";
import chair from "../../../images/chair.png";
import "./ApoinmentHeader.css";

import Calender from "../../Shared/Calender/Calender";

const ApoinmentHeader = () => {
  return (
    <div className="apoinmentHeader my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Calender/>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src={chair} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApoinmentHeader;
