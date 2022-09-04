import React from 'react'

function ProductReviewCards({datas}) {

  // console.log(datas.reviewImageDTOList.map((item) => console.log(item.imageURL)));

  // const surFaceDatas = datas.slice(0,5) 

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

        datas.reviewImageDTOList.map((img,i) => 

            
          { 
            return <div className='productReviewCardImg' key={i}>    
                    <img src={process.env.REACT_APP_DISPLAY_IMG_URL+img.imageURL} alt="" />
                  </div>
          }

        )
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