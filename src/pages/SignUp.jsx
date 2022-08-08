import React from 'react'
import MainFooter from '../component/components/main/MainFooter'
import SignUpBody from '../component/components/signup/SignUpBody'
import SignUpHeader from '../component/components/signup/SignUpHeader'
import SignUpBenefit from '../component/parts/signUpParts/SignUpBenefit'
import SignUpTopCard from '../component/parts/signUpParts/SignUpTopCard'

// 회원가입 메인 화면

function SignUp() {
  return (
    <>
    <SignUpHeader/>
    <hr/>
    <SignUpBody/>
    <hr/>
    <MainFooter/>
    </>
  )
}

export default SignUp