import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const { user } = useAuth();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/apoinment">Apoinment</Nav.Link>
            <Nav.Link as={Link} to="/service">Dental Services</Nav.Link>
            <Nav.Link as={Link} to="/rivew">Rivew</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{color:'#ffffffcf'}}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                {
                  user?.email ? <MenuItem onClick={handleClose}>Log Out</MenuItem>: <MenuItem as={Link} to='/login' onClick={handleClose}>Login</MenuItem>
                }
              </Menu>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

// <div className="navbar-right">
// <ul className="d-flex justify-content-center align-items-center">
//   <li>Home</li>
//   <li>About</li>
//   <li>Dental Services</li>
//   <li>Review</li>
//   <li>Blog</li>
//   <li>Contact Us</li>
// </ul>

// </div>
