import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
   const [charNames, setCharNames] = useState("");
   const typingTXT = (e) => { setCharNames(e.target.value); }
   const navigate = useNavigate();
   const shootName = () => { navigate(`/charlist?charname=${encodeURIComponent(charNames)}`) }
   const check = () => {
      if (charNames.length === 0) {
         alert("캐릭터 명을 입력하세요!")
      } else if (charNames.length !== 0) {
         shootName()
         setCharNames("")
      }
   }
   const onKeyEnter = (e) => {
      if (e.key === 'Enter' && charNames.length === 0) {
         alert("캐릭터 명을 입력하세요!")
      } else if (e.key === 'Enter' && charNames.length !== 0) {
         shootName()
         setCharNames("")
      }
   }


   return (
      <div className="searchContainer">
         <div className='search-logo'>
            <h2>Idiot Checker</h2>
         </div>
         <div className="search-container">
            <input className="search-input"
               onChange={typingTXT}
               onKeyDown={onKeyEnter}
               value={charNames}
               type="text"
               placeholder="닉네임 입력" />
            <button className="search-button" onClick={check}>검색</button>
         </div>
      </div>
   )
}

export default Home