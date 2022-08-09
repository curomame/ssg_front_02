import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// 로그인 Header 영역의 뒤로가기 아이콘 파츠

function SignUpPreviousIcon() {

  const navigate = useNavigate();

  return (
    <div>
        {/* 뒤로가기 할 때 이전에 접속한 페이지로 이동시키기 */}
        <div><span className="material-icons-outlined" onClick={()=>navigate(-1)}>arrow_back</span></div>
    </div>
  )
}

export default SignUpPreviousIcon