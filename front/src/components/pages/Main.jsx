import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userDataState, naOhChing } from '../../recoil/atom'
import { bufferId, bufferId2 } from '../../configs/buffer'
import Table from './Table';
import BuffTable from './BuffTable';

function Main() {
   const [searchParams] = useSearchParams();
   const [userData, setUserData] = useRecoilState(userDataState);
   const [viewChange, setViewChange] = useRecoilState(naOhChing);
   const charUID = searchParams.get("charuid");
   const serverID = searchParams.get("serverId");
   const fetchData = async (charUID, serverID) => {
      try {
         await axios.post(`/api/chardata`, { params: { "charUID": charUID, "serverID": serverID } })
            .then(res => {
               setUserData(res.data)
            })
      } catch (error) {
         console.error('데이터를 불러오는 데 실패했습니다.', error);
      }
   };
   const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Chrome에서 경고 메시지를 표시하기 위해 필요
   };

   useEffect(() => {
      window.addEventListener('beforeunload', handleBeforeUnload);
      fetchData(charUID, serverID)
      setViewChange(true)
      return () => {
         window.removeEventListener('beforeunload', handleBeforeUnload);
      };
   }, [])

   return (
      <div className="MainContainer">
         <div className='jumpDUNDAM'>
            <div className='imageContainer'>
               <img src={`https://img-api.neople.co.kr/df/servers/${serverID}/characters/${charUID}`} alt="char_img" />
               <div className='basic_charinfo'>
                  <span>{userData.charName["name"]}</span>
                  <span>{userData.jobGrowName}</span>
               </div>
            </div>
            <div className="toggle">
               <span className={viewChange ? "active" : ""} onClick={() => { setViewChange(true) }}>오칭크</span>
               <span className={viewChange ? "" : "active"} onClick={() => { setViewChange(false) }}>마법 부여</span>
            </div>
         </div>
         {bufferId.includes(userData.jobIdNjobGrowId.jobId) && bufferId2.includes(userData.jobIdNjobGrowId.jobGrowId) ?
            userData.jobIdNjobGrowId.jobId === bufferId[1] && userData.buffCru[0].value !== userData.buffCru[1].value ?
            <div className="tableLike">
               <Table />
            </div> :
            <div className="tableLike">
               <BuffTable />
            </div> :
            <div className="tableLike">
               <Table />
            </div>
         }
      </div>
   )
}

export default Main