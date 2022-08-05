import React from 'react'

function MyCart() {

  const toMyCart = () => {
    console.log('my cart로 이동합니다 :)')
  }

  return (
    <>
      <span onClick={toMyCart} className="headerCartIcon material-icons-outlined">shopping_cart</span>
    </>
  )
}

export default MyCart