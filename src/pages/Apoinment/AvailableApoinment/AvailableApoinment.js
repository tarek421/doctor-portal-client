import React, { useContext } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { userContext } from "../../../App";
import Booking from "../Booking/Booking";
import './AvailableApoinment.css';

const AvailableApoinment = () => {
  const [date] = useContext(userContext);
  const [bookingSuccess, setBookingSuccess] = useState(false);


  const bookings = [
    { id: 1, name: "Teath Orthodontics", time: "8:00AM - 9:00AM", space: 10 },
    { id: 2, name: "Cosmetic Dentistry", time: "10:05AM - 11:30AM", space: 10 },
    { id: 1, name: "Teath Cleaning", time: "5:00PM - 6:30PM", space: 10 },
    { id: 1, name: "Cavity Prection", time: "7:00AM - 8:30AM", space: 5 },
    { id: 1, name: "Teath Orthodontics", time: "8:00AM - 9:00AM", space: 10 },
    { id: 1, name: "Teath Orthodontics", time: "8:00AM - 9:00AM", space: 10 },
  ];

  return (
    <div className="container text-center apoinment-available">
      <h1>Available Apoinment on {date.toDateString()}</h1>
      <div className="row">
        {
          bookings.map(booking => <Booking key={booking.id} setBookingSuccess={setBookingSuccess} booking={booking}/>)
        }
      </div>
      {bookingSuccess && toast.success('Successfully appointed!')}
    </div>
  );
};

export default AvailableApoinment;
