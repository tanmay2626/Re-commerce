import React, { useState } from "react";
import "./style.css";
import { Container } from "@mui/material";
import { Button, Divider } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    mobile_no: null,
    city: "",
    address: ""
  });
  const [error, setError] = useState({
    status: true,
    message: "",
  });

  const HandleCredentials = (e) => {
    const { value, name } = e.target;

    setCredentials((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    const username = credentials.username;
    const email = credentials.email;
    const password = credentials.password;
    const mobile_no = credentials.mobile_no;
    const city = credentials.city
    const address = credentials.address;


    axios.post(" http://localhost:8000/register_user", { username, email, password, mobile_no, city, address }).then((res) => {
      setError({
        status: res.data.status,
        message: res.data.message,
      });
      if (res.data.status) {
        navigate("/login");
      }
    });
  };

  return (
    <Container className="signin">
      <div className="signin-box">
        <div className="signin-form">
          <span>Create Account</span>
          <div className="form-wrap">
            <form onSubmit={HandleSubmit}>
              <label>Your Name</label>
              <input
                value={credentials.username}
                onChange={HandleCredentials}
                name="username"
                type="text"
                required
              />
              <br />
              <label>Email</label>
              <input
                value={credentials.email}
                onChange={HandleCredentials}
                name="email"
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
              <br />
              <div className="mobile-city">
                <div className="mobile">
                <label>Mobile No</label>
                  <input
                value={credentials.mobile_number}
                onChange={HandleCredentials}
                name="mobile_no"
                type="tel"
                maxLength="10"
                required
              />
                </div>
                <div className="city"> 
                <label>City</label>
                <input
                value={credentials.city}
                onChange={HandleCredentials}
                name="city"
                type="text"
                required
              />
                </div>
              </div>
                <label>Address</label>
                <input
                value={credentials.address}
                onChange={HandleCredentials}
                name="address"
                type="text"
                className="address"
                required
              />
              <label>Password</label>
              <input
                value={credentials.password}
                onChange={HandleCredentials}
                name="password"
                type="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                required

              />
              <Button
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  color: "color",
                  textTransform: "none",
                  width: 100 + "%",
                  backgroundColor: "#205E61",
                  marginTop: 2,
                  ":hover": { backgroundColor: "#205E61" },
                }}
              >
                Register
              </Button>
              {!error.status && <p>{error.message}</p>}
            </form>
          </div>
        </div>
        <Divider sx={{ marginTop: 2, fontSize: 2, color: "gray" }}>
          Already an user? <Link to="/login">Login</Link>
        </Divider>
      </div>
    </Container>
  );
};

export default Register;