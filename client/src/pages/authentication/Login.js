import React, { useState } from "react";
import "./style.css";
import { Container } from "@mui/material";
import { Button, Divider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import axios from "axios";

const Login = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
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

    const email = credentials.email;
    const password = credentials.password;

    axios.post("http://localhost:8000/login", { email, password }).then((res) => {
      if (!res.data.status) {
        setError({
          status: res.data.status,
          message: res.data.message,
        });
      } else {
        dispatch({
          type: "SET_USER",
          item: res.data.user,
        });
        navigate("/");
      }
    });
  };

  return (
    <Container className="signin">
      <div className="signin-box">
        <div className="signin-form">
          <span>Login</span>
          <div className="form-wrap">
            <form onSubmit={HandleSubmit}>
              <label>Email</label>
              <br />
              <input
                value={credentials.email}
                onChange={HandleCredentials}
                name="email"
                type="email"
              />
              <br />
              <label>Password</label>
              <br />
              <input
                value={credentials.password}
                onChange={HandleCredentials}
                name="password"
                type="password"
              />
              <Button
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  color: "white",
                  textTransform: "none",
                  width: 100 + "%",
                  backgroundColor: "#205E61",
                  marginTop: 2,
                  ":hover": { backgroundColor: "#205E61" },
                }}
              >
                Submit
              </Button>
              {!error.status && <p>{error.message}</p>}
            </form>
          </div>
        </div>
        <Divider sx={{ marginTop: 2, fontSize: 2, color: "gray" }}>
          New to ScrapYar?
        </Divider>
        <Link className="link" to="/register">
          <Button
            variant="contained"
            size="small"
            sx={{
              color: "black",
              textTransform: "none",
              width: 100 + "%",
              backgroundColor: "#EEEEEE",
              marginTop: 2,
              ":hover": { backgroundColor: "#EFEFEF" },
            }}
          >
            Create your ScrapYar account
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Login;