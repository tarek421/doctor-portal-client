import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { registerUser, user, isLoading, authError } = useAuth();

  const handleChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Didn't Match Password");
      return;
    }
    e.preventDefault();
    registerUser(loginData.email, loginData.password);
  };

  return (
    <div id="login">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="card mx-auto mt-5 pt-5 p-5 w-75 shadow rounded">
            <h6>Login</h6>
            <form onSubmit={handleSubmit}>
              <TextField
                style={{ width: "100%", marginBottom: "10px" }}
                id="standard-basic"
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                variant="standard"
              />

              <TextField
                style={{ width: "100%" }}
                id="standard-basic"
                label="Password"
                name="password"
                type="password"
                onChange={handleChange}
                variant="standard"
              />
              <TextField
                style={{ width: "100%" }}
                id="standard-basic"
                label="Password Repeat"
                name="password2"
                type="password"
                onChange={handleChange}
                variant="standard"
              />
              <Button
                className="mt-4 mb-2 w-100"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
              <Button as={Link} to="/login" variant="text">
                Already Have an account? Go to Login page
              </Button>
            </form>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
