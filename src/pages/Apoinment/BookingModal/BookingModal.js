import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Button} from "@mui/material";
import { userContext } from "../../../App";


const BookingModal = ({ open, setOpen, booking }) => {
  const [date] = useContext(userContext);
  const { name, time, space } = booking;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog className="text-center py-5" open={open} onClose={handleClose}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            id="outlined-password-input"
            label={time}
            autoComplete="current-password"
            sx={{ width: "400px"}}
          />
          <TextField
            id="outlined-password-input"
            label="Name"
            autoComplete="current-password"
            sx={{ width: "400px", mt: 1 }}
          />
          <TextField
            id="outlined-password-input"
            label="Number"
            autoComplete="current-password"
            sx={{ width: "400px", mt: 1 }}
          />
          <TextField
            id="outlined-password-input"
            label="Email"
            autoComplete="current-password"
            sx={{ width: "400px", mt: 1 }}
          />
          <TextField
            disabled
            id="outlined-password-input"
            label={date.toDateString()}
            autoComplete="current-password"
            sx={{ width: "400px", mt: 1 }}
          />

          <Button
            sx={{ mx: "auto", background: "#2ddfdf", marginTop:'10px', marginLeft:'230px' }}
            variant="contained"
          >
            Book Apointment
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingModal;
