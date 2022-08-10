import React from 'react'
import SignupButton from '../../parts/signUpParts/SignupButton'
import SignUpInfoField from '../../parts/signUpParts/SignUpInfoField'
import SignUpTopCard from '../../parts/signUpParts/SignUpTopCard'

function SignUpInfoBody() {
  return (
    <>
        <SignUpTopCard title="회원 정보"/>
        <br/>
        <SignUpInfoField/>
    </>
  )
}

export default SignUpInfoBody