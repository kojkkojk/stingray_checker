import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { FiSun, FiMoon, FiCoffee } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { themeState } from '../../recoil/atom';

function Top() {
   const [theme, setTheme] = useRecoilState(themeState)
   const handleClick = () => {
      if (theme === "DARK") {
         setTheme("LIGHT")
         window.localStorage.setItem("theme", "LIGHT");
      } else {
         setTheme("DARK")
         window.localStorage.setItem("theme", "DARK");
      }
   }
   return (
      <>
         <nav className='navbar'>
            <div className="logo">
               <Link to={"/"}>Idiot Checker</Link>
            </div>
            <ul className='menu'>
               <li><Link to={"/"}><FaHouse /></Link></li>
               <li><span onClick={handleClick}>{theme === "LIGHT" ? <FiMoon /> : <FiSun />}</span></li>
               <li><Link to={"https://toss.me/남영동설렁탕집"} target='_blank'><FiCoffee /></Link ></li>
            </ul>
         </nav>
      </>
   )
}

export default Top;