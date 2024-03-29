import React, { Suspense } from 'react'

function OrderProductInfo({productDatas}) {
  
  console.log(productDatas);
  
  return (
    <>
      <div className='orderProductInfoContainer orderBorder'>

        <div>주문 상품</div>
      
      {productDatas && productDatas.map((item,idx)=> 
      
      {return <div key={idx} className='orderProductInfoBox'>
        <div><img src={process.env.REACT_APP_DISPLAY_IMG_URL+item.titleImgUrl} alt="" /></div>
        
        <div className='orderProductInfoDetail'>
          <div>신세계몰</div>
          <div>{item.brandName} {item.productName}</div>
          <div>옵션 : {item.optionDescription}</div>
          <div>
            <div className='orderProductInfoDetailBox'>
              <div className='orderProductInfoDetailDC'>{(+(item.totalPrice*((100-item.discountRate)/100)).toFixed(0)).toLocaleString()}원</div>
              <div>{(item.totalPrice).toLocaleString()}원</div>
            </div>
            <div>수량{item.qty}개</div>
          </div>
        </div>

      </div>}
      
      )}



      </div>
    </>
  )
}

export default OrderProductInfo