import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccess(true);
        console.log(data);
      });
  };
  return (
    <>
      <h2 className="text-center mb-5">Make an Admin</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          onBlur={handleChange}
        />
        <Button type="submit" sx={{ height: "55px" }} variant="contained">
          Make Admin
        </Button>
        {success && (
          <Alert
            sx={{
              width: "30%",
              margin: "auto",
              background: "#2d377bab",
              color: "white",
              marginTop: "5px",
            }}
            severity="success"
          >
            made admin successfully!
          </Alert>
        )}
      </form>
    </>
  );
};

export default MakeAdmin;
