import { IconButton } from "@mui/material";
import React from "react";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';


const ProductContact = (props) => {
  return (
    <div className="product-contact">
    <div className="user-profile">
      <div className="profile-icon">
      <img alt={props.user_id} src="https://github.com/tanmay2626/images/blob/main/man.png?raw=true" />
      </div>
      <div className="profile-name">
      {props.username}
      </div>
      <div className="profile-redirect">
      <IconButton>
        <ChevronRightRoundedIcon />
      </IconButton>
      </div>
    </div>
    <div className="contact-details">
      <div className="country-code">
      <span>+91</span>
      </div>
      <div className="mobile-number">
      <span>{props.contact_details.mobile_no}</span>
      </div>
      <div className="reveal-number">
      <IconButton>
      <RemoveRedEyeRoundedIcon />
      </IconButton>
      </div>
    </div>
    </div>
  );
};

export default ProductContact;
