import React from 'react'
import { Link } from 'react-router-dom'

// 로그인 Header 영역의 뒤로가기 아이콘 파츠

function LoginPreviousIcon() {
  return (
    <div>
        <div><span className="material-icons-outlined"><Link to='/'>arrow_back</Link></span></div>
    </div>
  )
}

export default LoginPreviousIcon