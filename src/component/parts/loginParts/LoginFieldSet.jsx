import axios from 'axios'
import React, { useState } from 'react'

// 로그인 영역 파츠

function LoginFieldSet() {

    const url = "http://10.10.10.167:8080/login"

    const [loginData, setLoginData] = useState({
        userId: "",
        password: ""
    })

    const handleChange = ( e ) => {
        console.log(e)
        setLoginData(
            { ...loginData, [e.target.name]: e.target.value }
        )
    }

    const handleLogin = ( e ) => {
        console.log(loginData)
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
                    console.log(error)
            })
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <fieldset>
                <input
                    type="text"
                    name="userId"
                    placeholder="아이디"
                    value={loginData.userId}
                    onChange={handleChange}
                    />
                    <br/>
                <input
                    type="password"
                    name="password"
                    placeholder="비밀번호"
                    value={loginData.password}
                    onChange={handleChange}
                    />
                    <br/>
                <input
                    type="checkbox"
                    defaultChecked="Y"
                    />
                <label>아이디 저장</label>
                <br/>
                <button type="submit">로그인</button>
            </fieldset>
        </form>
    </div>
  )
}

export default LoginFieldSet