import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Apointments from '../Apointments/Apointments';

const DashboardHome = () => {
   return (
      <div className="row">
      <div className="col-md-5 col-sm-12">
         <Calender/>
      </div>
      <div className="col-md-7 col-sm-12">
         <Apointments/>
      </div>
   </div>
   );
};

export default DashboardHome;