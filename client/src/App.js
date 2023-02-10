import './App.css';
import Footer from './common/Footer';
import Navbar from './components/navbar/Navbar';
import Product from "./pages/product/Product"
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';

function App() {

  return (
    <Router>
    <div className="App">
   <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      {/* Todo: setup custom param for product */}
      <Route path='/product' exact element={<Product />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/register' exact element={<Register />} />
    </Routes>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
