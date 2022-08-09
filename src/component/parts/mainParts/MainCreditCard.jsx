import React from 'react'
import MainTitleSub from './MainTitleSub'

function MainCreditCard() {
  return (
    <>
    <div className='mainCards'>
      <div className='mainCardsBox'>
        <div className='upperCard'>
          <div><span style={{"fontSize":"20px"}}>~5</span>만원</div>
          <div className="upperCardIcon"><img src="https://sui.ssgcdn.com/ui/m_ssg/img/common/cmitem_card_bi74.png" alt="" /></div>
        </div>
        
        <div className='mainCardTitleSub'>
          <div>title</div>
          <div>sub</div>
        </div>

      </div>
    </div>
    </>
  )
}

export default MainCreditCard