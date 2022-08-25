import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function EmailTest() {

  const [email, setEmail] = useState('')
  const [인증번호, set인증번호] = useState(null)

//10.10.10.107:8083/emailauthen

console.log(email)

  const AuthEmail = (e) => {
    e.preventDefault()
    axios.post("http://10.10.10.107:8083/emailauthen",{
      email:email
    })
      .then(res => set인증번호(res.data.data))
  }

  const VerifyEmail = (e) => {
    e.preventDefault()
    console.log(2);
  }

  return (
    <>
    
      <div>
        
        <div>
          <input type="text" placeholder='이메일 주소 입력' 
          value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <button onClick={AuthEmail} >이메일 인증 받기</button>
        </div>

        <div>
          <input type="number" />
          <button onClick={VerifyEmail} >인증번호 확인</button>
        </div>

        <button>가입 진행</button>

      </div>
    
    </>
  )
}

export default EmailTest