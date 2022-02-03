import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ApointmentBanar from '../ApoinmentBanar/ApointmentBanar';
import Services from '../Services/Services';

const Home = () => {
   return (
      <div>
         <Navigation/>
         <Services/>
         <ApointmentBanar/>
      </div>
   );
};

export default Home;