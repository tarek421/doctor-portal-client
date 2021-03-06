import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
import "./Login.css";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

const Login = () => {
  const { user, loginUser, isLoading, authError, googleSignIn } = useAuth();

  const [loginData, setLoginData] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, navigate, location);
  };

  const handleGoogle = () => {
    googleSignIn()
  }

  const handleChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[feild] = value;
    setLoginData(newLoginData);
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
              <Button
                className="mt-4 mb-2 w-100"
                variant="contained"
                type="submit"
              >
                Submit
              </Button>
              <span>Or</span>
              <GoogleButton
              style={{ width: "100%", margin:'15px auto'}}
              onClick={handleGoogle}
            />
              <Button as={Link} to="/register" variant="text">
                New User? Go to Register page
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

export default Login;
