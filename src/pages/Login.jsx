import React from 'react'
import Header from '../component/components/login/LoginHeader'
import LoginFooter from '../component/components/login/LoginFooter'
import LoginFieldSet from '../component/parts/loginParts/LoginFieldSet'

// 로그인 페이지 메인 화면

function Login() {

  return (
    <>
      <Header/>
      <hr/>
      <LoginFieldSet/>
      <hr />
      <LoginFooter/>
    </>
  )
}

export default Login