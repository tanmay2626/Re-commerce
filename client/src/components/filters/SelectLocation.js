import React, { useState, useEffect } from "react";
import NativeSelect from "@mui/material/NativeSelect";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useStateValue } from "../../context/StateProvider";
import "./style.css";

const Filter = (props) => {

  const [{ },dispatch] = useStateValue();

  const updateLocation = (e) =>{
    dispatch({
      type: "SET_LOCATION",
      item : e.target.value
    })
  }

  return (
    <div className="filter-loc">
      <div className="filter-loc-icon">
        <LocationOnOutlinedIcon sx={{ pt: 1, color: "black" }} />
      </div>
      <div className="filter-loc-element">
        <NativeSelect
          defaultValue={0}
          className="native-select"
          onChange={updateLocation}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
            sx: { fontWeight: 500, fontSize: 0.9 + "rem", width: 100 + "%" },
          }}
          disableUnderline
        >
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
        </NativeSelect>
      </div>
    </div>
  );
};

export default Filter;
