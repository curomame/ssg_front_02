import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Header from '../common/Header'

function MYInfoChange({userInfo,setOpenModal}) {


  const [newUserInfo, setNewUserInfo] = useState({

    "phoneNum":"",
    "email":""
  })


  
  console.log(newUserInfo)

  const handleChange = (e) => {
    setNewUserInfo({...newUserInfo,[e.target.name]:e.target.value})
  } 

  const handleChangeMyInfo = () => {
    axios.put(process.env.REACT_APP_TEST_URL+'/user/moduser/mod',newUserInfo,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <>
    <div className='ChangeModalTopContainer'>
      <Header
        type={"text"}
        text={"회원 정보 변경"}
        func={setOpenModal}
        />

      <div className='myInfoChangeModalContainer'>
        <div>
          <div><p>userId</p></div>
          <input type="text" name='userId' value={userInfo.userId} />
        </div>

        <div>
          <div><p>이름</p></div>
          <input type="text" name='userId' value={userInfo.name} />
        </div>

        <div>
          <div><p>phoneNum</p></div>
          <input 
            type="text"
            name='phoneNum'
            value={newUserInfo.phoneNum}
            onChange={handleChange}
            placeholder='휴대폰 번호를 입력해주세요'/>
        </div>

        <div>
          <div><p>email</p></div>
          <input 
            type="text" 
            name='email' 
            value={newUserInfo.email} 
            onChange={handleChange}
            placeholder='이메일을 입력해주세요'/>
        </div>

        {/* <div>
          <div><p>password</p></div>
          <input type="password" name='password' placeholder='새로운 비밀 번호를 입력해주세요'/>
        </div> */}

        <div onClick={handleChangeMyInfo} className='myInfoChangeButton'><p>수정하기</p></div>

      </div>

    </div>
    </>
  )
}

export default MYInfoChange