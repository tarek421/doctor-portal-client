import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="overly mt-5 p-5">
        <div className="container content py-5">
          <h4>Contact Us</h4>
          <h1>Always Connect with us</h1>
          <form className="form mt-3" action="" method="get">
            <input type="text" placeholder="Enter Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" name="message" rows="6"></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
