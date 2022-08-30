import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import BottomNav from '../../layout/BottomNav';
import Header from '../common/Header';

function MyReviewCreate() {
  
  const location = useLocation()
  const navigate = useNavigate()
  const [contents, setContents] = useState();
  

  const [orderId, titleImgUrl, productName] = [location.state.orderId, location.state.titleImgUrl, location.state.productName]

  console.log(productName)

  const handleWriteReview = () => {
      axios.post(process.env.REACT_APP_TEST_URL+'/user/review/add',{
        "orderId": orderId,
        "comment": contents,
        "star": 4,
        "size": 1,
        "color": 1,
        "thickness": 1, 
        "fit": 1,
        "reviewImgList":[
            {
              // 해당값 사진 등록시 받아옴
                "name": "imageName",
                "path": "pathName",
                "uuid":"uuid"
            }]
  
      },{
        headers:{
          "Authorization":localStorage.getItem("Authorization")
        }
      }).then(res => console.log(res.data))
        .then(err => console.error(err))
      alert('리뷰를 작성해주셔서 감사합니다 :)')
      navigate('/review');
  }

  return (
    <>
      <Header
      type={'writeReview'}/>

        <div className='myReviewWriteProductInfoBox'>
          <div><img src={process.env.REACT_APP_DISPLAY_IMG_URL+titleImgUrl} alt="" /></div>
          <div><p>{productName}</p></div>
        </div>

      <hr />

      <div className='myreviewCreateStarBox'>
        <div>별점을 선택해 주세요.</div>
        <div>
          <div>별별별별별</div>
        </div>
      </div>

      <hr />

      <div className='myreviewCreateInputBox'>
        <div><p>고객님의 리뷰가 다른 고객들에게 도움이 될 수 있어요!</p></div>
        <div><input 
                type="textarea" 
                onChange={(e)=>setContents(e.target.value)} 
                placeholder="텍스트/사진/영상을 추가 등록하면 SSG MONEY 50원을 바로 적립해 드립니다."/></div>
        
        <div className='myreviewCreateButton' onClick={handleWriteReview}>리뷰 작성!</div>
      </div>

      <BottomNav/>
    </>
  )
}

export default MyReviewCreate