import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUpEntry() {
  
  const navigate = useNavigate();

  const handlePopupWating =() => {
    window.alert('준비중인 서비스입니다 :<')
  }

  return (
    <>
    
    <div className='signupEntryContainer'>
      <div className='signupTopHead'>신세계 통합 회원</div>

      <div className='signupEntryIcons'>
        
        <div >
          <div><img src={`${process.env.PUBLIC_URL}/img/cake.png`} alt="그림" /></div>
          <div>최대 20만원 생일쿠폰 제공</div>
        </div>
        <div>
          <div><img src={`${process.env.PUBLIC_URL}/img/point.png`} alt="그림" /></div>
          <div>신세계포인트 적립 및 사용</div>
        </div>
        <div>
          <div><img src={`${process.env.PUBLIC_URL}/img/day.png`} alt="그림" /></div>
          <div>다양한 이벤트 참여 혜택</div>
        </div>

      </div>

      <div className='signupEntryButton'>
        <Link to='/signup/info'>
        통합 회원 가입
        </Link>
      </div>

      <div className='signupTopHead'>간편 회원</div>

        <div className='signupEntryIcons underIcons'>
          
          <div onClick={handlePopupWating}>
            <div><img src={`${process.env.PUBLIC_URL}/img/이메일.png`} alt="이메일 아이콘" /></div>
            <div>이메일</div>
          </div>
          <div onClick={handlePopupWating}>
            <div><img src={`${process.env.PUBLIC_URL}/img/네이버.png`} alt="네이버 아이콘" /></div>
            <div>네이버</div>
          </div>

          <div onClick={handlePopupWating}>
            <div><img src={`${process.env.PUBLIC_URL}/img/카카오.png`} alt="카카오 아이콘" /></div>
            <div>카카오</div>
          </div>
          <div onClick={handlePopupWating}>
            <div><img src={`${process.env.PUBLIC_URL}/img/애플.png`} alt="애플 아이콘" /></div>
            <div>애플</div>
          </div>

      </div>


    </div>
    </>
  )
}

export default SignUpEntry