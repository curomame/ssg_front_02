import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CommonFooter from '../common/CommonFooter'
import Header from '../common/Header'
import MYInfoChange from './MYInfoChange'

function MyInfoSetting() {

  const [userInfo, setUserInfo] = useState({})
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {

    axios.get(process.env.REACT_APP_TEST_URL+'/user/moduser',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => setUserInfo(res.data.data))
      .catch(err => console.error(err))
  },[])


  return (
    <>
    
    <Header
      type="text"
      text="내 정보 관리"/>

    <div className='myInfoSettingContainer'>
      <div onClick={()=>setOpenModal(true)}><p>회원정보 변경</p></div>
      <div><p>회원 탈퇴</p></div>
    </div>


    {/* 모달부분 */}
    {openModal  
    ? <MYInfoChange
      userInfo={userInfo}
      />
    : null}

    <CommonFooter/>
    
    </>
  )
}

export default MyInfoSetting