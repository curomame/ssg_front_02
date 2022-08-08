import React from 'react'
import LoginHeader from '../component/components/login/LoginHeader'
import LoginFieldSet from '../component/parts/loginParts/LoginFieldSet'
import MainFooter from '../component/components/main/MainFooter'

// 로그인 메인 화면

function Login() {

  return (
    <>
      <LoginHeader/>
      <hr/>
      <LoginFieldSet/>
      <hr />
      <MainFooter/>
    </>
  )
}

export default Login