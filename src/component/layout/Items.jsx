import React from 'react'
import MainTitleSub from '../parts/MainTitleSub'
import StarNReview from '../parts/StarNReview'

//상품 데이터 받아오기 필요
//여기서 상품 데이터 받아오기 진행해보기

function Items() {
  return (
    <>
      <div style={{"display":"flex","flexDirection":"column", "width":"135px"}}>
        <div><img 
        src="https://sui.ssgcdn.com/cmpt/banner/202207/2022072216460396994225724522_92.png" 
        alt="상품"
        width="135px"
        height="135px"
        /></div>
        <div><MainTitleSub 
        title="상품명"
        sub="상품데이터"
        price="10000"
        discount='5'
        /></div>
        <div><StarNReview point="3.0" count="3"/></div>
      </div>
    </>
  )
}

export default Items