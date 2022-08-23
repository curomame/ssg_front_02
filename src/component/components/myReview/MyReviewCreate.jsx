import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import BottomNav from '../../layout/BottomNav';
import Header from '../common/Header';

function MyReviewCreate({orderId}) {
  
  const pathId = useParams();
  const [contents, setContents] = useState();


    console.log(orderId+'here')
    

  const handleWriteReview = () => {
      axios.post('http://10.10.10.108:8080/user/review/add',{
        "userId": 1,
        "orderId": orderId.id,
        "productId":"1",
        "comment": contents,
        "star": 4,
        "size": 1,
        "color": 1,
        "thickness": 1, 
        "fit": 1,
        "reviewImgList":[
            {
                "name": "imageName",
                "path": "pathName"
            }]
  
      }).then(res => console.log(res))
  }

  return (
    <>
      <Header
      type={'writeReview'}/>

      <div>상품상세 내용 사진있고 제목있고 막 그런거임</div>
      
      <div className='myreviewCreateInputBox'>
          <div>
            <div>별점을 선택해 주세요.</div>
            <div>
              <div>별별별별별</div>
            </div>
          </div>
        

          <div><p>고객님의 리뷰가 다른 고객들에게 도움이 될 수 있어요!</p></div>
          <div><input type="textarea" onChange={(e)=>setContents(e.target.value)}/></div>
          <div className='myreviewCreateButton' onClick={handleWriteReview}>리뷰 작성!</div>
    

      </div>

      <BottomNav/>
    </>
  )
}

export default MyReviewCreate