import React from 'react'
import LoginFieldSet from '../component/parts/loginParts/LoginFieldSet'
import Header from '../component/components/common/Header'
import '../assets/css/login.css'
import Footer from '../component/components/common/CommonFooter'

// 로그인 메인 화면

function Login() {

  return (
    <>
      <Header
        type={'login'}/>
      <LoginFieldSet/>
      <hr />
      <Footer/>
    </>
  )
}

export default Login