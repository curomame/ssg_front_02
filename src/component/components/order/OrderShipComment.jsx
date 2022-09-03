import React from 'react'
import { useState } from 'react'
import OrderShipCommentChange from '../../parts/order/OrderShipCommentChange';

function OrderShipComment() {

  const [shipComment, setShipComment] = useState('없음')
  const [openChangeModal, setOpenChangeModal] = useState(false);
  
  return (
    <>
    <div>
    <div className='orderShipCommentContainer orderBorder'>

      <div>
        <div>배송 요청 사항</div>
        <div onClick={() => setOpenChangeModal(true)}>변경</div>
      </div>



      <div>
        <div>택배배송 요청사항</div>
        <div>{shipComment}</div>
      </div>

    </div>


    {openChangeModal 
      ? <OrderShipCommentChange
          setOpenChangeModal={setOpenChangeModal}
          setShipComment={setShipComment}/> 
      : <></>}

    </div>
    </>
  )
}

export default OrderShipComment