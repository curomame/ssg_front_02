import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { TempAuthState } from '../../../recoil/atoms/TempAuthState';



function LoginFieldSet() {

  const navigate = useNavigate();
  const tempToken = localStorage.getItem("Authorization");
  const [tempAuth, setTempAuth] = useRecoilState(TempAuthState);


  const [login, setLogin] = useState(false);


  useEffect(()=>{
    {tempAuth && navigate('/') }
  },[login])

  const [loginData, setLoginData] = useState({
      userId: "",
      pwd: ""
    })


  const remindAuth = () => {

  }


  const handleChange = ( e ) => {
      setLoginData({...loginData, [e.target.name]: e.target.value })}


  const handleLogin = ( ) => {
      axios.post("http://10.10.10.167:8080/user/login",loginData)
        .then(res => {
        localStorage.setItem("Authorization",res.data.detail)
        setTempAuth(true);
        setLogin(true)
        })
        .catch(error => {console.error(error)})
  }


  return (
    <div className='loginFieldContainer'>
      <div>

      <div className='loginFieldIDPW'>
          <input
              type="text"
              name="userId"
              placeholder="아이디"
              value={loginData.userId}
              onChange={handleChange}
              />
          <input
              type="password"
              name="pwd"
              placeholder="비밀번호"
              value={loginData.pwd}
              onChange={handleChange}
              />
      </div>

        <div className='loginFieldSaveId'>
            <input type="checkbox" defaultChecked="Y"/>
            <div><p>아이디 저장</p></div>
        </div>

        <div>
            <div onClick={handleLogin} className='loginButton'>로그인</div>
        </div>

        
        

      </div>
    </div>
  )
}

export default LoginFieldSet