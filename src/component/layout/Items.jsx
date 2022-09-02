import { faCropSimple } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AddWishUtil from '../../utils/AddWishUtil'
import CommonTitleSub from '../parts/commonsParts/CommonTitleSub'
import CommonWishListParts from '../parts/commonsParts/CommonWishListParts'
import StarNReview from '../parts/commonsParts/StarNReview'
import MainTitleSub from '../parts/mainParts/MainTitleSub'

//상품 데이터 받아오기 필요
//여기서 상품 데이터 받아오기 진행해보기

function Items({itemDatas,row}) {

  const handleWishFunc = (id) => {
    AddWishUtil(id)
  }

  

  return (

    <>
      <div className="mainItemContainer" >
        
        {itemDatas && itemDatas.map((item,i) => 

          

        <div className='mainItemsContainer'>

            <div onClick={()=>handleWishFunc(item.productId)} className='mainItemWishIcon'>
              <span className="material-icons-outlined">favorite_border</span>
            </div>

        <Link to={'/product/'+item.productId}>
          <div className='mainItems' key={i}>
            <div className='mainItemsImgs'>
              <img 
            src={process.env.REACT_APP_TEST_URL+`/display?fileName=${item.titleImgUrl}`} 
            alt={'사진'}
            />

            </div>


            
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
        </Link>
        
        </div>  
        
          )}
        
        </div>

    </>
  )
}

export default Items