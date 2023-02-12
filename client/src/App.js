import './App.css';
import Footer from './common/Footer';
import Navbar from './components/navbar/Navbar';
import Product from "./pages/product/Product"
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import WishList from './pages/wishlist/WishList';
import Profile from './pages/profile/Profile';

function App() {

  return (
    <Router>
    <div className="App">
   <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      {/* Todo: setup custom param for product */}
      {/* Todo: screate Failure & Profile Page*/}
      <Route path='/product' exact element={<Product />} />
      <Route path='/login' exact element={<Login />} />
      <Route path='/register' exact element={<Register />} />
      <Route path='/wishlist' exact element={<WishList />} />
      <Route path='/profile' exact element={<Profile />} />
    </Routes>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
