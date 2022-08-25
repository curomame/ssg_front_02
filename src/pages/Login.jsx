import React from 'react'
import LoginFieldSet from '../component/parts/loginParts/LoginFieldSet'
import Header from '../component/components/common/Header'
import '../assets/css/login.css'
import Footer from '../component/components/common/CommonFooter'
import { Link } from 'react-router-dom'


function Login() {

  return (
    <>
      <Header
        type={'login'}/>

      <LoginFieldSet/>


      <div className='loginSubMenu'>
            <span><Link to="/findIdPw">아이디 찾기</Link></span>
            <span><Link to="/findIdPw">비밀번호 찾기</Link></span>
            <span><Link to="/signup">회원가입</Link></span>
        </div>


      <Footer/>
    </>
  )
}

export default Login