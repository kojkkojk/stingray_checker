import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { navi_chaeck, critical, spChars, not100Chars } from '../../configs/etc'

function Main() {
   const [searchParams] = useSearchParams();
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
   const not100CharFind = not100Chars.find(i => i["직업"] === userDatas.jobGrowName);
   const chMax = (userBuff, maxBuff) => {
      let isMax = ""
      if (userBuff === maxBuff) { isMax = "Max"; return isMax }
      else { isMax = "No Max"; return isMax }
   }
   const chMax2 = (userCritical, maxCritical) => {
      let isMax = ""
      if (userCritical >= maxCritical) { isMax = "Max"; return isMax }
      else { isMax = "No Max"; return isMax }
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
   const criCheck = (not100CharFind, jobGrowName, not100Chars, userCritical) => {
      if (not100CharFind) {
         switch (jobGrowName) {
            case not100Chars[0].직업:
               return chMax2(userCritical, not100Chars[0].만크);
            case not100Chars[1].직업:
               return chMax2(userCritical, not100Chars[1].만크);
            case not100Chars[2].직업:
               return chMax2(userCritical, not100Chars[2].만크);
            case not100Chars[3].직업:
               return chMax2(userCritical, not100Chars[3].만크);
            case not100Chars[4].직업:
               return chMax2(userCritical, not100Chars[4].만크);
            case not100Chars[5].직업:
               return chMax2(userCritical, not100Chars[5].만크);
            case not100Chars[6].직업:
               return chMax2(userCritical, not100Chars[6].만크);
            case not100Chars[7].직업:
               return chMax2(userCritical, not100Chars[7].만크);
            case not100Chars[8].직업:
               return chMax2(userCritical, not100Chars[8].만크);
            case not100Chars[9].직업:
               return chMax2(userCritical, not100Chars[9].만크);
            case not100Chars[10].직업:
               return chMax2(userCritical, not100Chars[10].만크);
            case not100Chars[11].직업:
               return chMax2(userCritical, not100Chars[11].만크);
            case not100Chars[12].직업:
               return chMax2(userCritical, not100Chars[12].만크);
            case not100Chars[13].직업:
               return chMax2(userCritical, not100Chars[13].만크);
            case not100Chars[14].직업:
               return chMax2(userCritical, not100Chars[14].만크);
            case not100Chars[15].직업:
               return chMax2(userCritical, not100Chars[15].만크);
            case not100Chars[16].직업:
               return chMax2(userCritical, not100Chars[16].만크);
            case not100Chars[17].직업:
               return chMax2(userCritical, not100Chars[17].만크);
            case not100Chars[18].직업:
               return chMax2(userCritical, not100Chars[18].만크);
            case not100Chars[19].직업:
               return chMax2(userCritical, not100Chars[19].만크);
            default:
               break;
         }
      } else {
         return chMax2(userCritical, 100)
      }
   }
   const fetchData = async (charUID, serverID) => {
      try {
         await axios.get(`/api/chardata`, { params: { charUID: charUID, serverID: serverID } }).then(res => {
            setUserDatas(res.data);
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
      fetchData(charUID, serverID)
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => {
         window.removeEventListener('beforeunload', handleBeforeUnload);
      };
   }, [searchParams])
   return (
      <div className="MainContainer">
         <div className='imageContainer'>
            <img src={`https://img-api.neople.co.kr/df/servers/${serverID}/characters/${charUID}`} alt="char_img" />
         </div>
         <div className="table">
            <table>
               <tbody>
                  <tr style={{ "textAlign": "center" }}>
                     <th>크리쳐</th>
                     <td>{navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810)}</td>
                  </tr>
                  <tr style={{ "textAlign": "center" }}>
                     <th>오라</th>
                     <td>{navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463)}</td>
                  </tr>
                  <tr style={{ "textAlign": "center" }}>
                     <th>칭호</th>
                     <td>{navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790)}</td>
                  </tr>
                  <tr style={{ "textAlign": "center" }}>
                     <th>어깨마부</th>
                     <td>{userDatas.equips[0]}</td>
                  </tr>
                  <tr style={{ "textAlign": "center" }}>
                     <th>허리마부</th>
                     <td>{userDatas.equips[1]}</td>
                  </tr>
                  <tr style={{ "textAlign": "center" }}>
                     <th>크리티컬</th>
                     <td>{criCheck(not100CharFind,userDatas.jobGrowName,not100Chars,critical(userDatas.critical[0].value, userDatas.critical[1].value))}&nbsp;({critical(userDatas.critical[0].value, userDatas.critical[1].value)}%)</td>
                  </tr>
                  <tr style={{ "textAlign": "center" }}>
                     <th>자버프</th>
                     <td>{jobCheck(foundObj, userDatas.jobGrowName, spChars, userDatas.buffSkill)}&nbsp;({userDatas.buffSkill})</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>

   )
}

export default Main