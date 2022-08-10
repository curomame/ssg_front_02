import React from 'react'
import SignUpHeader from '../../component/components/signup/SignUpHeader'
import SignUpInfoBody from '../../component/components/signup/SignUpInfoBody'

function SignUpInfo() {

  // 회원가입 정보 입력 화면

  return (
    <>
      <SignUpHeader title="신세계포인트 통합회원 가입"/>
      <br/>
      <SignUpInfoBody/>
    </>
  )
}

export default SignUpInfo