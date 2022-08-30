import React from 'react'
import Footer from '../component/components/common/CommonFooter'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'
import '../assets/css/mypage.css'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import useAuthToken from '../hooks/useAuthToken'
import { useContext } from 'react'
import { TokenVerifying } from '../context/TokenVerifying'
import { useRecoilValue } from 'recoil'
import { TempAuthState } from '../recoil/atoms/TempAuthState'
import { useEffect } from 'react'
import IsLogin from '../utils/IsLogin'

function MyPage() {
  
  // IsLogin();

  return (
    <>
      <Header
        type={'mypage'}/>

      <div className='mypageProfile'>
        <div className='mypageProfileIcon'>
          <img src="//sui.ssgcdn.com/ui/m_ssg/img/@100x100.png" alt="" />
        </div>
        <div className='mypageProfileDetail'>
          <div>이형민 님 {'>'}</div>
          <div><span>FRIENDS</span> 등급입니다.</div>
        </div>
      </div>


      <div className='mypageFunctions'>

        <div>
          <Link to='/wishlist'>
            <span class="material-icons-outlined">favorite_border</span>
            <p>좋아요</p>
          </Link>
        </div>
        
        <div>
          <Link to='shipaddress'>
            <span class="material-icons-outlined">favorite_border</span>
            <p>배송지 관리</p>
          </Link>
        </div>

        <div>
          <Link to='/wishlist'>
            <span class="material-icons-outlined">favorite_border</span>
            <p>알림함</p>
          </Link>
        </div>

        
        </div>

        <div className='mypageReviewBox'>
          <Link to='/review'>
            <div><p>지금 작성 가능한 리뷰</p></div>
            <div><p>일반 0 | 스페셜 0</p></div>
          </Link>
        </div>
          
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default MyPage