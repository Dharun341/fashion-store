import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/home'; 
import Shirt from './Components/shirt';
import Custom from './Components/customizes';
import About from './Components/about';
import Addcart from './Components/addcart';
import Checkout from './Components/Checkout';
import Cart from './Components/cart';
import Saddcart from './Components/saddcart';
import Taddcart from './Components/taddcart';
import Cdaddcart from './Components/cdaddcart';
import Custshirt from './Components/custshirt';
import Privacy from './Components/privacy';
import Terms from './Components/terms';
import Tshirt from './Components/tshirt';
import ExplorePage from './ExplorePage'; 
import AdminOrders from './Components/adminOrders';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path='/tshirt' element={<Tshirt/>} />
          <Route path='/shirt' element={<Shirt />} />
          <Route path='/customizes' element={<Custom />} />
          <Route path='/about' element={<About />} />
          <Route path='/addcart' element={<Addcart />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/saddcart' element={<Saddcart />} />
          <Route path='/taddcart' element={<Taddcart />} />
          <Route path='/cdaddcart' element={<Cdaddcart />} />
          <Route path='/custshirt' element={<Custshirt />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path='/adminOrders' element={<AdminOrders />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;