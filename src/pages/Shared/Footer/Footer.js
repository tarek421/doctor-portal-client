import { faFacebook, faGooglePlus, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import "./Footer.css";

const Footer = () => {
   return (
      <div className="footer text-start py-5">
         <div className="container">
            <div className="row">
               <div className="col-md-3 col-sm-12">
                  <h4 style={{color: '#ff000000'}}>.</h4>
                  <a href="foo">Emargency Denntal Care</a>
                  <a href="foo">Check Up</a>
                  <a href="foo">Treatment of Personal Diseases</a>
                  <a href="foo">Tooth Extraction</a>
                  <a href="foo">Check Up</a>
               </div>

               <div className="col-md-3 col-sm-12">
                  <h4>Services</h4>
                  <a href="foo">Emargency Denntal Care</a>
                  <a href="foo">Check Up</a>
                  <a href="foo">Treatment of Personal Diseases</a>
                  <a href="foo">Tooth Extraction</a>
                  <a href="foo">Check Up</a>
                  <a href="foo">Check Up</a>
                  <a href="foo">Check Up</a>
               </div>
               <div className="col-md-3 col-sm-12">
                  <h4>Oral Health</h4>
                  <a href="foo">Emargency Denntal Care</a>
                  <a href="foo">Check Up</a>
                  <a href="foo">Treatment of Personal Diseases</a>
                  <a href="foo">Tooth Extraction</a>
                  <a href="foo">Check Up</a>
                  <a href="foo">Check Up</a>
                  <a href="foo">Check Up</a>
               </div>
               <div className="col-md-3 col-sm-12">
                  <h4>Our Address</h4>
                  <p>New York-101010 Hudson Yards</p>
                  <div className="social-icon mb-5">
                  <FontAwesomeIcon className="icon" icon={faFacebook} />
                  <FontAwesomeIcon style={{color:'#ff5722'}} className="icon" icon={faGooglePlus}/>
                  <FontAwesomeIcon className="icon" icon={faTwitter}/>
                  </div>
                  <p className="mt-5 mb-1">Call Now</p>
                  <button>+2025550295</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;