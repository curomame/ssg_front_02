import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';

function CartItemCards({cartDatas,setCartDatas}) {


  const handlePlusCount = (e) => {
    const newDatas = cartDatas;
    newDatas.map((i) => {if(Number(e.target.id) === i.productId) (i.qty = i.qty+1)})
    setCartDatas([...newDatas]); 
  }


  const handleMinusCount = (e) => {
    const newDatas = cartDatas;
    newDatas.map((i) => {if(Number(e.target.id) === i.productId) (i.qty = i.qty-1)})
    // console.log(newDatas)
    setCartDatas([...newDatas]); 
  }

  const handleRemoveCart = (e) => {

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

  return (
    <>

    {cartDatas && cartDatas.map((item) => (  
        <div key={item.productId} className='cartItemContainer'>
            <div className='cartItemImg'>
              <img src={process.env.REACT_APP_DISPLAY_IMG_URL+item.titleImgUrl} alt="이미지" />
            </div>
            <div className='cartItemBox'>
              <div>
                <div className='cartItemTitleFunc'>
                  <div>신세계몰 주식회사 플랫폼</div>

                  <div className='cartItemTitleFuncIcons'>
                    <div onClick={handleRemoveCart} id={item.cartId}>
                      <span id={item.cartId} className="material-icons-outlined">delete</span>
                    </div>
                  </div>

                </div>
              
                <div className='cartItemTitleTitleOption'>
                  <div><p>{item.productName}</p></div>
                  <div>옵션 : L</div>
                </div>

              </div>

              <div className='cartItemPrice'>
                <div><p>{(item.price * item.qty).toLocaleString()}원</p></div>
                <div className='cartItemPricePNM'>
                  <div >
                    <span onClick={handleMinusCount} id={item.productId} className="material-icons-outlined">remove</span>
                  </div>

                  <input type="number" 
                          value={ item.qty } />

                  <div onClick={handlePlusCount} >
                    <span id={item.productId} className="material-icons-outlined">add</span>
                  </div>
                </div>
              </div>

              <div className='cartItemButton' >
                <div>옵션변경</div>
                <div>바로구매</div>
              </div>

            </div>
          </div>
    ))}
    </>
  )
}

export default CartItemCards