import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MypageReviewBox() {

  const [Review, setReview] = useState(0);
  const [Reviewed, setReviewed] = useState(0);


  useEffect(() => {

    axios.get(process.env.REACT_APP_TEST_URL+'/user/review/already/1',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {
    
      if(typeof res.data.data === 'object'){
        setReviewed(res.data.data.length)
      } else {
        setReviewed(0)
        
      }
    
    })
      .catch(err => console.error(err))

    axios.get(process.env.REACT_APP_TEST_URL+'/user/review/notYet/1/1',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }}).then(res => {

        if(typeof res.data.data === 'object'){
          setReview(res.data.data.length)
        } else {
          setReview(0)
        }

      })
        .catch(err => console.error(err))

  },[])


  return (
    <>
            <div className='mypageReviewBox'>
          <Link to='/review'>
            <div><p>지금 작성 가능한 리뷰</p></div>
            <div><p>작성가능 {Review} | 작성완료 {Reviewed}</p></div>
          </Link>
        </div>

    </>
  )
}

export default MypageReviewBox