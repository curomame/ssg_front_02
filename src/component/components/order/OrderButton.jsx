import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderButton({productDatas,userDatas}) {
  
  const navigate = useNavigate()
  const [totalPrice,setTotalPrice] = useState(0)
  const [cartIds,setCartIds] = useState([])

  useEffect(() => {

    let newPrice = 0;
    let newIds = []
    if(productDatas){ 
      for(let item of productDatas){
        newPrice += item.totalPrice
        newIds.push(item.cartId)
      }
    }

    setTotalPrice(newPrice)
    setCartIds([...newIds])


  },[productDatas])
  
  
  const deleteCart = () => {

    axios.delete(process.env.REACT_APP_TEST_URL+'/cart/delSelect',
    {
      data:{
        "cartIdList":cartIds
      },
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => console.log(res.data))
      .catch(err => console.err(err))

  }

  const handleOrderPush = () => {

    const productInfo = []
    productDatas.map((item) => {
      let newObj = {};
      newObj.productOptionId=item.productOptionId;
      newObj.qty=item.qty;
      productInfo.push(newObj)
    })
    const address = userDatas.address[0].id;

    axios.post(process.env.REACT_APP_TEST_URL+'/orders/user',
    {
      "addressId":address,
      "productInfo":productInfo

    },{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    }).then(res => {

      if(res.status === 200){
        window.alert('주문이 완료되었습니다!');
        deleteCart()
        navigate('/mypage')
      }

    })
      .catch(err => console.log(err))

    

  }


  return (
    <>

      <div onClick={() => handleOrderPush()} className='orderButton'>
        <p>{(totalPrice).toLocaleString()}원 결제하기</p>
      </div>
    
    </>
  )
}

export default OrderButton