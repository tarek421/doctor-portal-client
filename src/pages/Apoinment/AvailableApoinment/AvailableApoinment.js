import React, { useContext } from "react";
import { userContext } from "../../../App";

const AvailableApoinment = () => {
  const [date] = useContext(userContext);

//   const bookings = [{id:1, name: "Teath Orthodontics", }];

  return (
    <div className="container text-center">
      <h1>Available Apoinment on {date.toDateString()}</h1>
    </div>
  );
};

export default AvailableApoinment;
