import { Divider } from '@mui/material';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Divider sx={{ bgcolor: "black" }} />
    </div>
  );
}

export default App;
