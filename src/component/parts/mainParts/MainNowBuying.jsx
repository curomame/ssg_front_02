import React from 'react'
import CartIcon from '../commonsParts/CartIcon'
import HeartIcon from '../commonsParts/HeartIcon'

function MainNowBuying({}) {
  
  // 상품정보 받아오기
  // 
  
  return (
    <>
      <div className="mainNowBuying" >

        <div className='mainNowBuyingBox'>3,408개 구매중</div>

        <div className="nowBuyingIcons" style={{"display":"flex"}}>
          <div><HeartIcon/></div>
          <div><CartIcon/></div>
        </div>

      </div>
    </>
  )
}

export default MainNowBuying