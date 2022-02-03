import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = ({ service }) => {
  const { name, description, image } = service;

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Card sx={{ maxWidth: 345, boxShadow: 0, border: 0 }}>
        <CardMedia
          component="img"
          image={image}
          alt="green iguana"
          sx={{ width: 'auto', mx: "auto"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Service;
