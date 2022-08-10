import React from 'react'
import { Link } from 'react-router-dom'

function SignupButton({url, title}) {
  return (
    <Link to={url}>
      <button style={{backgroundColor:"#ff5b59", border: 0, outline: 0, color: "#fff"}}>{title}</button>
    </Link>
  )
}

export default SignupButton