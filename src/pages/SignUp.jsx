import React from 'react'
import { Outlet } from 'react-router-dom'
import CommonFooter from '../component/components/common/CommonFooter'
import Header from '../component/components/common/Header'
import SignUpBenefit from '../component/parts/signUpParts/SignUpBenefit'
import SignupButton from '../component/parts/signUpParts/SignupButton'
import SignUpTopCard from '../component/parts/signUpParts/SignUpTopCard'
import '../assets/css/signup.css'

function SignUp() {
  
  
  
  return (
    <>
      
      <Header
        type={'signup'}/>
      
      <Outlet/>

      <CommonFooter/>

    </>
  )
}

export default SignUp