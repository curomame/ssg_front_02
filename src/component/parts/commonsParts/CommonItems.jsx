import React from 'react'
import { Link } from 'react-router-dom'

function CommonItems({itemDatas}) {

  console.log(itemDatas)
  return (
    <>
    {itemDatas[0] && 
      itemDatas.map((item) => (

      <div key={item.productId} className="categoryItemContainer">
      <Link to={`/product/${item.productId}`}>
      <div>
        <div><img style={{"width":"100%"}} src={process.env.REACT_APP_DISPLAY_IMG_URL+item.titleImgUrl} alt="" /></div>
        
        <div className='categoryItemText'>
        
            <div><h3>신세계몰</h3></div>
            <div><h2>{item.brandName}</h2></div>
            <div><p className='categoryItemSub'>{item.productName}</p></div>
            <div><p className={`categoryItemPrice ${item.discount ? "categoryline" : null}`}>{(item.price).toLocaleString()}원</p></div>
            {item.discountRate
              ? <div className='categoryItemDiscount'>
                  <p>{(item.price * (100 - item.discountRate)/100).toLocaleString()}원</p>
                  <p>{item.discountRate}%</p>
                </div> 
              : null}
            <div className='categoryItemStar'><p>★</p><p>{item.avgStar}</p><p>|</p><p>{(item.productReviewCnt).toLocaleString()}건</p></div>
  
          <div style={{display:"flex"}}>
            
            {item.import ? <div className='categoryAttBox'><p>해외직구</p></div> :null}
            {item.freeShip ? <div className='categoryAttBox'><p>무료배송</p></div> :null}
                  </div>
                </div>
      </div>
      </Link>
      </div>
      ))
    }
    </>
  )
}

export default CommonItems