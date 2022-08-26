import React from 'react'
import { Link } from 'react-router-dom'

function SignUpEntry() {
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

    </div>
    </>
  )
}

export default SignUpEntry