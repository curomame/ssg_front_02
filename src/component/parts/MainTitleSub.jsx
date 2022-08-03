import React from 'react'
import { Link } from 'react-router-dom'

function MainTitleSub({title,sub,link,price}) {

  console.log(title, sub, link, price);

  [title,sub,link] = ['title', 'sub','/']

  return (
    <>

      {title ? <div className='mainTitle titleTop' style={{"fontSize":"18px", "fontWeight":"600"}}><h2>{title}</h2></div> : ""}

      <div className='titleBottom' style={{"marginBottom":"14px"}}>
        {sub ? <div className='subTitle'><p>{sub}</p></div>: ""}
        <div className='linkToAll'><Link to={link}><p>전체보기</p></Link></div>
      </div>
      {price ? <div className='titlePrice'>{price}</div> : ""}
    
    </>
  )
}

export default MainTitleSub