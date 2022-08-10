import React from 'react'
import '../../../assets/css/category/category.css'

function CategoryItem({item}) {

  console.log(item);

  return (
    <>
      <div className="categoryItemContainer" style={{"width":"50%", "marginTop":"10px"}}>
        {/* <div>
          <div><p>SSG개런티</p></div>
        </div> */}

        <div>
          <div><img style={{"width":"100%"}} src={item.src} alt="" /></div>
          
          <div className='categoryItemText'>
          
              <div><h3>{item.mall}</h3></div>
              <div><h2>{item.title}</h2></div>
              <div><p className='categoryItemSub'>{item.sub}</p></div>
              <div><p className={`categoryItemPrice ${item.discount ? "categoryline" : null}`}>{(item.price).toLocaleString()}원</p></div>
              {item.discount 
                ? <div className='categoryItemDiscount'>
                    <p>{(item.price * (100 - item.discount)/100).toLocaleString()}원</p>
                    <p>{item.discount}%</p>
                  </div> 
                : null}
              <div className='categoryItemStar'><p>★</p><p>{item.star}</p><p>|</p><p>{(item.reviewCount).toLocaleString()}건</p></div>

            <div style={{display:"flex"}}>
              
              {item.import ? <div className='categoryAttBox'><p>해외직구</p></div> :null}
              {item.freeShip ? <div className='categoryAttBox'><p>무료배송</p></div> :null}
            </div>
          </div>
            
      

        </div>
      </div>
    </>
  )
}

export default CategoryItem