import React from "react";
import doctor from "../../../images/doctor3.png";
import doctor1 from "../../../images/doctor1.png";
import doctor2 from "../../../images/doctor2.png";

const Doctors = () => {
  const doctors = [
    { id: 1, image: `${doctor}`, name: "Caudi", phone: "123-456-454" },
    { id: 2, image: `${doctor1}`, name: "Caudi", phone: "123-456-454" },
    {
      id: 3,
      image: `${doctor2}`,
      name: "Caudi",
      phone: "123-456-454",
    },
  ];
  return (
    <div className="container">
      <h4 className="mb-5">Our Doctors</h4>
      <div className="row">
        {doctors.map((doctor) =>  (
          <div className="col-md-4 col-sm-12" key={doctor.id}>
            <div className="card text-center border-0">
              <img className="w-75 m-auto" src={doctor.image} alt="Doctor" />
              <h4>{doctor.name}</h4>
              <h6>{doctor.phone}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
