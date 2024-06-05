import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom";



      const Navbar = () =>{

            const [menu,setMenu] = useState("shop");
        return(
            <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}> <Link to="/">shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("men")}}> <Link to="/men">men</Link>{menu==="men"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("women")}}> <Link to="/women">women</Link>{menu==="women"?<hr></hr>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}> <Link to="/kids">kids</Link>{menu==="kids"?<hr></hr>:<></>}</li>
            

            </ul>
            <div className="nav-login-cart">
            <Link to="/login"><button>login</button></Link>
            <Link to="/cart"><img src={cart_icon}/></Link>
                 <div className="nav-cart-count">0</div>
            </div>

        </div>
        )
      } 
 
       
        
        
 

export default Navbar
