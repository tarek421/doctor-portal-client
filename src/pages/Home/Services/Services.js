import React from "react";
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Service from "../Service/Service";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint nulla deleniti eligendi ex labore?",
    image: fluoride,
  },
  {
    name: "Cavity Filling",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint nulla deleniti eligendi ex labore?",
    image: cavity,
  },
  {
    name: "Teath Whitening",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sint nulla deleniti eligendi ex labore?",
    image: whitening,
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography gutterBottom variant="h6" component="div" sx={{color:'#15d1c3', mt:'50px'}}>
          Services We Provide
        </Typography>
        <Typography gutterBottom variant="h4" component="div" sx={{my:"20px", mb:"50px", fontWeight:"bold"}}>
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
