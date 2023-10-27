import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { navi_chaeck, critical, spChars } from '../../configs/etc'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import Modals from '../designs/Modals';

function Main() {
   const [searchParams] = useSearchParams();
   const [modalIsOpen, setIsOpen] = useState(false);
   function openModal() {
     setIsOpen(true);
   }
   function afterOpenModal() {} 
   function closeModal() {
     setIsOpen(false);
   }
   const [userDatas, setUserDatas] = useState({
      critical: [
         { name: '물리 크리티컬', value: 0 },
         { name: '마법 크리티컬', value: 0 }
      ],
      buffSkill: 0,
      jobGrowName: "",
      equips: ['-', '-'],
      naOhChing: {
         '칭호': { name: '모험가 명성', value: 0 },
         '크리처': { name: '모험가 명성', value: 0 },
         '오라': { name: '모험가 명성', value: 0 }
      }
   })
   const charUID = searchParams.get("charuid");
   const serverID = searchParams.get("serverId");
   const foundObj = spChars.find(i => i["직업"] === userDatas.jobGrowName);
   const chMax = (userBuff, maxBuff) => {
      let isMax = ""
      if (userBuff === maxBuff) { isMax = "Max"; return isMax }
      else { isMax = "Not Max"; return isMax }
   }
   const jobCheck = (foundObj, jobGrowName, spChars, userBuff) => {
      if (foundObj) {
         switch (jobGrowName) {
            case spChars[0].직업:
               return chMax(userBuff, spChars[0].레벨);
            case spChars[1].직업:
               return chMax(userBuff, spChars[1].레벨);
            case spChars[2].직업:
               return chMax(userBuff, spChars[2].레벨);
            case spChars[3].직업:
               return chMax(userBuff, spChars[3].레벨);
            case spChars[4].직업:
               return chMax(userBuff, spChars[4].레벨);
            case spChars[5].직업:
               return chMax(userBuff, spChars[5].레벨);
            case spChars[6].직업:
               return chMax(userBuff, spChars[6].레벨);
            case spChars[7].직업:
               return chMax(userBuff, spChars[7].레벨);
            case spChars[8].직업:
               return chMax(userBuff, spChars[8].레벨);
            case spChars[9].직업:
               return chMax(userBuff, spChars[9].레벨);
            default:
               break;
         }
      } else {
         return chMax(userBuff, 20)
      }
   }
   const fetchData = async (charUID, serverID) => {
      try {
         await axios.post(`/api/chardata`, { params: { "charUID": charUID, "serverID": serverID } }).then(res => { setUserDatas(res.data) })
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
      return () => {
         window.removeEventListener('beforeunload', handleBeforeUnload);
      };
   }, [])
   return (
      <div className="MainContainer">
         <div className='jumpDUNDAM'>
            <div className='imageContainer'>
               <img src={`https://img-api.neople.co.kr/df/servers/${serverID}/characters/${charUID}`} alt="char_img" />
            </div>
         </div>
         <div className="tableLike">
            <div className='table'>
               {userDatas && userDatas.buffSkill ?
                  <div className='tbody'>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>강화</div>
                        <div>{userDatas.equips[2]["강화"]} 강</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>재련</div>
                        <div>{userDatas.equips[3]["재련"]} 재련</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>크리쳐</div>
                        <div style={
                           navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810) === "종결" ? { color: "green" } :
                              navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810) === "준종결" ? { color: "#ffb62e" } :
                                 navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810) === "통수" ? { color: "red" } :
                                    { color: "#000" }
                        }
                        >{navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810)}</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>오라</div>
                        <div style={
                           navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463) === "종결" ? { color: "green" } :
                              navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463) === "준종결" ? { color: "#ffb62e" } :
                                 navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463) === "통수" ? { color: "red" } :
                                    { color: "#000" }
                        }
                        >{navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463)}</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>칭호</div>
                        <div style={
                           navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790) === "종결" ? { color: "green" } :
                              navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790) === "준종결" ? { color: "#ffb62e" } :
                                 navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790) === "통수" ? { color: "red" } :
                                    { color: "#000" }
                        }
                        >{navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790)}</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>시브</div>
                        <div>{userDatas.equips[4].status.length === 4 ?
                           userDatas.equips[4].status[3]["value"] === 3 ? "시브 있음" : "시브 없음" : "시브 없음"}</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>어깨마부</div>
                        <div>{userDatas.equips[0].explain ? userDatas.equips[0].explain : "-"}</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>허리마부</div>
                        <div>{userDatas.equips[1].explain ? userDatas.equips[1].explain : "-"}</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div className='crittical'>
                           <span>크리티컬</span>
                           <span style={{cursor:"pointer"}} onClick={() => { openModal() }}><AiOutlineQuestionCircle /></span>
                        </div>
                        <div>{critical(userDatas.critical[0].value, userDatas.critical[1].value)}%</div>
                     </div>
                     <div style={{ "textAlign": "center" }} className='tr'>
                        <div>자버프</div>
                        <div>{jobCheck(foundObj, userDatas.jobGrowName, spChars, userDatas.buffSkill)}&nbsp;({userDatas.buffSkill})</div>
                     </div>
                  </div>
                  : ""}
            </div>
            <Modals
               modalIsOpen={modalIsOpen}
               afterOpenModal={afterOpenModal}
               closeModal={closeModal}
            />
         </div>
      </div>

   )
}

export default Main