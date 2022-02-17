import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import login from "../../../images/login.png";
import "./Login.css";

const Login = () => {
   const [loginData, setLoginData] = useState({}); 
  const handleSubmit = (e) => {
    alert('working submition')
    e.preventDefault();
  };
  const handleChange = (e) => {
    const feild = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[feild] = value;
    setLoginData(newLoginData);
  };

  return (
    <div id="login">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="card mx-auto mt-5 pt-5 p-5 w-50 shadow rounded">
            <h6>Login</h6>
            <form onSubmit={handleSubmit}>
              <TextField
              style={{width:'90%', marginBottom:'10px'}}
                id="standard-basic"
                label="Email"
                type='email'
                name="email"
                onChange={handleChange}
                variant="standard"
              />

              <TextField
              style={{width:'90%'}}
              id="standard-basic"
              label="Password"
              name='password'
              type='password'
              onChange={handleChange}
              variant="standard"
            />
            <Button className='mt-4 w-75' variant='contained' type='submit'>Submit</Button>
            </form>
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
