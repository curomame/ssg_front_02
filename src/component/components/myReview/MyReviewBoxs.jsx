import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MyReviewBoxs({datas}) {

  const [reviewId, setReviewId] = useState(0)

  
  return (
    <>

      {datas && 
      datas.map((item)=> 
      
      <div key={item.orderId || item.reviewId} className='myReviewBoxsContainer'>
        <div className='myReviewBoxsdate'>{item.orderDate|| item.regDate}</div>

        <div className='myReviewBoxsUnder' >
          <div className='myReviewBoxsUnderImg' style={{"backgroundColor":"gray",color:"white"}}>이미지 위치</div>
          <div className='myReviewBoxsDetailInfo' >
            <div>신세계몰</div>
            <div>{item.productName} {item.qty>2 ? `외 ${item.qty-1}건` : ""}</div>
            <div>{item.totalPrice ? (item.totalPrice).toLocaleString() : ""}</div>
          </div>
        </div>

        <div className='myReviewBoxsWriteClick'>
          {item.reviewId 
          ? <Link to={`/review/update/${item.reviewId}`}><div>리뷰수정</div></Link> 
          : <Link to={`/review/write/${item.orderId}`}><div>리뷰쓰기</div></Link>}
          
        </div>
      </div>)
      }
      
    </>
  )
}

export default MyReviewBoxs