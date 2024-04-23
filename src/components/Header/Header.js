import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import {Link} from 'react-router-dom';
import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
function Header() {
  return (
    <div className='Edu'>
      <div>
       <span className='nation'>EduNation</span>
       </div>
       <div>
        <ul>
            <li><Link to="/" className='link'><b>Home</b></Link></li>
            <li><Link to="about" className='link'><b>About</b></Link></li>
            <li><Link to="courses" className='link'><b>Courses</b></Link></li>
           
            <li><Link to="contact" className='link'><b>Contact</b></Link></li>
            <li><IoPersonOutline style={{marginRight:10,color:'blue'}}/><label className='log'>Log in</label></li>
            <li><CiLock style={{marginRight:10,color:'blue'}}/><label className='log'>Register</label></li>
        </ul>
   
        </div> 
    </div>
  )
}

export default Header