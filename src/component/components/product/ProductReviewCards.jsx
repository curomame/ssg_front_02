import React from 'react'

function ProductReviewCards() {
  return (
    <>
      <div className='productReviewCard'>
        <div className='productReviewCardTop'>
          <div>★★★★★</div>
          <div>일반</div>
          <div>리뷰날짜</div>
          <div>아이디</div>
        </div>

        <div className='productReviewCardImg'>
          <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220825163428_1179977700_0_1.jpg&w=120&h=120&autoOrient=true&t=bfd9abc69cd6438f3acdc7e40311fcff871a7886" alt="" />
        </div>

        <div className='productReviewCardBottom' >
          <div><p>배송은 빠르게 왔고 무게가 상당하네요! 선물받으신 분이 좋아하셨음 좋겠어요:)</p></div>
          <div><p>{'>'}</p></div>  
        </div>

        <hr />
      </div>
    </>
  )
}

export default ProductReviewCards