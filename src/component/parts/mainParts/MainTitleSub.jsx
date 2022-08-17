import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function MainTitleSub({title,sub,link,price,discount,allview,fontSize,fontWeight}) {


  const [dcPrice,setDcPrice] = useState('');
  
  useEffect(() => {

    if(discount){
      setDcPrice(Number(price)*( (100- Number(discount))/100));
    }

  }, [])
  
  return (
    <>
      <div className='titleSubParts'>
        {title ? <div className='mainTitle titleTop'><h3>{title}</h3></div> : ""}

        <div className='titleBottom'>
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
      </div>
    </>
  )
}

export default MainTitleSub