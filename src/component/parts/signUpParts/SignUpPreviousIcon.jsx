import React from 'react'
import { Link } from 'react-router-dom'

// 로그인 Header 영역의 뒤로가기 아이콘 파츠

function SignUpPreviousIcon() {
  return (
    <div>
        {/* 뒤로가기 할 때 이전에 접속한 페이지로 이동시키기 */}
        <div><span className="material-icons-outlined"><Link to='/'>arrow_back</Link></span></div>
    </div>
  )
}

export default SignUpPreviousIcon