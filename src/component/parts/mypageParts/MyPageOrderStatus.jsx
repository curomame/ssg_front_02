import React from 'react'

function MyPageOrderStatus({datas}) {
  return (
    <>
          {datas && datas.map((item) => {
        
        console.log(item);

        return <div className='mypageOrderStatusBox'>
          
          <div>{item.orderId}</div>
          <div>{item.productName}</div>
          <div>{item.orderState}</div>

          <div className='mypageOrderStatusButton'>
            <div>주문취소</div>
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