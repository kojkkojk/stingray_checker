import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useSearchParams, useNavigate } from "react-router-dom";
import { serverList } from '../../configs/etc'

function List() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState([])
  const charname = searchParams.get("charname");
  const navigate = useNavigate();
  const shootId = (e, a) => { navigate(`/results?charuid=${e}&serverId=${a}`) }
  const fillters = (elements) => {
    if (elements.fame >= 40047) {
      return true;
    }
  }
  const fetchData = async (charname) => {
    try {
      const response = await axios.post(`/api/charlist`, { params: { "charname": charname } })
      const nickList = response.data.rows
      const nNcikList = nickList?.filter(fillters)
      setData(nNcikList);
    } catch (error) {
      console.error('데이터를 불러오는 데 실패했습니다.', error);
    }
  };
  const select_user = (e, a) => { shootId(e, a) }
  const handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = ''; // Chrome에서 경고 메시지를 표시하기 위해 필요
  };
  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    fetchData(charname)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [])

  return (
    <div className='isItHim'>
      <div className='thead'><span>서버</span><span>닉네임</span><span>직업</span><span>명성</span></div>
      <div className='findHim'>
        {data && data.length > 0 ?
          data.map((d, i) => (
            <div className='charNames' key={i} onClick={() => { select_user(d.characterId, d.serverId) }}>
              <span>{serverList[d.serverId]}</span>
              <span>{d.characterName}</span>
              <span>{d.jobGrowName}</span>
              <span>{d.fame === null ? 0 : d.fame}</span>
            </div>
          ))
          : ""}
      </div>
    </div>
  )
}

export default List