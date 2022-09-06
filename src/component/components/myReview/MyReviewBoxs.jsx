import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function MyReviewBoxs({datas,type}) {

  console.log(datas)



  return (
    <>
    
    

      {datas ?
      datas.map((item)=> 
      
      <div key={item.orderId || item.reviewId} className='myReviewBoxsContainer'>
        <div className='myReviewBoxsdate'>{item.orderDate|| item.regDate}</div>

        <div className='myReviewBoxsUnder' >
          <div className='myReviewBoxsUnderImg'>
            <img src={process.env.REACT_APP_DISPLAY_IMG_URL+item.titleImgUrl} alt="" />
          </div>
          <div className='myReviewBoxsDetailInfo' >
            <div>신세계몰</div>
            <div>{item.productName} {item.qty>2 ? `외 ${item.qty-1}건` : ""}</div>
            <div>{item.totalPrice ? (item.totalPrice).toLocaleString() : ""}</div>
          </div>
        </div>

        <div className='myReviewBoxsWriteClick'>
          {item.reviewId
           
          ? <Link to={`/review/update`} 
                  state={{"orderId":item.orderId, "productId":item.productId}}> 
                  <div>리뷰수정</div>
            </Link>

          : <Link to={`/review/write`} 
                  state={{"orderId":item.orderId, 
                          "titleImgUrl":item.titleImgUrl, 
                          "productName":item.productName }}>
                  <div>리뷰쓰기</div>
            </Link>}
          
        </div>
      </div>)



      :

      type ? 
      
      <div>
        <p>최근 3개월간 구매 내역이 없습니다.</p>

        <p>SSG.COM이 준비한 상품들을 구매하시고</p>
        <p>리뷰를 작성하시면 다양한 혜택을 받을 수 있습니다.</p>
      </div>
      
      : 
      <div>
        <p>최근 3개월간 작성한 리뷰 내역이 없습니다.</p>

        <p>리뷰를 작성하시면 다양한 혜택을 받을 수 있습니다.</p>
      </div>
      
      }
      
    </>
  )
}

export default MyReviewBoxs