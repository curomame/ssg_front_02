import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartNotLogin() {
  
  const navigate = useNavigate()

  const handleCartLogin = () => {
    navigate('/login')
  }
  
  return (
    <>
      <div className='cartNotLogin'>
        <div><span style={{fontSize:"8rem"}} className="material-icons-outlined">shopping_cart</span></div>
        <div><h4>장바구니에 담긴 상품이 없습니다.</h4></div>
        <div><p>로그인을 하시면 담긴 상품이 있는지 바로 확인하실 수 있습니다!</p></div>
        <div onClick={handleCartLogin}><h3>로그인하기</h3></div>
      </div>
    </>
  )
}

export default CartNotLogin