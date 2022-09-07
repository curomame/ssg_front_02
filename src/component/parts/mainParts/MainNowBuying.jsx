import React from 'react'
import CommonCartParts from '../commonsParts/CommonCartParts'
import CommonWishListParts from '../commonsParts/CommonWishListParts'
import AddCartUtil from '../../../utils/AddCartUtil'

function MainNowBuying({productId}) {
  
  // 상품정보 받아오기
  // 

  // console.log(productId)
  
  return (
    <>
      <div className="mainNowBuying" >

        <div className='mainNowBuyingBox'>3,408개 구매중</div>

        <div className="nowBuyingIcons" style={{"display":"flex"}}>
          <div><CommonWishListParts productId={productId}/></div>
          <div onClick={()=>AddCartUtil(productId)}><CommonCartParts productId={productId}/></div>
        </div>

      </div>
    </>
  )
}

export default MainNowBuying