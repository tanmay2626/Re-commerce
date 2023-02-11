import React from "react";
import NativeSelect from "@mui/material/NativeSelect";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./style.css";
import { useStateValue } from "../../context/StateProvider";

const Category = (props) => {

  const [{ },dispatch] = useStateValue();

  const updateCategory = (e) =>{
    dispatch({
      type: "SET_CATEGORY",
      item : e.target.value
    })
  }

  return (
    <div className="filter">
      <div className="filter-icon">
        <FilterListIcon sx={{ pt: 1 }} />
      </div>
      <div className="filter-element">
        <NativeSelect
          defaultValue={0}
          onChange={updateCategory}
          className="native-select"
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
            sx: { fontWeight: 500, fontSize: 0.9 + "rem", width: 100 + "%" },
          }}
          disableUnderline
        >
          <option value='All'>All</option>
          <option value='Mobile'>Mobiles</option>
          <option value='Electronics'>Electronics</option>
          <option value='Cars'>Cars</option>
          <option value='Furniture'>Furniture</option>
        </NativeSelect>
      </div>
    </div>
  );
};

export default Category;
