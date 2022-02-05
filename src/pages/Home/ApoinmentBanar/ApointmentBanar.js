import {
  Box,
  Button,
  CardActions,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";

const ApointmentBanar = () => {
  const apointmentBg = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'left center',
    marginTop: 150,
  };
  const overly = {
    backgroundColor: "rgb(35 31 50 / 80%)",
  };

  return (
    <Box style={apointmentBg} sx={{ flexGrow: 1 }}>
      <div style={overly}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <img
                style={{ width: "100%", marginTop: "-125px" }}
                src={doctor}
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={7} sx={{ mt: 10 }}>
              <Typography variant="h6" sx={{ color: "#15d1c3" }}>
                APOINTMENT
              </Typography>
              <Typography variant="h3" sx={{ color: "#ffffff", my: 2 }}>
                Make an appointment today
              </Typography>
              <Typography variant="p" sx={{ color: "#ffffff" }}>
                It is a long established fact that a reader will be distractedby
                the readable content of a page when looking a its.
              </Typography>
              <CardActions>
                <Button sx={{mx:'auto', pt:"10"}} variant="contained" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export default ApointmentBanar;
