import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ApointmentBanar from '../ApoinmentBanar/ApointmentBanar';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Services from '../Services/Services';

const Home = () => {
   return (
      <div>
         <Navigation/>
         <Banner/>
         <Services/>
         <ApointmentBanar/>
         <Blog/>
      </div>
   );
};

export default Home;