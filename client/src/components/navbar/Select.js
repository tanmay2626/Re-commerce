import React,{ useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function SelectVariants() {
  const [location, setLocation] = useState("");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="navbar-select-box">
    <form>
        <select className="navbar-select">
          <option value={10}>Pune</option>
          <option value={20}>Delhi</option>
        </select>
      </form>
    </div>
  );
}
