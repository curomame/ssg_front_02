import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// 로그인 영역 파츠

function LoginFieldSet() {

    const url = "http://10.10.10.167:8080/login"

    const [loginData, setLoginData] = useState({
        userId: "",
        password: ""
    })

// 에러관련 헨들링
// 정상적으로 입력이 안됐습니다.
// 입력될때 
// 아이디패스워드 틀립니다.

    const handleChange = ( e ) => {
        setLoginData(
            { ...loginData, [e.target.name]: e.target.value }
        )
    }

    const handleLogin = ( e ) => {
        e.preventDefault()

        axios.post(url, {
            userid : loginData.userId,
            password : loginData.password
        })
        .then(
            Response => {
                console.log(Response)
            })
            .catch(
                error => {
                    console.error(error)
            })
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
                name="password"
                placeholder="비밀번호"
                value={loginData.password}
                onChange={handleChange}
                />
        </div>

          <div className='loginFieldSaveId'>
              <input type="checkbox" defaultChecked="Y"/>
              <div><p>아이디 저장</p></div>
          </div>

            

          <div>
              <div className='loginButton'>로그인</div>
          </div>

            

          <div className='loginSubMenu'>
              <span><Link to="/findIdPw">아이디 찾기</Link></span>
              <span><Link to="/findIdPw">비밀번호 찾기</Link></span>
              <span><Link to="/signup">회원가입</Link></span>
          </div>
          
        </div>
    </div>
  )
}

export default LoginFieldSet