import React from 'react'
import SignUpPreviousIcon from '../../parts/signUpParts/SignUpPreviousIcon'
import SignUpTitleText from '../../parts/signUpParts/SignUpTitleText'

function SignUpHeader({title}) {
  return (
    <div style = {{display:"flex"}}>
        <SignUpPreviousIcon />
        <SignUpTitleText title={title} />
    </div>
  )
}

export default SignUpHeader