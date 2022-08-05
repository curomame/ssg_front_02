import React from 'react'
import MainTitleSub from '../parts/MainTitleSub'
import StarNReview from '../parts/StarNReview'

//상품 데이터 받아오기 필요
//여기서 상품 데이터 받아오기 진행해보기

function Items({imgsrc, alt, title, sub, price, discount}) {
  
//개별 아이템
//135px 고정
  // {title ? title : "기본제목값"}


  return (
    <>
      <div style={{"display":"flex","flexDirection":"column", "width":"135px"}}>
        <div><img 
        src={imgsrc ? imgsrc : "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&w=750&t=1b1ed0795e074eba045ba768cadf532d6fc57a87"} 
        alt={alt}
        width="135px"
        height="135px"
        /></div>
        <div>
          <MainTitleSub 
            title={title ? title : "기본제목값"}
            sub={sub ? sub : "기본 설명값"}
            price={price ? price : "30000"}
            discount={discount && discount}
        /></div>
        <div><StarNReview point="3.0" count="3"/></div>
      </div>
    </>
  )
}

export default Items