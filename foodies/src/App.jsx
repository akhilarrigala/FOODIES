import React, { useContext } from 'react';
import Menubar from './components/Menubar/Menubar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ExploreFood from './pages/ExploreFood/ExploreFood';
import FoodDetails from './pages/FoodDetails/FoodDetails';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { toast, ToastContainer } from 'react-toastify';
import MyOrders from './pages/MyOrders/myOrders';
import { StoreContext } from './context/storeContext';

const App = () => {
  const { token } = useContext(StoreContext);
  return (
    <div>
      <Menubar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<ExploreFood />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/food/:id' element={<FoodDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={token ? <PlaceOrder /> : <Login />} />
        <Route path='/login' element={!token ? <Login /> : <Home />} />
        <Route path='/register' element={!token ? <Register /> : <Home />} />
        <Route path='/myorders' element={token ? <MyOrders /> : <Login />} />
      </Routes>

    </div>
  )
}

export default App;