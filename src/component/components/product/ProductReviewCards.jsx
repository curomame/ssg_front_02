import React from 'react'

function ProductReviewCards({datas}) {
  return (
    <>
      <div className='productReviewCard'>
        <div className='productReviewCardTop'>
          <div>★★★★★</div>
          <div>일반</div>
          <div>{datas.regDate}</div>
          <div>{datas.userId}</div>
        </div>


        {datas.reviewImageDTOList[0] && 
        <div className='productReviewCardImg'>    
          <img src="https://simg.ssgcdn.com/trans.ssg?src=/uphoto/202208/20220825163428_1179977700_0_1.jpg&w=120&h=120&autoOrient=true&t=bfd9abc69cd6438f3acdc7e40311fcff871a7886" alt="" />
        </div>
      }
        

        <div className='productReviewCardBottom' >
          <div><p>{datas.comment}</p></div>
          <div><p>{'>'}</p></div>  
        </div>

        <hr />
      </div>
    </>
  )
}

export default ProductReviewCards