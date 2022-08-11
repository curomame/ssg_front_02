import React from 'react'
import { Link } from 'react-router-dom'
import categoryServiceDatas from '../../../assets/datas/categoryDatas/categoryServieDatas.json'

function CategoryMainReco() {
  return (
    <>
    
      <div className='CategoryMainReco'>
        <div><h2>SSG 서비스 추천</h2></div>

        <div className='CategoryMainRecoSlideBox'>
          
          {categoryServiceDatas && 
          categoryServiceDatas.map((data)=>(

          <div className='CategoryMainRecoSlider' key={data.id} >
            <Link to={data.link}>
              <img style={{"width":"54px"}} src={data.src} alt="img" />
              <p style={{"fontSize":"12px"}}>{data.title}</p>
            </Link>
          </div>

          ))
          }
        </div>
      </div>
    </>
  )
}

export default CategoryMainReco