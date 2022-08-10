import React from 'react'
import { Link } from 'react-router-dom'

function CommonTitleSub({title,sub,link, type, price}) {
// type도 받아와야함

    return (
      <>
        <div className={type} >
          <div>
            <div><h3>{title}</h3></div>
            <div><p>{sub}</p></div>
            {price ? <div><p>{price}원~</p></div> : null}
          </div>
        
        {link &&
          <div>
            <div><Link to={link}>전체보기 {'>'}</Link></div>
          </div>
          }
           
          
        </div>
      </>
  )
}

export default CommonTitleSub