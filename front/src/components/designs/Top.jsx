import React from 'react'
import { BiSolidHome, BiMaleSign } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Top() {
   return (
      <nav className='navbar'>
         <div className="logo">
            Idiot Checker
         </div>
         <ul className='menu'>
            <li><Link to={"/"}><BiSolidHome /></Link></li>
            <li><Link to='https://arca.live/b/dunfa' target='_blank'><BiMaleSign /></Link></li>
         </ul>
      </nav>
   )
}

export default Top