import React from 'react'

function LoginSNS() {

  const handleKakaoLogin = () => {
    window.location.href = "http://10.10.10.107:8080/oauth2/authorization/kakao"
    return null
  }

  const handlePopupWating =() => {
    window.alert('준비중인 서비스입니다 :<')
  }

  return (
    <>
    <div className='signupEntryIcons underIcons'>
          
    <div onClick={handlePopupWating}>
      <div><img src={`${process.env.PUBLIC_URL}/img/이메일.png`} alt="이메일 아이콘" /></div>
      <div>이메일</div>
    </div>
    <div onClick={handlePopupWating}>
      <div><img src={`${process.env.PUBLIC_URL}/img/네이버.png`} alt="네이버 아이콘" /></div>
      <div>네이버</div>
    </div>

    <div onClick={handleKakaoLogin}>
      <div><img src={`${process.env.PUBLIC_URL}/img/카카오.png`} alt="카카오 아이콘" /></div>
      <div>카카오</div>
    </div>
    <div onClick={handlePopupWating}>
      <div><img src={`${process.env.PUBLIC_URL}/img/애플.png`} alt="애플 아이콘" /></div>
      <div>애플</div>
    </div>

</div>
</>
  )
}

export default LoginSNS