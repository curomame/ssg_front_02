import { faCropSimple } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import CommonTitleSub from '../parts/commonsParts/CommonTitleSub'
import StarNReview from '../parts/commonsParts/StarNReview'
import MainTitleSub from '../parts/mainParts/MainTitleSub'

//상품 데이터 받아오기 필요
//여기서 상품 데이터 받아오기 진행해보기

function Items({itemDatas,row}) {
  
//개별 아이템
//135px 고정
  // {title ? title : "기본제목값"}
// 넘겨주는 값까지만 생각

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