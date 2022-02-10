import React from "react";
import treatment from "../../../images/treatment.png";

const ExceptionalDental = () => {
  return (
    <div style={{ height: "100vh", marginTop:'50px' }}>
      <div className="exceptional-dental text-start">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <div className="img">
                <img
                  style={{width: "100%" }}
                  src={treatment}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7 col-sm-12">
              <div className="dental-content">
                <h1>Exception Dental Care, On Your Tearms</h1>
                <p className="mt-md-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quis, similique cupiditate, placeat, natus est ut veniam
                  minima laudantium impedit at unde. Omnis eligendi ipsam
                  suscipit, porro ullam vitae sapiente dolorum dolore ipsum sint
                  laboriosam hic provident! Minima illum unde molestiae dolorum <br />
                  porro. Numquam, praesentium? Ratione aliquid dolor qui
                  accusamus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae et optio corrupti veritatis nostrum maxime pariatur repellendus? Doloribus enim nihil minima rem nobis, et dolores iste tempore doloremque consectetur optio laboriosam magnam quisquam ducimus sapiente, cumque quaerat veritatis eveniet adipisci ex ratione eligendi. Quisquam provident cupiditate quidem nostrum, nobis recusandae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalDental;
