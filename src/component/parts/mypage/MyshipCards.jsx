import axios from 'axios'
import React from 'react'

function MyshipCards({data}) {

  //기본배송지인지

  console.log(data.addrId)

  const handleDeleteAddr = () => {
    console.log(data.addrId)
    axios.delete(process.env.REACT_APP_TEST_URL+"/user/addr/del/"+data.addrId,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className='myShipCardContainer'>

        <div><input type="radio" checked /></div>

        <div className='myShipCardAddressNameBox'>
          <div className='myShipCardAddressName'>
            <div><p>{data.addrName}</p>{data.addrDefault ? <span>기본배송지</span> : null}</div>
            <div style={{"display":"flex"}}><p>수정</p>{data.addrDefault ? null:<p onClick={handleDeleteAddr}>삭제</p>}</div>
          </div>

          <div>{data.addrZipCode}</div>
          <div>도로명 주소 : {data.addrStreet}</div>
          <div>지번 주소 : {data.addrDetail}</div>
        </div>

      </div>

      <hr />
    </>
  )
}

export default MyshipCards