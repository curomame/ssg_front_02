import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function OrderButton({productDatas}) {
  
  const [totalPrice,setTotalPrice] = useState(0)
  
  useEffect(() => {

    let newPrice = 0;
    if(productDatas){ 
      for(let item of productDatas){
        newPrice += item.totalPrice
      }
    }
    setTotalPrice(newPrice)
  },[])
  
    
  const handleOrderPush = () => {
    axios.get(process.env.REACT_APP_TEST_URL+'/order/user',{
      
      // 보내는 형식 한번 더 확인
        
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => console.log(res.data))
      .catch(err => console.log(err))

  }

  return (
    <>

      <div onClick={() => handleOrderPush()} className='orderButton'><p>{(totalPrice).toLocaleString()}원 결제하기</p></div>
    
    </>
  )
}

export default OrderButton