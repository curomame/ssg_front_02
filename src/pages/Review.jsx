import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CommonFooter from '../component/components/common/CommonFooter'
import Header from '../component/components/common/Header'
import '../assets/css/myReview.css'
import MyReviewBoxs from '../component/components/myReview/MyReviewBoxs'
import BottomNav from '../component/layout/BottomNav'
import MainImgBanner from '../component/parts/mainParts/MainImgBanner'
import { useNavigate } from 'react-router-dom'

function Review() {

  const navigate = useNavigate()

  const [ableReview,setAbleReview] = useState(null);
  const [cantReview,setCantReview] = useState(null);
  const [isClicked, setIsClicked] = useState(true);

  const handleChangeClicked = (e) => {
    setIsClicked(!isClicked)
  };

  useEffect(()=>{

    axios.get(process.env.REACT_APP_TEST_URL+'/user/review/already/1',{
      headers:{
        'Authorization':localStorage.getItem('Authorization')
      }
    })
      .then(res => {
        setCantReview(res.data.data)
      })
    axios.get(process.env.REACT_APP_TEST_URL+'/user/review/notYet/1/1',{
      headers:{
        'Authorization':localStorage.getItem('Authorization')
      }
    })
      .then(res=> setAbleReview(res.data.data))
      .catch(err => console.error(err.response.data.detail))

  },[]);

  console.log(ableReview);
  console.log(cantReview);


  return (
    <>
      <Header
        type={'text'}
        text='리뷰 작성'
        func={() => navigate('/mypage')}
        />
      <MainImgBanner
        src={"https://sui.ssgcdn.com/cmpt/banner/202207/2022072820481302228584678858_897.jpg"}
      />
      <div className='myReviewContainer'>

        <div onClick={(e)=>handleChangeClicked(e)} className={'myReviewSelectBox_'+`${isClicked}`}>
          작성 가능한 리뷰 {ableReview && <>{typeof ableReview==='string' ? 0 : ableReview.length} </>}건
        </div>

        <div onClick={(e)=>handleChangeClicked(e)} className={'myReviewSelectBox_'+`${!isClicked}`}>
          작성한 리뷰 {cantReview && <>{typeof cantReview==='string' ? 0 : cantReview.length} </>}건
        </div>

      </div>
      
      <MyReviewBoxs
        datas={isClicked ? ableReview : cantReview}
        type={isClicked ? true : false}
        />

      <CommonFooter/>
      <BottomNav/>
    </>
  )
}

export default Review