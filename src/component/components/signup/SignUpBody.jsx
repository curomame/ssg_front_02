import React from 'react'
import SignUpBenefit from '../../parts/signUpParts/SignUpBenefit'
import SignupButton from '../../parts/signUpParts/SignupButton'
import SignUpTopCard from '../../parts/signUpParts/SignUpTopCard'

function SignUpBody() {
  return (
    <>
        <SignUpTopCard/>
        <hr/>
        <SignUpBenefit/>
        <hr/>
        <SignupButton/>
    </>
  )
}

export default SignUpBody