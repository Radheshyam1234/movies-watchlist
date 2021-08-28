import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div >
           
    <nav>
      <input type="checkbox" id="check"/>
      <label htmlFor="check" class="checkbtn">
        <i className="fa fa-bars"></i>
      </label>
      <label className="logo">Movie watchlist</label>
      <ul>
        <li><NavLink to='/watchlist' style={{textDecoration:"none"}}>Watchlist</NavLink></li>
        <li><NavLink to='/watched' style={{textDecoration:"none"}}>Watched</NavLink></li>
        <li><NavLink to='/add' style={{textDecoration:"none"}}>+ADD</NavLink></li>
      </ul>
    </nav>
    
  
        </div>
    )
}


export default Navbar;