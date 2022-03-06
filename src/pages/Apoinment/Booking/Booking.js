import { Button, CardActions, Paper } from "@mui/material";
import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, setBookingSuccess }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
      <div className="col-md-4 col-sm-12 mt-5">
        <Paper elevation={1} className="p-5">
          <h4>{booking.name}</h4>
          <h5>{booking.time}</h5>
          <p>{booking.space} space available</p>
          <CardActions>
            <Button
              onClick={handleClickOpen}
              sx={{ mx: "auto", pt: "10", background: "#2ddfdf" }}
              variant="contained"
            >
              Book Apointment
            </Button>
          </CardActions>
        </Paper>
        <BookingModal open={open} setOpen={setOpen} setBookingSuccess={setBookingSuccess} booking={booking} />
      </div>
  );
};

export default Booking;
