import React, { Suspense } from 'react'
import CartNotLogin from '../component/components/cart/CartNotLogin';
import Header from '../component/components/common/Header'
import '../assets/css/cart.css'
import { useState,useEffect } from 'react';
import axios from 'axios';


function Cart() {

  const login = false;

  const [cartDatas, setCartDatas] = useState(null);
  const [cartCount, setCartCount] = useState([])

  useEffect(() => {
    axios.get('http://10.10.10.167:8080/cart/1')
      .then(res => setCartDatas(res.data.data))
    // return () => {
    //   alert('페이지 벗어남 테스트')
    // }
  },[])


  const handlePlusCount = (e) =>{
    // console.log(cartDatas[+e.target.id-1])

    axios.put('http://10.10.10.167:8080/cart/mod',{
      "userId":1,
      "cartId":+e.target.id,
      "qty":cartDatas[+e.target.id-1].qty + 1
    }).then(res => console.log(res.data))

    setCartDatas((current) => {

      let newCondition = [...current];
      newCondition[+e.target.id-1].qty = cartDatas[+e.target.id-1].qty + 1;
      return newCondition;

    })

  }
  
  const handleMinusCount = (e) => {

    axios.put('http://10.10.10.167:8080/cart/mod',{
      "userId":1,
      "cartId":+e.target.id,
      "qty":cartDatas[+e.target.id-1].qty - 1
    })

    setCartDatas((current) => {

      let newCondition = [...current];
      newCondition[+e.target.id-1].qty = cartDatas[+e.target.id-1].qty - 1 ;
      return newCondition;

    })

  }


  const handleRemoveCart = (e) => {

    axios.delete(`http://10.10.10.167:8080/cart/del/${1}/${+e.target.id}`)
      .then(res => console.log(res.data))

    setCartDatas((current) => {

      let newCondition = [...current];
      newCondition.splice(+e.target.id-1,1);
      return newCondition;

    })

  }

  return (
    <>
        
        <Header
          type={'cart'}/>
        
        {/* 로그인이 되어 있지 않다면? */}
        {login ? null: <CartNotLogin/>}

        {/* 장바구니 아이템 나오는 부분 */}
        {cartDatas ? 
        
        <div>
          <div>전체 선택 | 배송방법 바꾸기 | 품절삭제</div>
            
            
            {/* 반복 분기 진행 */}
            {cartDatas && cartDatas.map((item) => (
              

                <div key={item.productId} className='cartItemContainer'>
                    {/* 왼쪽 */}
                    <div className='cartItemImg'>이미지 부분</div>
                    {/* 오른쪽 */}
                    <div className='cartItemBox'>
                      <div>
                        <div className='cartItemTitleFunc'>
                          <div>신세계몰 주식회사 플랫폼</div>

                          <div className='cartItemTitleFuncIcons'>
                            <div onClick={handleRemoveCart}>
                              <span id={item.productId} className="material-icons-outlined">delete</span>
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
                          <div onClick={handleMinusCount}>
                            <span id={item.productId} className="material-icons-outlined">remove</span>
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


            
            




            {/* 금액부분 */}
            <div className='cartTotalPrice'>
              <div>결제 예정 금액</div>
              <div className='cartTotalPriceOrder'>
                <div>주문금액</div>
                <div>+178,000</div>
              </div>

              <div className='cartTotalPriceDiscount'>
                <div>상품할인</div>
                <div>-1,900</div>
              </div>

              <div className='cartTotalPriceShipping'>
                <div>배송비</div>
                <div>000</div>
              </div>

              <div>
                <div>총 결제예정금액</div>
                <div>158,135원</div>
              </div>

            </div>
          </div>

          :
          null
        }

          




        <div className='cartInfo'>
          <h3>장바구니 상품 안내</h3>
          <ul>
            <li>· 장바구니에 담은 상품은 최대 150개까지 보관됩니다.</li>
            <li>· 상품 우측 상단의 핀셋 아이콘으로 ‘계속 담아두기’를 설정해 두시면 시간이 지나도 상품이 삭제되지 않습니다.</li>
          </ul>
        </div>

        <div className='cartInfoCaution'>
          <ul>
            <li>㈜에스에스지닷컴에서 판매되는 상품 중에는 개별 판매자가 판매하는 오픈마켓 상품이 포함되어 있습니다.</li>
            <li>오픈마켓 상품의 경우, ㈜에스에스지닷컴은 통신판매중개자로서 거래 당사자가 아니며, 입점 판매사가 등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다.</li>
          </ul>
        </div>
    </>
  )
}

export default Cart