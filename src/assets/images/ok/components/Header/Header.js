import React, { useContext } from "react";
import "./Header.css";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const userEmail = loggedInUser.email;

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/home">
        Rider Apps
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav.Link as={Link} to="/home">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/destination/:name">
          Destination
        </Nav.Link>
        <Nav.Link as={Link} to="/blog">
          Blog
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          Contact
        </Nav.Link>
        {userEmail?.length > 0 ? (
          <h4 style={{ color: "white" }}>{userEmail}</h4>
        ) : (
          <div>
            <Button as={Link} to="/login" variant="warning">
              Log In
            </Button>
            <Button className="ml-3" as={Link} to="/signup" variant="info">
              Sign Up
            </Button>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
