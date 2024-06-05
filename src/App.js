
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router,Routes,Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import banner_mens from './Components/Assets/banner_mens.png';
import banner_women from './Components/Assets/banner_women.png';
import banner_kids from './Components/Assets/banner_kids.png';


function App() {
  return (
  <div>
  
    
    <Router>
    <Navbar/>




    <Routes >
    <Route path='/' element={<Shop/>}/>
    <Route path='/men' element={<ShopCategory banner={banner_mens} category="men"/>}/>
    <Route path='/women' element={<ShopCategory banner={banner_women} category="women"/>}/>
    <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kids"/>}/>
    <Route path='*' element={<h1>Page Not Found</h1>}/>
  

      <Route path="/product" element={<Product/>}>
           <Route path=':productId' element={<product/>}/>
      </Route>

      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>


 </Routes>
 <Footer/>
/</Router>

  </div>
  );
}

export default App;
