import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import { userContext } from "../../../App";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const BookingModal = ({ open, setOpen, booking, setBookingSuccess }) => {
  const [date] = useContext(userContext);
  const { name, time } = booking;

  const { user } = useAuth();

  const initialBookingInfo = {
    patiantName: user.displayName,
    email: user.email,
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);

  const handleOnBlur = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[feild] = value;
    setBookingInfo(newBookingInfo);
  };

   const handleSubmit = (e) => {
    const appointment ={
      ...bookingInfo,
      serviceName:name,
      time,
      date:date.toLocaleDateString()
    }
     fetch('http://localhost:5000/appointments', {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(appointment)
  })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
        setBookingSuccess(true);
        handleClose();}
    });

    e.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog className="text-center py-5" open={open} onClose={handleClose}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              disabled
              id="outlined-password-input"
              label={time}
              autoComplete="current-password"
              sx={{ width: "400px" }}
            />
            <TextField
              id="outlined-password-input"
              label="Name"
              name="patiantName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              sx={{ width: "400px", mt: 2 }}
            />
            <TextField
              id="outlined-size-small"
              label="Email"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              sx={{ width: "400px", mt: 2 }}
            />
            <TextField
              id="outlined-password-input"
              label="Number"
              type="number"
              name="phone"
              defaultValue='+880'
              onBlur={handleOnBlur}
              sx={{ width: "400px", mt: 2 }}
            />
            <TextField
              disabled
              id="outlined-password-input"
              label={date.toDateString()}
              autoComplete="current-password"
              sx={{ width: "400px", mt: 2 }}
            />

            <Button
              sx={{
                mx: "auto",
                background: "#2ddfdf",
                marginTop: "10px",
                marginLeft: "230px",
              }}
              variant="contained"
              type="submit"
            >
              Book Apointment
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingModal;
