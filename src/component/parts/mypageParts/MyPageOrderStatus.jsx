import axios from 'axios';
import React from 'react'

function MyPageOrderStatus({datas}) {

// /orders/cancel/{orderId} 주문 취소
// /orders/confirm 주문 확정
// /orders/modstate 상품교환 및 반품 신청


  const handleCancelOrder = () => {
   
    axios.delete(process.env.REACT_APP_TEST_URL+'')

  }

  return (
    <>
          {datas && datas.map((item) => {
        
        console.log(item);

        return <div key={item.orderId} className='mypageOrderStatusBox'>
          
          <div>{item.orderId}</div>
          <div>{item.productName}</div>
          <div>{item.orderState}</div>

          <div className='mypageOrderStatusButton'>
            <div onClick={()=>handleCancelOrder(item.orderId)}>주문취소</div>
            <div>구매확정</div>
            <div>상품교환</div>
            <div>반품신청</div>
          </div>
        </div>
      
      })}

    </>
  )
}

export default MyPageOrderStatus