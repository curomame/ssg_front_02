import React from 'react'
import Footer from '../component/components/common/CommonFooter'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'
import '../assets/css/mypage.css'
import { Link } from 'react-router-dom'

function MyPage() {
  return (
    <>
      <Header
        type={'mypage'}/>

      <div className='mypageProfile'>
        <div className='mypageProfileIcon'>
          <span class="material-icons-outlined">account_circle</span>
        </div>
        <div className='mypageProfileDetail'>
          <div>이형민 님 {'>'}</div>
          <div><span>FRIENDS</span> 등급입니다.</div>
        </div>
      </div>


      <div className='mypageFunctions'>
        <div>
          <p><span class="material-icons-outlined">favorite_border</span>좋아요</p>
        </div>
        
        <div>
        <p><span class="material-icons-outlined">local_shipping</span>배송지관리</p>
        </div>
        
        <div>
        <p><span class="material-icons-outlined">notifications</span>알림함</p>
        </div>
        
        </div>

        <div>
          <Link to='/review'>
        <p><span class="material-icons-outlined">notifications</span>리뷰쓰러가깅</p>
          </Link>
        </div>
          
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default MyPage