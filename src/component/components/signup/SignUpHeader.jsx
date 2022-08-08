import React from 'react'
import SignUpPreviousIcon from '../../parts/signUpParts/SignUpPreviousIcon'
import SignUpTitleText from '../../parts/signUpParts/SignUpTitleText'

function SignUpHeader() {
  return (
    <div style = {{display:"flex"}}>
        <SignUpPreviousIcon />
        <SignUpTitleText />
    </div>
  )
}

export default SignUpHeader