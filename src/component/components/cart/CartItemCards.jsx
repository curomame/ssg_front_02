import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import CartOptionChange from '../../parts/cart/CartOptionChange';

function CartItemCards({cartDatas,setCartDatas}) {

  const [optChange,setOptChange] = useState(false);
  const [itemOptData, setItemOptData] = useState('')



  const handlePlusCount = (e) => {
    const newDatas = cartDatas;
    newDatas.map((i) => {if(Number(e.target.id) === i.productOptionId) (i.qty = i.qty+1)})
    setCartDatas([...newDatas]); 
  }

  const handleMinusCount = (e) => {
      const newDatas = cartDatas;
      newDatas.map((i) => 
        { if(Number(e.target.id) === i.productOptionId){
          if(i.qty < 2){
            i.qty = 1
            window.alert('수량을 1 아래로 줄일 수 없습니다.')
          } else {
            (i.qty = i.qty-1)
          }
        }})
      setCartDatas([...newDatas]); 
  }

  const handleRemoveCart = (e) => {

    if(window.confirm('정말로 삭제하시겠습니까?')){
      const newCondition = [];
      cartDatas.map((i) => {if(Number(e.target.id) !== i.cartId) newCondition.push(i)})
  
      axios.delete(process.env.REACT_APP_TEST_URL+`/cart/del/${+e.target.id}`,{
        headers:{
          "Authorization":localStorage.getItem("Authorization")
        }
      })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.error('카트 제거 에러',err))
      
        console.log(newCondition);
        setCartDatas([...newCondition])
    }
  }

  const handleChangeOpt = (cartId) => {
    
    axios.get(process.env.REACT_APP_TEST_URL+`/cart/option/${cartId}`,{
      headers:{
        "Authorization":localStorage.getItem("Authorization")
      }
    })
      .then(res => setItemOptData(res.data.data))
      .catch(err => console.error(err))

    
    setOptChange(true);

  }

  // console.log(typeofcartDatas);

  return (
    <>
    <div>
    {cartDatas && cartDatas.map((item) => (  
        <div key={item.productOptionId} className='cartItemContainer'>
            <div className='cartItemImg'>
              <img src={process.env.REACT_APP_DISPLAY_IMG_URL+item.titleImgUrl} alt="이미지" />
            </div>

            <div className='cartItemBox'>

                <div className='cartItemTitleFunc'>
                  <div> 
                    <div> 신세계몰 <p>{item.productName}</p></div>
                    <div> 옵션 : {item.optionDescription}</div>
                  </div>
                  

                  <div className='cartItemTitleFuncIcons'>
                    <div onClick={handleRemoveCart} id={item.cartId}>
                      <span id={item.cartId} className="material-icons-outlined">delete</span>
                    </div>
                  </div>


  

              </div>

              <div className='cartItemPrice'>
                <div><p>{(item.price * item.qty).toLocaleString()}<span>원</span></p></div>
                <div className='cartItemPricePNM'>
                  <div >
                    <span onClick={handleMinusCount} id={item.productOptionId} className="material-icons-outlined">remove</span>
                  </div>

                  <input type="number" 
                          defaultValue={item.qty}
                          value={item.qty} />

                  <div onClick={handlePlusCount} >
                    <span id={item.productOptionId} className="material-icons-outlined">add</span>
                  </div>

                  
                </div>
                  

                   
              </div>

                <div onClick={() => handleChangeOpt(item.cartId)} className='cartItemOptChange'>옵션 변경</div>
                
    
            </div>
          </div>
          
    ))}
    {optChange 
          ? <CartOptionChange 
          itemOptData={itemOptData}/> 
          : null}

    </div>
    </>
  )
}

export default CartItemCards