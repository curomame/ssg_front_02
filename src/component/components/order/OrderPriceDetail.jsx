import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function OrderPriceDetail({productDatas}) {
  
  
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDC, setTotalDC] = useState(0)
  const [lastPrice, setLastPrice] = useState(0)

  useEffect(() => {

    // console.log(productDatas);
    
    let Ptotal = 0
    let Pdc = 0;
    let Plp = 0

    if(productDatas!==null){
       
      productDatas.forEach((price) => {

        Ptotal+= price.price
        Pdc += +((price.price*((100 - price.discountRate)/100))).toFixed(0)

  
      })
  
      console.log(Ptotal-Pdc);

      
      setTotalPrice(Ptotal)
      setTotalDC(Ptotal-Pdc)
      setLastPrice(Pdc)

    }


  },[productDatas])

  return (
  
  <>
  
  <div className='orderPriceDetailContainer orderBorder'>
    <div>결제 예정 금액</div>
    <div className='orderPrice'>
      <div>주문금액</div>
      <div><p>+{(totalPrice).toLocaleString()}원</p></div>
    </div>

    <div className='orderDC'>
      <div>할인금액</div>
      <div><p>-{(totalDC).toLocaleString()}원</p></div>
    </div>


    <hr></hr>

    <div className='orderLast'>
      <div>총 결제예정금액</div>
      <div><p>+{(lastPrice).toLocaleString()}원</p></div>
    </div>
  </div>
  </>
    
  )
}

export default OrderPriceDetail