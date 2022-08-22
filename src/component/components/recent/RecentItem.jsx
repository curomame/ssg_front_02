import React from 'react'
import { Link } from 'react-router-dom'

function RecentItem() {
  return (
    <>
    <div className='recentItemContainer'>
          
          <Link to='/recent'>
            <div className='recentItemInfo'>
              <h2>신세계몰</h2>
              <h3>[베네베네]상품이름</h3>
              <h4><span>10,000</span>원</h4>
            </div>
          </Link>

          <div className='recentItemRight'>

          <Link to='/recent'>
            <div>
              <img className='recentItemImg' src="//sitem.ssgcdn.com/48/64/43/item/1000031436448_i1_120.jpg" alt="" />
            </div>
          </Link>

          <div className='recentItemIcon'>
            <div><span class="material-icons-outlined">shopping_cart</span></div>
            <div><span class="material-icons-outlined">favorite_border</span></div>
          </div>
        </div>

        </div>
    </>
  )
}

export default RecentItem