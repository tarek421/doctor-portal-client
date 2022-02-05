import React from 'react';
import doctor from '../../../images/doctor-small.png';

const Doctors = () => {
   const doctors=[
      {
         image:`${doctor}`,
         name: 'Caudi',
         phone: '123-456-454'
      },
      {
         image:`${doctor}`,
         name: 'Caudi',
         phone: '123-456-454'
      },
      {
         image:`${doctor}`,
         name: 'Caudi',
         phone: '123-456-454'
      }
   ]
   return (
      <div className="container">
         <h4 className="mb-5">Our Doctors</h4>
         <div className="row">
            {
               doctors.map(doctor=><div className="col-md-4 col-sm-12">
               <div className="card text-center border-0">
                  <img className="w-75 m-auto" src={doctor.image} alt="Doctor" />
                  <h4>{doctor.name}</h4>
                  <h6>{doctor.phone}</h6>
               </div>
            </div>)
            }
         </div>
      </div>
   );
};

export default Doctors;