import React from 'react';
import { useRecoilValue } from 'recoil';
import { userDataState, naOhChing, equipsSelector } from '../../recoil/atom'
import { navi_chaeck, spChars, acccMabu, isMax, not100Chars, itemList } from '../../configs/etc';

function Table() {
   const userDatas = useRecoilValue(userDataState);
   const nananana = useRecoilValue(naOhChing);
   const equipss = useRecoilValue(equipsSelector)
   const foundObj = spChars.find(i => i["직업"] === userDatas.jobGrowName);
   const chMax = (userBuff, maxBuff) => {
      let isMax = ""
      if (userBuff === maxBuff) { isMax = "Max"; return isMax }
      else { isMax = "Not Max"; return isMax }
   }
   const criticalValue = (pCri, mCri) => { if (pCri >= mCri) { return pCri } else { return mCri } }
   const jobCheck = (foundObj, jobGrowName, spChars, userBuff) => {
      if (foundObj) {
         switch (jobGrowName) {
            case spChars[0]["직업"]: return chMax(userBuff, spChars[0]["레벨"]);
            case spChars[1]["직업"]: return chMax(userBuff, spChars[1]["레벨"]);
            case spChars[2]["직업"]: return chMax(userBuff, spChars[2]["레벨"]);
            case spChars[3]["직업"]: return chMax(userBuff, spChars[3]["레벨"]);
            case spChars[4]["직업"]: return chMax(userBuff, spChars[4]["레벨"]);
            case spChars[5]["직업"]: return chMax(userBuff, spChars[5]["레벨"]);
            case spChars[6]["직업"]: return chMax(userBuff, spChars[6]["레벨"]);
            case spChars[7]["직업"]: return chMax(userBuff, spChars[7]["레벨"]);
            case spChars[8]["직업"]: return chMax(userBuff, spChars[8]["레벨"]);
            case spChars[9]["직업"]: return chMax(userBuff, spChars[9]["레벨"]);
            default: break;
         }
      } else {
         return chMax(userBuff, 20)
      }
   }
   if (nananana) {
      return (
         <div className='table'>
            {userDatas && userDatas.buffSkill ?
               <div className='tbody'>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>강화</div>
                     <div style={userDatas.equips[0]["amplificationName"] !== null ?
                        { "color": "#c024f0" } : { "color": "#000" }}>
                        {userDatas.equips[0]["reinforce"]} {userDatas.equips[0]["amplificationName"] !== null ? "증폭" : "강화"}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>재련</div>
                     <div style={{ "color": "#000" }}>{userDatas.equips[0]["refine"]} 재련</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>자버프</div>
                     <div style={
                        jobCheck(foundObj, userDatas.jobGrowName, spChars, userDatas.buffSkill) === "Max" ? { "color": "#0c7308" } : { "color": "red" }
                     }>{jobCheck(foundObj, userDatas.jobGrowName, spChars, userDatas.buffSkill)}&nbsp;({userDatas.buffSkill})</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>오라</div>
                     <div style={
                        navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463) === "종결" ? { color: "#0c7308" } :
                           navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463) === "준종결" ? { color: "#FF7800" } :
                              navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463) === "통수" ? { color: "red" } :
                                 { color: "#000" }
                     }
                     >{navi_chaeck(userDatas.naOhChing["오라"].value, 545, 463)}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>칭호</div>
                     <div style={
                        navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790) === "종결" ? { color: "#0c7308" } :
                           navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790) === "준종결" ? { color: "#FF7800" } :
                              navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790) === "통수" ? { color: "red" } :
                                 { color: "#000" }
                     }
                     >{navi_chaeck(userDatas.naOhChing["칭호"].value, 849, 790)}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>크리쳐</div>
                     <div style={
                        navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810) === "종결" ? { color: "#0c7308" } :
                           navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810) === "준종결" ? { color: "#FF7800" } :
                              navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810) === "통수" ? { color: "red" } :
                                 { color: "#000" }
                     }
                     >{navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810)}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>크리티컬</div>
                     <div style={
                        isMax(userDatas, not100Chars, itemList, equipss) === "Max" ? {color : "#0c7308"} : {color:"red"}
                     }>{isMax(userDatas, not100Chars, itemList, equipss)} ({criticalValue(userDatas.critical[0]["value"], userDatas.critical[1]["value"])} %)</div>
                  </div>
               </div>
               : ""}
         </div>
      )
   } else {
      return (
         <div className='table'>
            {userDatas && userDatas.buffSkill ?
               <div className='tbody'>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>악세서리</div>
                     <div style={
                        acccMabu(userDatas.equips[7].enchant.status, userDatas.equips[8].enchant.status, userDatas.equips[9].enchant.status) === "종결"
                           ? { color: "#0c7308" } :
                           acccMabu(userDatas.equips[7].enchant.status, userDatas.equips[8].enchant.status, userDatas.equips[9].enchant.status) === "준종결"
                              ? { color: "#FF7800" } :
                              { color: "red" }
                     } >{userDatas.equips[7].enchant.status.length >= 1 ?
                        acccMabu(
                           userDatas.equips[7].enchant.status,
                           userDatas.equips[8].enchant.status,
                           userDatas.equips[9].enchant.status
                        )
                        : ""}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>어깨</div>
                     <div>{userDatas.equips[3].enchant.explain ? userDatas.equips[3].enchant.explain : "-"}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>허리</div>
                     <div>{userDatas.equips[6].enchant.explain ? userDatas.equips[6].enchant.explain : "-"}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>신발</div>
                     <div>{userDatas.equips[5].enchant.explain ?
                        userDatas.equips[5].enchant.explain :
                        userDatas.equips[5].enchant.status.length >= 2 && userDatas.equips[5].enchant.status.length < 4 ?
                           `스탯 +${userDatas.equips[5].enchant.status.slice(-1)[0].value}` : `${userDatas.equips[5].enchant.status.slice(-1)[0].name} +${userDatas.equips[5].enchant.status.slice(-1)[0].value}`
                     }</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>보조장비</div>
                     <div>{userDatas.equips[10].enchant.status.length === 4 ?
                        userDatas.equips[10].enchant.status[3]["value"] === 3 ? "시브" : "공격력 증가" : "공격력 증가"}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>장비 총 레벨</div>
                     <div>{userDatas.equipmentTrait ? userDatas.equipmentTrait.totalLevel : "仙 업글 X"}</div>
                  </div>
               </div>
               : ""}
         </div>
      )
   }
}

export default Table