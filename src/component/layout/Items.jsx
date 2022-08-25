import { faCropSimple } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useState } from 'react'
import CommonTitleSub from '../parts/commonsParts/CommonTitleSub'
import CommonWishListParts from '../parts/commonsParts/CommonWishListParts'
import StarNReview from '../parts/commonsParts/StarNReview'
import MainTitleSub from '../parts/mainParts/MainTitleSub'

//상품 데이터 받아오기 필요
//여기서 상품 데이터 받아오기 진행해보기

function Items({itemDatas,row}) {

  return (

    <>
      <div className="mainItemContainer" >
        
        {itemDatas && itemDatas.map(item => 

          <div className='mainItems'>
            <div>
              <img 
            src={`http://10.10.10.167:8080/display?fileName=${item.titleImgUrl}`} 
            alt={'사진'}
            width="135px"
            height="135px"
            /></div>

              <CommonWishListParts
                type={'Inner'}
                productId={item.productId}
                />
            <ul>
              <li>신세계몰</li>
              <li className='mainItemName'>{item.productName}</li>
              <li>{(item.price).toLocaleString()}원</li>
            </ul>
            { item.avgStar 
            ? <div>
                <StarNReview 
                      point={item.avgStar}
                      count={item.productReviewCnt}/>
              </div> 
              : null}
          </div>
          
            
          )}
        
        </div>

    </>
  )
}

export default Items