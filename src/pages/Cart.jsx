import React, { Suspense } from 'react'
import CartNotLogin from '../component/components/cart/CartNotLogin';
import Header from '../component/components/common/Header'
import '../assets/css/cart.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { TempAuthState } from '../recoil/atoms/TempAuthState';
import CartItemCards from '../component/components/cart/CartItemCards';


function Cart() {
 
  const tempAuth = useRecoilValue(TempAuthState)
  const [cartDatas, setCartDatas] = useState(null);

  useEffect(() => {
    
    axios.get(process.env.REACT_APP_TEST_URL+'/cart',{
      headers:{
        'Authorization':localStorage.getItem('Authorization')
      }
    })
      .then(res => {
        // console.log(res.data.data.cartOutputDtoList)  
        setCartDatas(res.data.data.cartOutputDtoList)
      })
      .catch(err => console.error(err))
  },[])

  // useEffect(()=>{},[cartDatas])


  return (
    <>
        
        <Header
          type={'cart'}/>
        
        {tempAuth 
        ? <div>
            <div>일반배송 정기배송 함께 장보기</div>
            <div>주소별칭</div>
          </div>

        : <CartNotLogin/>}

        {cartDatas ? 
        
        <div>
          <div>전체 선택 | 배송방법 바꾸기 | 품절삭제</div>
            
            
              <CartItemCards
                cartDatas={cartDatas}
                setCartDatas={setCartDatas}
              />



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