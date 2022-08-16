import React from 'react'
import CartNotLogin from '../component/components/cart/CartNotLogin';
import Header from '../component/components/common/Header'
import '../assets/css/cart.css'

function Cart() {

  const login = false;

  return (
    <>
    <div className='cartBackgroundColor'>
        
        <Header
          type={'cart'}/>
        
        {/* 로그인이 되어 있지 않다면? */}
        {login ? null: <CartNotLogin/>}
        

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
      </div>
    </>
  )
}

export default Cart