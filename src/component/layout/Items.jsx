import React from 'react'
import CommonTitleSub from '../parts/commonsParts/CommonTitleSub'
import StarNReview from '../parts/commonsParts/StarNReview'
import MainTitleSub from '../parts/mainParts/MainTitleSub'

//상품 데이터 받아오기 필요
//여기서 상품 데이터 받아오기 진행해보기

function Items({imgsrc, alt, title, sub, price, discount,isReview}) {
  
//개별 아이템
//135px 고정
  // {title ? title : "기본제목값"}
// 넘겨주는 값까지만 생각

  return (
    <>
      <div style={{"display":"flex","flexDirection":"column", "width":"135px"}}>
        <div><img 
        src={imgsrc ? imgsrc : "https://simg.ssgcdn.com/trans.ssg?src=/cmpt/banner/202207/2022072913301745431834913283_620.jpg&w=750&t=1b1ed0795e074eba045ba768cadf532d6fc57a87"} 
        alt={alt}
        width="135px"
        height="135px"
        /></div>
        <ul>
          <li>신세계몰</li>
          <li>상품명</li>
          <li>설명</li>
          <li>가격</li>
        </ul>
        { isReview && <div><StarNReview point="3.0" count="3"/></div>}
      </div>
    </>
  )
}

export default Items