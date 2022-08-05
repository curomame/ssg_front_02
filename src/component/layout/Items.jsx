import React from 'react'
import MainTitleSub from '../parts/MainTitleSub'
import StarNReview from '../parts/StarNReview'

//상품 데이터 받아오기 필요
//여기서 상품 데이터 받아오기 진행해보기

function Items({imgsrc, alt, title, sub, price, discount}) {
  
//개별 아이템


  return (
    <>
      <div style={{"display":"flex","flexDirection":"column", "width":"135px"}}>
        <div><img 
        src={imgsrc} 
        alt={alt}
        width="135px"
        height="135px"
        /></div>
        <div>
          <MainTitleSub 
            title={title}
            sub={sub}
            price={price}
            discount={discount}
        /></div>
        <div><StarNReview point="3.0" count="3"/></div>
      </div>
    </>
  )
}

export default Items