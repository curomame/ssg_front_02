import React from 'react'
import CommonTitleSub from '../../parts/commonsParts/CommonTitleSub'
import MainCreditCard from '../../parts/mainParts/MainCreditCard'
import MainTitleSub from '../../parts/mainParts/MainTitleSub'

function MainCardPromotion() {
  return (
    <>
      <CommonTitleSub
        title='이번 주 카드 프로모션'
        sub='SSGPAY로 결제하셔도 혜택 받을 수 있어요'
        type='mainTitleSubTotal'/>
        
      <MainCreditCard/>
    </>
  )
}

export default MainCardPromotion