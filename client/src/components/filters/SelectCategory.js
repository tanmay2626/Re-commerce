import React  from "react";
import NativeSelect from "@mui/material/NativeSelect";
import FilterListIcon from '@mui/icons-material/FilterList';
import "./style.css"

const Category = (props) => {

  return (
    <div className="filter">
    <div className="filter-icon">
    <FilterListIcon sx={{ pt: 1 }} />
</div>
<div className="filter-element">
<NativeSelect
            defaultValue={0}
            className="native-select"
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
              sx: { fontWeight: 500, fontSize: 0.9+"rem", width: 100+"%" },
            }}
            disableUnderline
          >
            <option value={0}>All</option>
            <option value={10}>Mobiles</option>
            <option value={30}>Electronics</option>
            <option value={30}>Cars</option>
            <option value={40}>Furniture</option>
          </NativeSelect>
</div>
    </div>
  );
};

export default Category;