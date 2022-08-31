import React, { Suspense } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function CartShipmentDefault() {

  const [shipData, setShipData] = useState('')

  const getShipData = () => {
    axios.get(process.env.REACT_APP_TEST_URL+'/user/addr/get',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    })
      .then(res => setShipData(res.data.data[0]))
      .catch(err => console.error(err))
    }

    useEffect(() => {
      getShipData()
    },[])


  return (
    <>
    <Suspense fallback={<div>정보 받아오는중...</div>}>
    
      <div className='cartShipmentDefaultBox'>
        <div className='cartShipmentDefaultTop'>
          <div><span className="material-icons-outlined cartDefaultIcon">pin_drop</span></div>
          <div><span className="cartDefaultTitle">주소별칭</span></div>
          <div><span className="cartDefaultPoint">기본배송지</span></div>
        </div>

        <div>[{shipData.addrZipCode}]{shipData.addrStreet}({shipData.addrDetail})</div>
        <div className='cartShipmentDefaultChange'>배송지 변경</div>
      </div>

    </Suspense>
    </>
  )
}

export default CartShipmentDefault