import React from 'react';
import { useRecoilValue } from 'recoil';
import { userDataState } from '../../recoil/atom'
import { navi_chaeck } from '../../configs/etc';
import { bufferId } from '../../configs/buffer'

function BuffTable() {
   const userDatas = useRecoilValue(userDataState);
   const yongcuck = (userDatas) => {
      switch (userDatas.jobGrowName) {
         case "眞 크루세이더":
            return "용축";
         case "眞 인챈트리스":
            return "금단의 저주";
         case "眞 뮤즈":
            return "러블리 템포";
         default:
            return "용축";
      }
   }
   const stats = (bufferId, userBufferId) => {
      switch (userBufferId) {
         case bufferId[0]:
            return 0;
         case bufferId[1]:
            return 0.5;
         case bufferId[2]:
            return 1;
         case bufferId[3]:
            return 1;
         default:
            return 1;
      }
   }
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
                  <div>{yongcuck(userDatas)}</div>
                  <div style={userDatas.buffSkill === 18 ? { "color": "#0c7308" } : { "color": "#FF7800" }}>{userDatas.buffSkill}</div>
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
                  }>{userDatas.multSearch["크리쳐"] === "78fdb8c9c013ed6f055bbddc62908621" ? "마르바스" :                     navi_chaeck(userDatas.naOhChing["크리처"].value, 889, 810)}
                  </div>
               </div>
               <div style={{ "textAlign": "center" }} className='tr'>
                  <div>{stats(bufferId, userDatas.jobIdNjobGrowId.jobId) === 0 ? "정신력" :
                     stats(bufferId, userDatas.jobIdNjobGrowId.jobId) === 0.5 ? "체력/정신력" : "지능"}</div>
                  <div>{stats(bufferId, userDatas.jobIdNjobGrowId.jobId) === 0 || stats(bufferId, userDatas.jobIdNjobGrowId.jobId) === 0.5 ? userDatas.buffCru[1].value : userDatas.buffCru[2].value}</div>
               </div>
            </div>
            : ""}
      </div>
   )
}

export default BuffTable