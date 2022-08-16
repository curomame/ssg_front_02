import React from 'react'
import { Link } from 'react-router-dom'

function MyCart() {


  return (
    <>
      <div style={{"marginTop":"auto", "marginBottom":"auto", alignContent:"center"}}>
        <Link to='/cart'><span  className="headerCartIcon material-icons-outlined">shopping_cart</span></Link>
      </div>
    </>
  )
}

export default MyCart