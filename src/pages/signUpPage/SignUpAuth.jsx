import React from 'react'
import MainFooter from '../../component/components/main/MainFooter'
import SignUpAuthBody from '../../component/components/signup/SignUpAuthBody'
import SignUpHeader from '../../component/components/signup/SignUpHeader'

function SignUpAuth() {
  return (
    <>
    <SignUpHeader title="신세계포인트 통합회원 가입"/>
    <hr/>
    <SignUpAuthBody/>
    <hr/>
    <MainFooter/>
    </>
  )
}

export default SignUpAuth