import React from 'react'

function MyshipCards() {

  //기본배송지인지

  return (
    <>
      <div className='myShipCardContainer'>

        <div><input type="radio" checked/></div>

        <div className='myShipCardAddressNameBox'>
          <div className='myShipCardAddressName'>
            <div><p>주소별칭</p><span>기본배송지</span></div>
            <div><p>수정</p></div>
          </div>

          <div>(12345)</div>
          <div>도로명 주소 : </div>
          <div>지번 주소 : </div>
        </div>

      </div>

      <hr />
    </>
  )
}

export default MyshipCards