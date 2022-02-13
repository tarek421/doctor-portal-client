import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ApointmentBanar from '../ApoinmentBanar/ApointmentBanar';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import HeaderBottom from '../Banner/HeaderBottom';
import Testimonial from '../Testimonial/Testimonial';
import ExceptionalDental from '../ExceptionalDental/ExceptionalDental';

const Home = () => {
   return (
      <div>
         <Navigation/>
         <Banner/>
         <HeaderBottom/>
         <Services/>
         <ExceptionalDental/>
         <ApointmentBanar/>
         <Testimonial/>
         <Blog/>
         <Doctors/>
         <Contact/>
         <Footer/>
      </div>
   );
};

export default Home;