import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, CardActions, Container, Typography } from "@mui/material";
import chair from "../../../images/chair.png";
import "./Banner.css";

const Banner = () => {
  const flex = {
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    height: "100vh",
    zIndex: 1,
  };
  return (
    <div className="background">      
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={flex} item xs={12} md={5}>
            <Box>
              <Typography variant="h3">
                Your New Smaile <br />
                Starts Here
              </Typography>
              <Typography variant="p" sx={{ color: "#333", fontWeight: "300" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                ex at voluptate itaque neque, quibusdam repellat suscipit
                excepturi id distinctio!
              </Typography>
              <CardActions>
                <Button sx={{ my: 2 }} variant="contained" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Box>
          </Grid>
          <Grid item xs={12} style={flex} md={7}>
            <img
              src={chair}
              style={{ height: 350, width: "100%" }}
              alt="Chair"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
