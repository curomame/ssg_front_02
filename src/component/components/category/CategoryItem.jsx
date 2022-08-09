import React from 'react'

function CategoryItem() {
  return (
    <>
      <div style={{"width":"50%"}} className='test'>
        <div>
          <div><p>SSG개런티</p></div>
        </div>

        <div>
          <div><img style={{"width":"100%"}} src="//sitem.ssgcdn.com/56/23/61/item/1000456612356_i1_232.jpg" alt="" /></div>
          <div><h3>신세계몰</h3></div>
          <div><h2>버버리</h2></div>
          <div><p>다이아몬드 어쩌고</p></div>
          <div><p>1,620,000원</p></div>
        </div>

        <div style={{display:"flex"}}>
          <div><p>해외직구</p></div>
          <div style={{marginLeft:"5px"}}><p>무료배송</p></div>
        </div>
      </div>
    </>
  )
}

export default CategoryItem