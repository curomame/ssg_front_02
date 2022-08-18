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

function Review() {

  const [ableReview,setAbleReview] = useState(null)
  const [cantReview,setCantReview] = useState(null)

  const [isClicked, setIsClicked] = useState(true)

  const handleChangeClicked = (e) => {
    setIsClicked(!isClicked)
  }

  useEffect(()=>{

    axios.get('http://10.10.10.108:8080/user/review/already/1')
      .then(res => setCantReview(res.data.data))
    axios.get('http://10.10.10.108:8080/user/review/notYet/1')
      .then(res=> setAbleReview(res.data.data))

  },[])


  return (
    <>
    {/* 헤더타입 바꾸기 */}

      <Header/>
      <MainImgBanner/>
      <div className='myReviewContainer'>

        <div onClick={(e)=>handleChangeClicked(e)} className={'myReviewSelectBox_'+`${isClicked}`}>
          작성 가능한 리뷰 {ableReview && ableReview.length}건
        </div>

        <div onClick={(e)=>handleChangeClicked(e)} className={'myReviewSelectBox_'+`${!isClicked}`}>
          작성한 리뷰
        </div>

      </div>
      
      <MyReviewBoxs
        datas={isClicked ? ableReview : cantReview}
        />

      <CommonFooter/>
      <BottomNav/>
    </>
  )
}

export default Review