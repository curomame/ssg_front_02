import React from 'react'
import Footer from '../component/components/common/CommonFooter'
import Header from '../component/components/common/Header'
import BottomNav from '../component/layout/BottomNav'
import '../assets/css/mypage.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { TempAuthState } from '../recoil/atoms/TempAuthState'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import MyPagePointBox from '../component/components/mypage/MyPagePointBox'
import MyPageOrderBox from '../component/components/mypage/MyPageOrderBox'
import MypageReviewBox from '../component/components/mypage/MypageReviewBox'

function MyPage() {
  
  const [userInfo, setUserInfo] = useState({});
  const tempAuth = useRecoilValue(TempAuthState);
  const navigate = useNavigate()



  useEffect(() => {

    if(!tempAuth){
      window.alert('로그인이 필요합니다!')
      navigate('/login')
    } else {

        axios.get(process.env.REACT_APP_TEST_URL+'/user/my',{
          headers:{
            "Authorization":localStorage.getItem("Authorization")
          }
        })
          .then(res => setUserInfo(res.data.data))
          .catch(err => console.error(err))
    }
    
  },[])

  return (
    <>
      <Header
        type={'mypage'}/>

      <div className='mypageProfile'>
        <div className='mypageProfileIcon'>
          <img src="//sui.ssgcdn.com/ui/m_ssg/img/@100x100.png" alt="" />
        </div>
        <Link to='setting'>
          <div className='mypageProfileDetail'>
            <div>{userInfo.name} 님 {'>'}</div>
            <div><span>{userInfo.grade}</span> 등급입니다.</div>
          </div>
        </Link>
      </div>


      <div className='mypageFunctions'>

        <div>
          <Link to='/wishlist'>
            <span className="material-icons-outlined">favorite_border</span>
            <p>좋아요</p>
          </Link>
        </div>
        
        <div>
          <Link to='shipaddress'>
            <span className="material-icons-outlined">favorite_border</span>
            <p>배송지 관리</p>
          </Link>
        </div>

        <div>
          <Link to='#'>
            <span className="material-icons-outlined">favorite_border</span>
            <p>알림함</p>
          </Link>
        </div>
        </div>

        <MyPagePointBox/>
        <MyPageOrderBox/>
        <MypageReviewBox/>


          
      <Footer/>
      <BottomNav/>
    </>
  )
}

export default MyPage