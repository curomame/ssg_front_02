import React from 'react'
import SignUpBenefit from '../../parts/signUpParts/SignUpBenefit'
import SignupButton from '../../parts/signUpParts/SignupButton'
import SignUpTopCard from '../../parts/signUpParts/SignUpTopCard'

function SignUpMainBody() {
  return (
    <>
        <SignUpTopCard title="신세계포인트 통합회원"/>
        <br/>
        <SignUpBenefit/>
        <br/>
        <SignupButton/>
    </>
  )
}

export default SignUpMainBody