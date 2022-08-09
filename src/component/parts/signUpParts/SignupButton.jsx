import React from 'react'
import { Link } from 'react-router-dom'

function SignupButton() {
  return (
    <Link to="./auth">
      <button style={{backgroundColor:"#ff5b59", border: 0, outline: 0, color: "#fff"}}>통합 회원가입</button>
    </Link>
  )
}

export default SignupButton