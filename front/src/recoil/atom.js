import { atom, selector } from 'recoil';

export const themeState = atom({
   key:"THEME_STATE",
   default:"LIGHT"
})

export const naOhChing = atom({
   key:"NAOHCHING",
   default:true
})

export const userDataState = atom({
   key:"USER_DATAS",
   default:{      
      charName: { "name": "" },
      critical: [{ name: '물리 크리티컬', value: 0 }, { name: '마법 크리티컬', value: 0 }],
      buffSkill: 0,
      jobGrowName: "",
      equips: [],
      naOhChing: {
         '칭호': { name: '모험가 명성', value: 0 }, 
         '크리처': { name: '모험가 명성', value: 0 }, 
         '오라': { name: '모험가 명성', value: 0 }
      },
      buffCru:[],
      jobIdNjobGrowId: {"jobId":"", "jobGrowId":""},
      equipmentTrait:{}
   }
})

// 특정 key의 value만을 추출하는 함수
function extractValuesByKey(arr, key) {
   let arrs = arr["equips"]
   return arrs.map(obj => obj[key]);
 }
export const equipsSelector = selector({
   key:"equipsSelector",
   get:({get}) =>{
      const equips = get(userDataState);
      const filterEquips = extractValuesByKey(equips,"itemName");
      return filterEquips
   }
})