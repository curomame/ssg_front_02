import axios from 'axios'
import React, { Suspense } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../component/components/common/Header'
import OrderButton from '../component/components/order/OrderButton'
import OrderFooter from '../component/components/order/OrderFooter'
import OrderPriceDetail from '../component/components/order/OrderPriceDetail'
import OrderProductInfo from '../component/components/order/OrderProductInfo'
import OrderShipComment from '../component/components/order/OrderShipComment'
import OrderShipment from '../component/components/order/OrderShipment'

function Order() {

  const [userData, setUserDatas] = useState(null);
  const [productDatas, setProductDatas] = useState(null);

  useEffect(() => {

    // 일단 이거 지금 안댐
    axios.get(process.env.REACT_APP_TEST_URL+'/orders/ordersPage',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => console.log(res.data))
      .catch(err=>console.log(err))

    axios.get(process.env.REACT_APP_TEST_URL+'/cart',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {setProductDatas(res.data.data.cartOutputDtoList)})
      .catch(err=>console.log(err))



  },[])

  return (
    <>
    
    <Header
      type={'text'}
      text='결제하기'
    />

    <div className='orderContainer'>
    
      <OrderShipment/>
      <OrderPriceDetail/>
      <OrderShipComment/>
      <OrderProductInfo
        productDatas={productDatas}/>
    
      <OrderFooter/>
      <OrderButton
        productDatas={productDatas}
      />

    </div>

    

    </>
  )
}

export default Order