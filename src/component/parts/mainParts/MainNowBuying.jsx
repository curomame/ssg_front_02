import React from 'react'
import CartIcon from '../commonsParts/CartIcon'
import HeartIcon from '../commonsParts/HeartIcon'

function MainNowBuying({}) {
  
  // 상품정보 받아오기
  // 
  
  return (
    <>
      <div style={{"display":"flex","justifyContent":"space-between", "margin":"0 15px"}}>

        <div><p>3,408개 구매중</p></div>

        <div className="nowBuyingIcons" style={{"display":"flex"}}>
          <div><HeartIcon/></div>
          <div><CartIcon/></div>
        </div>

      </div>
    </>
  )
}

export default MainNowBuying