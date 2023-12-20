import React from 'react';
import { useRecoilValue } from 'recoil';
import { userDataState, naOhChing } from '../../recoil/atom'
import { navi_chaeck, buffPower } from '../../configs/etc';
import { bufferId } from '../../configs/buffer'

function BuffTable() {
   const userDatas = useRecoilValue(userDataState);
   const nananana = useRecoilValue(naOhChing);
   const stats = (bufferId, userBufferId) => {
      switch (userBufferId) {
         case bufferId[0]: return 0;
         case bufferId[1]: return 0.5;
         case bufferId[2]: return 1;
         case bufferId[3]: return 1.5;
         default: return 1.5;
      }
   }
   const buffty = (bufferId, userBufferId) => {
      switch (userBufferId) {
         case bufferId[0]: return "러블리 템포";
         case bufferId[1]: return "영광의 축복";
         case bufferId[2]: return "용맹의 축복";
         case bufferId[3]: return "금단의 저주";
         default: return 1;
      }
   }
   const buffty2 = (bufferId, userBufferId) => {
      switch (userBufferId) {
         case bufferId[0]: return "센세이션 Lv +3";
         case bufferId[1]: return "수호의 은총 Lv +3";
         case bufferId[2]: return "계시 : 아리아 Lv +3";
         case bufferId[3]: return "퍼페티어 Lv +3";
         default: return 1;
      }
   }
   const bufffff = (bufferId, userBufferId) => {
      let stat = stats(bufferId, userBufferId);
      return buffPower(stat, userDatas.buffCru[1].value, userDatas.buffCru[3].value, userDatas.buffSkill)
   }
   
   if (nananana) {
      return (
         <div className='table'>
            {userDatas && userDatas.buffSkill ?
               <div className='tbody'>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>무기</div>
                     <div style={userDatas.equips[0]["amplificationName"] !== null ?
                        { "color": "#c024f0" } :
                        { "color": "#000" }
                     }>{userDatas.equips[0]["reinforce"]} {userDatas.equips[0]["amplificationName"] !== null ? "증폭" : "강화"}
                     </div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>재련</div>
                     <div style={{ "color": "#000" }}>{userDatas.equips[0]["refine"]} 재련</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>{buffty(bufferId, userDatas.jobIdNjobGrowId.jobId)}</div>
                     <div>{userDatas.buffSkill} 레벨</div>
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
                     }>{userDatas.multSearch["크리쳐"] === "78fdb8c9c013ed6f055bbddc62908621" ? "마르바스" : navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810)}
                     </div>
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
                     <div>{stats(bufferId, userDatas.jobIdNjobGrowId.jobId) === 0 ? "정신력" :
                        stats(bufferId, userDatas.jobIdNjobGrowId.jobId) === 0.5 ? "체력/정신력" : "지능"}</div>
                     <div>{stats(bufferId, userDatas.jobIdNjobGrowId.jobId) === 0 || stats(bufferId, userDatas.jobIdNjobGrowId.jobId) === 0.5 ? userDatas.buffCru[1].value : userDatas.buffCru[2].value}</div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>상의</div>
                     <div>{userDatas.equips[2]["enchant"] ? 
                     userDatas.equips[2]["enchant"]["reinforceSkill"] ?
                        buffty2(bufferId, userDatas.jobIdNjobGrowId.jobId) : "스탯 마부" : ""}
                     </div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>어깨</div>
                     <div>{userDatas.equips[3]["enchant"] ? 
                     userDatas.equips[3]["enchant"]["reinforceSkill"] ?
                        buffty2(bufferId, userDatas.jobIdNjobGrowId.jobId) : "스탯 마부" : ""}
                     </div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>허리</div>
                     <div>{userDatas.equips[6]["enchant"] ? 
                     userDatas.equips[6]["enchant"]["reinforceSkill"] ?
                        "1각 패시브 Lv +2" : "스탯 마부" : ""}
                     </div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>신발</div>
                     <div>{userDatas.equips[5]["enchant"] ? 
                     userDatas.equips[5]["enchant"]["reinforceSkill"] ?
                        buffty2(bufferId, userDatas.jobIdNjobGrowId.jobId) : "스탯 마부" : ""}
                     </div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>보조장비</div>
                     <div>{userDatas.equips[10]["enchant"] ? 
                     userDatas.equips[10]["enchant"]["reinforceSkill"] ?
                        buffty2(bufferId, userDatas.jobIdNjobGrowId.jobId) : "스탯 마부" : ""}
                     </div>
                  </div>
                  <div style={{ "textAlign": "center" }} className='tr'>
                     <div>버프 수치</div>
                     <div>{Math.ceil(bufffff(bufferId, userDatas.jobIdNjobGrowId.jobId))}</div>
                  </div>
               </div>
               : ""}
         </div>
      )
   }
}

export default BuffTable