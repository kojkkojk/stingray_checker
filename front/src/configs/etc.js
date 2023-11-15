export const serverList = {
   anton: "안톤", bakal: "바칼", cain: "카인", casillas: "카시야스", diregie: "디레지에", hilder: "힐더", prey: "프레이", siroco: "시로코"
}
export const apiURL = process.env.REACT_APP_API_URL
export function navi_chaeck(fame, checkFame1, checkFame2) {
   if (fame === checkFame1) {
      return "종결"
   } else if (fame < checkFame1 && fame >= checkFame2) {
      return "준종결"
   } else {
      return "통수"
   }
}
export const spChars = [
   { "직업": "眞 다크템플러", "레벨": 11 },
   { "직업": "眞 스트라이커", "레벨": 30 },
   { "직업": "眞 엘레멘탈 바머", "레벨": 30 },
   { "직업": "眞 스위프트 마스터", "레벨": 30 },
   { "직업": "眞 엘레멘탈마스터", "레벨": 25 },
   { "직업": "眞 배틀메이지", "레벨": 11 },
   { "직업": "眞 크루세이더", "레벨": 30 },
   { "직업": "眞 어벤저", "레벨": 30 },
   { "직업": "眞 무녀", "레벨": 30 },
   { "직업": "眞 엘븐나이트", "레벨": 30 }
]
export const not100Chars = [
   { "직업": "眞 배틀메이지", "만크": 49.1 },
   { "직업": "眞 로그", "만크": 50 },
   { "직업": "眞 소드마스터", "만크": 60 },
   { "직업": "眞 스트리트파이터", "만크": 60 },
   { "직업": "眞 웨펀마스터", "만크": 60 },
   { "직업": "眞 퇴마사", "만크": 62 },
   { "직업": "眞 섀도우댄서", "만크": 69.1 },
   { "직업": "眞 팔라딘", "만크": 69.5 },
   { "직업": "眞 크루세이더", "만크": 70 },
   { "직업": "眞 뱅가드", "만크": 70 },
   { "직업": "眞 레인저", "만크": 72.6 },
   { "직업": "眞 미스트리스", "만크": 75.5 },
   { "직업": "眞 버서커", "만크": 77.6 },
   { "직업": "眞 트래블러", "만크": 75 },
   { "직업": "眞 인파이터", "만크": 78.5 },
   { "직업": "眞 아수라", "만크": 80 },
   { "직업": "眞 이단심판관", "만크": 80 },
   { "직업": "眞 다크랜서", "만크": 80 },
   { "직업": "眞 스페셜리스트", "만크": 80 },
   { "직업": "眞 크리에이터", "만크": 80 },
   { "직업": "眞 디멘션워커", "만크": 82.5 },
   { "직업": "眞 엘레멘탈마스터", "만크": 93.8 }
]

export const acceMabu = (item) => {
   let mabuName = item[0]["name"];
   if (mabuName === "모든 속성 강화") {
      switch (item[0]["value"]) {
         case 28:
            return 0
         case 29:
            return 1
         case 31:
            return 2
         case 33:
            return 3
         default:
            break;
      }
   } else if (
      mabuName === "화속성강화" ||
      mabuName === "명속성강화" ||
      mabuName === "암속성강화" ||
      mabuName === "수속성강화"
   ) {
      switch (item[0]["value"]) {
         case 30:
            return 0
         case 31:
            return 1
         case 33:
            return 2
         case 35:
            return 3
         default:
            break;
      }
   }
}

export const acccMabu = (x, y, z) => {
   let a = acceMabu(x); let b = acceMabu(y); let c = acceMabu(z);
   if (a + b + c >= 0 && a + b + c <= 8) {
      return "준종결"
   } else if (a + b + c === 9) {
      return "종결"
   }
}

export const itemList = [
   { "itemName": "데저트 컨실멘트 숄더", "value": 10 },
   { "itemName": "마그네틱 서치 스캔", "value": 10 },
   { "itemName": "염된 빙석 견갑", "value": 10 },
   { "itemName": "빛을 잃은 진실", "value": 10 },
   { "itemName": "경계를 넘어선 차원", "value": 5 },
   { "itemName": "잠겨진 영역", "value": 10 },
   { "itemName": "이온화조정 팔찌", "value": 10 },
   { "itemName": "파괴된 생명", "value": 20 },
   { "itemName": "터치 컨트롤 패널", "value": 10 },
   { "itemName": "옵티컬 컴뱃 글래스", "value": 5 },
   { "itemName": "오퍼레이션 오더", "value": 15 },
   { "itemName": "미지의 문명 - 트윈 스톤", "value": 15 },
   { "itemName": "생명을 키우는 코발트 스틱", "value": 15 },
   { "itemName": "청명한 아침의 새싹", "value": 15 },
   { "itemName": "내딛는 용기", "value": 2 },
   { "itemName": "딥 다이버 워치", "value": 20 },
   { "itemName": "仙 : 데저트 컨실멘트 숄더", "value": 10 },
   { "itemName": "仙 : 마그네틱 서치 스캔", "value": 10 },
   { "itemName": "仙 : 염된 빙석 견갑", "value": 10 },
   { "itemName": "仙 : 빛을 잃은 진실", "value": 10 },
   { "itemName": "仙 : 경계를 넘어선 차원", "value": 5 },
   { "itemName": "仙 : 잠겨진 영역", "value": 10 },
   { "itemName": "仙 : 이온화조정 팔찌", "value": 10 },
   { "itemName": "仙 : 파괴된 생명", "value": 20 },
   { "itemName": "仙 : 터치 컨트롤 패널", "value": 10 },
   { "itemName": "仙 : 옵티컬 컴뱃 글래스", "value": 5 },
   { "itemName": "仙 : 오퍼레이션 오더", "value": 15 },
   { "itemName": "仙 : 미지의 문명 - 트윈 스톤", "value": 15 },
   { "itemName": "仙 : 생명을 키우는 코발트 스틱", "value": 15 },
   { "itemName": "仙 : 청명한 아침의 새싹", "value": 15 },
   { "itemName": "仙 : 내딛는 용기", "value": 2 },
   { "itemName": "仙 : 딥 다이버 워치", "value": 20 }
]

export function isMax(charInfo, not100Chars, itemList, userItemList) {
   // 동일한 객체를 다른 배열로 추출하는 함수
   // function extractObjects(array, obj) {
   //    return array.filter(item => item["itemName"] === obj);
   // }
   // 동일한 객체를 다른 배열로 추출하는 함수2
   function extractObjects2(array, obj) {
      return array.filter(job => job["직업"] === obj["jobGrowName"]);
   }
   // 두 배열에서 동일한 값을 추출하여 새로운 배열 생성
   function tyohyio(arr1, arr2) {
      const commonValues = arr1.filter(value => arr2.includes(value["itemName"]));
      return commonValues
   }

   // 두 배열 간에 공통된 요소가 있는지 확인하는 함수
   function hasCommonElement(arr1, arr2) {
      return arr1.some(item => arr2.includes(item["itemName"]));
   }
   let vigyo = (a, b) => { if (a >= b) { return a } else { return b } }
   let isCritical = vigyo(charInfo["critical"][0]["value"], charInfo["critical"][1]["value"])
   let isMatch = not100Chars.some(val => val["직업"] === charInfo.jobGrowName);
   if (isMatch) {
      // 리스트에 있는 직업
      let jobIs = extractObjects2(not100Chars, charInfo)
      if (jobIs[0]["만크"] <= isCritical) {
         // 2 - 1. 조건표의 수치를 넘음 => Max
         return "Max"
      } else {
         // 2 - 2. 수치를 넘지 않음 => 아이템으로 구분
         if (hasCommonElement(itemList, userItemList)) {
            // 2 - 2 - 2. 아이템이 있음 => 기본수치 + 아이템 수치가 조건을 넘는지 확인
            // 2 - 2 - 2 - 1. 조건을 넘음 => Max 
            if (tyohyio(itemList, userItemList)[0]["value"] + isCritical >= jobIs[0]["만크"]) { return "Max" }
            // 2 - 2 - 2 - 2. 조건을 안넘음 => Not Max
            return "Not Max"
         }
         // 2 - 2 - 1. 아이템이 없음 => Not Max
         return "Not Max"
      }
   } else {
      // 리스트에 없는 직업
      if (isCritical >= 100) {
         //	1 - 1. 100% 넘음 => Max
         return "Max";
      } else {
         //1 - 2. 100% 안넘음 => 아이템으로 구분
         if (hasCommonElement(itemList, userItemList)) {
            // 1 - 2 - 2. 아이템을 가지고 있음 => 기본 수치와 아이템 수치 합이 100 넘는지 확인

            // 1 - 2 - 2  -1. 100 넘음 => Max
            if (tyohyio(itemList, userItemList)[0]["value"] + isCritical >= 100) {
               return "Max"
            } else if (charInfo.jobGrowName === "眞 소울브링어" && hasCommonElement(itemList, userItemList)) {
               if (tyohyio(itemList, userItemList)[0]["value"] + isCritical >= 95) {
                  return "Max"
               } else {
                  return "Not Max"
               }
            }
            // 1 - 2 - 2 - 2. 100 안넘음 => Not Max
            return "Not Max"
         } else {
            // 1 - 2 - 1.아이템이 없음 => Not Max
            return "Not Max"
         }
      }
   }
}