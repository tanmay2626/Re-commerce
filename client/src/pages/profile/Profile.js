import React from "react";
import { Button } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import "./style.css"

const Profile = (props) => {

    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();
    const navigate = useNavigate();

    const handleClick = () =>{
        localStorage.removeItem('AUTH_TOKEN');
        dispatch({
            type: 'SET_USER',
            item : null
        })
        navigate("/")
    }

  return (
    <div className="signout-btn">
      <Button
        variant="contained"
        size="large"
        type="submit"
        sx={{
          color: "white",
          textTransform: "none",
          backgroundColor: "#205E61",
          marginTop: 2,
          ":hover": { backgroundColor: "#205E61" },
        }}
        onClick={handleClick}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Profile;
