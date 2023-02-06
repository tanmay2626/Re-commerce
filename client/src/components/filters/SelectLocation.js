import React  from "react";
import NativeSelect from "@mui/material/NativeSelect";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./style.css"

const Filter = (props) => {

  return (
    <div className="filter-loc">
    <div className="filter-loc-icon">
    <LocationOnOutlinedIcon sx={{ pt: 1, color: "black" }} />
</div>
<div className="filter-loc-element">
<NativeSelect
            defaultValue={0}
            className="native-select"
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
              sx: { fontWeight: 500, fontSize: 0.9+"rem", width: 100+"%",  },
            }}
            disableUnderline
          >
            <option value={0}>Pune</option>
            <option value={10}>Delhi</option>
          </NativeSelect>
</div>
    </div>
  );
};

export default Filter;