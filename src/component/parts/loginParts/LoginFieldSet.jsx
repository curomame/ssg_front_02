import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// 로그인 영역 파츠



function LoginFieldSet() {

    const [loginData, setLoginData] = useState({
        userId: "",
        pwd: ""
    })


// 에러관련 헨들링
// 정상적으로 입력이 안됐습니다.
// 입력될때 
// 아이디패스워드 틀립니다.

// 
// 아이디 공백, 특수문자,길이 6자이상 20자 이하
// 비밀번호 공백, 대소 섞여야하고, 특수문자 하나, 숫자 하나, 14자 이상 30자이하


    const handleChange = ( e ) => {
        setLoginData(
            { ...loginData, [e.target.name]: e.target.value }
        )
    }

    const handleLogin = ( e ) => {
        e.preventDefault()

        const ID_PATTERN =  /[`~!@#$%^&*|\\\'\";:\/?]/gi;
        

        // const PWD_PATTERN1 =  /[`~!@#$%^&*|\\\'\";:\/?0-9A-Za-z]/gi;
        // const PWD_PATTERN2 =  /[0-9]/gi;
        // const PWD_PATTERN3 =  /[A-Za-z]/gi;

        // testtest123
        // Sssg123123!

        if(loginData.userId.trim() === ''){
          alert('아이디를 입력해주세요.')
        } else if (loginData.pwd.trim() === ''){
          alert('비밀번호를 입력해주세요.')
        } else if ((ID_PATTERN.test(loginData.userId.trim()) === true) || loginData.userId.length < 6 || loginData.userId.length > 21){
          alert('아이디, 비밀번호가 정확하지 않습니다.')
        } else {

          let pushData = {
            "userId" : loginData.userId,
            "pwd" : loginData.pwd
          }

          
          axios.get("http://10.10.10.107:8083/user/login", {

          data : JSON.stringify(pushData)
        }
            )
        .then(res => {console.log(res.data)})
        .catch(error => {console.error(error)})

        console.log(loginData.userId)
        console.log(loginData.pwd)
        console.log(typeof pushData);

        }



        

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