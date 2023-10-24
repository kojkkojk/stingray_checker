import React from 'react'
import { AiTwotoneHome,AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Top() {
   return (
      <nav className='navbar'>
         <div className="logo">
            Idiot Checker
         </div>
         <ul className='menu'>
            <li><Link to={"/"}><AiTwotoneHome /></Link></li>
            <li><Link to={"/"}><AiOutlineMenu /></Link></li>
         </ul>
      </nav>
   )
}

export default Top