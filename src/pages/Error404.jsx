import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Error404() {
  
  const navigate = useNavigate();

  const [time,setTime] = useState(5);

  const timeOutFunc = () => {
    setTime(time-1)
  }


  useEffect(() => {

    if(time >= 1){
      setTimeout(()=>timeOutFunc(),1000)
    } else{
      navigate(-1);
    }

  },[time])

  return (
    <>
    
      <div className='errorContainer'>
        <div className='errorIcon'><img src="https://sui.ssgcdn.com/ui/m_ssg/img/common/icon_ssgerr2.png" alt="" /></div>
        <div><h2>주소가 잘못 입력되었거나, 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</h2></div>
        <div><p>{time}초후에 메인 페이지로 자동 이동합니다.</p></div>
        <div onClick={() => navigate(-1)} className='errorBackButton'>이전 페이지 돌아가기</div>
      </div>

    </>
  )
}

export default Error404