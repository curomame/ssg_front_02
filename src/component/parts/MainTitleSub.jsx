import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MainTitleSub({title,sub,link,price,discount,allview}) {

  // console.log(price,discount);
//사항

//1. 할인율이 들어올때
  const [dcPrice,setDcPrice] = useState('');
  
  useEffect(() => {

    if(discount){
      setDcPrice(Number(price)*( (100- Number(discount))/100));
    }

  }, [])
  
  return (
    <>
      {title ? <div className='mainTitle titleTop' style={{"fontSize":"18px", "fontWeight":"600"}}><h2>{title}</h2></div> : ""}

      <div className='titleBottom' style={{"marginBottom":"14px"}}>
        {sub ? <div className='subTitle'><p>{sub}</p></div>: ""}
        {allview ? <div className='linkToAll'><Link to={link ? link : '/'}><p>전체보기</p></Link></div> : ""}
      </div>
      <div className="discountPrice">
        {price ? <div className='titlePrice'>{price}원</div> : ""}
        {discount ? <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-between"}}>
          <div>{dcPrice}원</div>
          <div>{discount}%</div>
        </div>: ""}
      </div>

    </>
  )
}

export default MainTitleSub