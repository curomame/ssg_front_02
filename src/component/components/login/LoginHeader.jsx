import React from 'react';
import LoginPreviousIcon from '../../parts/loginParts/LoginPreviousIcon';
import LoginTitleText from '../../parts/loginParts/LoginTitleText';

// 로그인 Header 영역 컴포넌트
// 구성 파츠 : 뒤로가기 아이콘(LoginPreviousIcon)
// , '로그인' 타이틀 텍스트(LoginTitleText)

function Header() {
  return (
    <div style = {{display:"flex"}}>
        <LoginPreviousIcon />
        <LoginTitleText />
    </div>
  )
}

export default Header