import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ApoinmentHeader from '../ApoinmentHeader/ApoinmentHeader';
import AvailableApoinment from '../AvailableApoinment/AvailableApoinment';

const Apoinment = () => {
   return (
      <div>
         <Navigation/>
         <ApoinmentHeader/>
         <AvailableApoinment/>
         <Footer/>
      </div>
   );
};

export default Apoinment;