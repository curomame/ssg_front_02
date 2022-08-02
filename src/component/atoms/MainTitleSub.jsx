import React from 'react'
import { Link } from 'react-router-dom'

function MainTitleSub({title,sub,link,price}) {

  [title, sub, link, price] = ['title area','sub area','c','price']

  return (
    <>

      {title ? <div className='mainTitle titleTop'><h2>{title}</h2></div> : ""}

      <div className='titleBottom'>
        {sub ? <div className='subTitle'><p>{sub}</p></div>: ""}
        <div className='linkToAll'><Link to="/"><p>전체보기</p></Link></div>
      </div>
      {price ? <div className='titlePrice'>{price}</div> : ""}
    
    </>
  )
}

export default MainTitleSub