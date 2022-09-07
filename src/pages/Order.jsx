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

  const [userDatas, setUserDatas] = useState(null);
  const [productDatas, setProductDatas] = useState([]);

  useEffect(() => {

    // 일단 이거 지금 안댐
    axios.get(process.env.REACT_APP_TEST_URL+'/orders/orderspage',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => setUserDatas(res.data.data))
      .catch(err=>console.log(err))

    axios.get(process.env.REACT_APP_TEST_URL+'/cart',{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {setProductDatas([...res.data.data.cartOutputDtoList])})
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
      <OrderPriceDetail
      productDatas={productDatas}/>
      <OrderShipComment/>
      <OrderProductInfo
        productDatas={productDatas}/>
    
      <OrderFooter/>

      <OrderButton
        userDatas={userDatas}
        productDatas={productDatas}
      />
    </div>

    

    </>
  )
}

export default Order