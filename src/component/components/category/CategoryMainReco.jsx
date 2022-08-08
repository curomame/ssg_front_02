import React from 'react'
import { Link } from 'react-router-dom'
import categoryServiceDatas from '../../../assets/datas/categoryDatas/categoryServieDatas.json'

function CategoryMainReco() {
  return (
    <>
    
      <div><h2>SSG 서비스 추천</h2></div>

      <div style={{"overflow":"scroll", "display":"flex", "justifyContent":"space-between", "flexDirection":"row"}}>
        
        {categoryServiceDatas && 
        categoryServiceDatas.map((data)=>(

        <div key={data.id} style={{"marginRight":"6px"}}>
          <Link to={data.link}>
            <img style={{"width":"54px"}} src={data.src} alt="img" />
            <p style={{"fontSize":"12px"}}>{data.title}</p>
          </Link>
        </div>

        ))
        }

        



      </div>

    </>
  )
}

export default CategoryMainReco