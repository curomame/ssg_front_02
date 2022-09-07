import React from 'react'

function LoginSNS() {

  const handleOauth = (type) => {

    if(type === 'kakao'){
      window.location.href = process.env.REACT_APP_TEST_URL+"/oauth2/authorization/kakao"  
    } else if (type ==='naver'){
      // window.alert(process.env.REACT_APP_TEST_URL+"/oauth2/authorization/naver")
      window.location.href = process.env.REACT_APP_TEST_URL+"/oauth2/authorization/naver"
    }

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
    <div onClick={()=>handleOauth('naver')}>
      <div><img src={`${process.env.PUBLIC_URL}/img/네이버.png`} alt="네이버 아이콘" /></div>
      <div>네이버</div>
    </div>

    <div onClick={()=>handleOauth('kakao')}>
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