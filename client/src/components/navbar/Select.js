import React,{ useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function SelectVariants() {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="navbar-select-box">
    <div className="navbar-select-icon" >
    <LocationOnOutlinedIcon sx={{ color: "black", width: 100+"%", ml: 0.5  }} />
    </div>
    <div className="navbar-select-main">
    <form>
        <select className="navbar-select">
          <option value="volvo">Pune</option>
          <option value="saab">Delhi</option>
        </select>
      </form>
    </div>
    </div>
  );
}
